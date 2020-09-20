import { $ } from '../utilities';
import { App } from '../app';
import { Field } from '../fields/field';
import { LocalStorage } from '../storage/local-storage';
import { SelectField } from '../fields/select-field';
import { FieldType } from '../fields/field-type';
import { TextField } from '../fields/text-field';

export class Form {
    private readonly $fields: Array<Field>;
    private readonly $id: string;

    public constructor(id: string = null) {
        this.$id = id;

        this.$fields = id
            ? App.getFieldsFromJsonObjects(LocalStorage.load(id))
            : new Array<Field>();
    }

    public getValue(): any {
        const value = new Array<object>();
        this.$fields.forEach(field => {
            value.push(field.getValue())
        });
        return value;
    }

    public render(context: Element = null): void {
        context = context || App.getDefaultRenderingContext();
        context.innerHTML = '';

        const typeSelectContainer = $('div', {
            className: 'type-select-container'
        }, context);
        const typeSelect = new SelectField('select type', FieldType.TEXT,
            FieldType.CHECKBOX,
            FieldType.DATE,
            FieldType.EMAIL,
            FieldType.SELECT,
            FieldType.TEXT,
            FieldType.TEXTAREA
        ).render(typeSelectContainer);
        const btnContainer = $('div', {
            className: 'btn-container'
        }, typeSelectContainer);
        $('a', {
            innerText: 'new field',
            href: '#',
            onclick: () => this.renderFieldConfig(typeSelect.value, context)
        }, btnContainer);

        const form = $('form', {
            onsubmit: event => event.preventDefault()
        }, context);
        this.$fields.forEach(field => field.render(form));

        const nav = $('ul', { }, context);

        const save = $('li', { }, nav)
        $('a', {
            innerText: 'save',
            href: '#',
            onclick: event => this.save(event)
        }, save);

        const cancel = $('li', { }, nav)
        $('a', {
            innerText: 'cancel',
            href: '#',
            onclick: () => window.location.href = 'index.html'
        }, cancel);
    }

    private renderFieldConfig(type: string, context: Element = null) {
        const hasArgOptions = App.hasArgOptions(type);
        const hasArgPlaceholder = App.hasArgPlaceholder(type);

        context = context || App.getDefaultRenderingContext();
        context.innerHTML = '';

        let label, defValue, placeholder, options;
        label = new TextField('label').render(context);
        defValue = new TextField('value').render(context);
        if (hasArgOptions) options = new TextField('options', null, 'option1;option2').render(context);
        if (hasArgPlaceholder) placeholder = new TextField('placeholder').render(context);

        const nav = $('ul', { }, context);

        const save = $('li', { }, nav);
        $('a', {
            innerText: 'save',
            href: '#',
            onclick: () => {
                const args = [ label.value, defValue.value ];
                if (hasArgOptions) args.push(...options.value.split(';'));
                if (hasArgPlaceholder) args.push(placeholder.value);

                const fieldConstructor = App.getFieldConstructor(type);
                this.$fields.push(new fieldConstructor(...args));
                this.render(context);
            }
        }, save);

        const cancel = $('li', { }, nav);
        $('a', {
            innerText: 'cancel',
            href: '#',
            onclick: () => {
                this.render(context);
            }
        }, cancel)
    }

    private save(event: MouseEvent): void {
        event.preventDefault();
        LocalStorage.saveForm(this.getValue(), this.$id);
        window.location.href = 'index.html';
    }
}
