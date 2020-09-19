import { $ } from '../utilities';
import { App } from '../app';
import { Field } from '../fields/field';
import { LocalStorage } from '../storage/local-storage';

export class Document {
    private readonly $fields: Array<Field>;
    private readonly $formId: string;
    private readonly $id: string;

    public constructor(formId: string, id: string = null) {
        this.$formId = formId;
        this.$id = id;

        const template = id ? LocalStorage.load(id) : null;
        this.$fields = App.getFieldsFromJsonObjects(LocalStorage.load(formId), template);
    }

    public getValue(): any {
        const value = {
            formId: this.$formId
        };
        this.$fields.forEach(field => {
            value[field.id] = field.getValue();
        });
        return value;
    }

    public render(context: Element = null): void {
        context = context || App.getDefaultRenderingContext();

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
            onclick: () => window.location.href = '/index.html'
        }, context);
    }

    private save(event: MouseEvent) {
        event.preventDefault();
        LocalStorage.saveDocument(this.getValue(), this.$id);
        window.location.href = '/index.html';
    }
}