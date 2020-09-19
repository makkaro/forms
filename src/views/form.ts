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

    public render(context: Element = null): void {
        context = context || App.getDefaultRenderingContext();
        context.innerHTML = '';

        const typeSelect = new SelectField('select type', FieldType.TEXT,
            FieldType.CHECKBOX,
            FieldType.DATE,
            FieldType.EMAIL,
            FieldType.SELECT,
            FieldType.TEXT,
            FieldType.TEXTAREA
            ).render(context);
        $('button', {
            innerText: 'new field',
            onclick: () => this.fieldConfig(typeSelect.value)
        }, context);

        const form = $('form', {
            onsubmit: event => event.preventDefault()
        }, context);
        this.$fields.forEach(field => field.render(form));

        $('button', {
            innerText: 'save',
            onclick: event => this.save(event)
        }, context);
        $('button', {
            innerText: 'cancel',
            onclick: () => window.location.href = 'index.html'
        }, context);
    }

    public getValue(): any {
        const value = new Array<object>();
        this.$fields.forEach(field => {
            value.push(field.getValue())
        });
        return value;
    }

    private fieldConfig(type: string, context: Element = null) {
        context = context || App.getDefaultRenderingContext();
        context.innerHTML = '';

        const hasArgPlaceholder = type == FieldType.DATE || type == FieldType.EMAIL || type == FieldType.TEXT;
        const hasArgOptions = type == FieldType.SELECT;

        const label = new TextField('label').render(context);
        const value = new TextField('value').render(context);
        if (hasArgPlaceholder) {
            var placeholder = new TextField('placeholder').render(context);
        }
        if (hasArgOptions) {
            var options = new TextField('options').render(context);
        }

        $('button', {
            innerText: 'save',
            onclick: () => {
                const fieldType = App.getFieldType(type);
                if (hasArgPlaceholder) {
                    this.$fields.push(new fieldType(label.value, value.value, placeholder.value));
                }
                else if (hasArgOptions) {
                    this.$fields.push(new fieldType(label.value, value.value, ...options.value.split(';')));
                }
                else {
                    this.$fields.push(new fieldType(label.value, value.value));
                }
                this.render(context);
            }
        }, context);
        $('button', {
            innerText: 'cancel',
            onclick: () => {
                this.render(context);
            }
        }, context)
    }

    private save(event: MouseEvent): void {
        event.preventDefault();
        LocalStorage.saveForm(this.getValue(), this.$id);
        window.location.href = 'index.html';
    }
}
