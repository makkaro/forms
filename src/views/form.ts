import { $ } from '../utilities';
import { App } from '../app';
import { CheckboxField } from '../fields/checkbox-field';
import { DateField } from '../fields/date-field';
import { EmailField } from '../fields/email-field';
import { Field } from '../fields/field';
import { FieldType } from '../fields/field-type';
import { LocalStorage } from '../storage/local-storage';
import { SelectField } from '../fields/select-field';
import { TextField } from '../fields/text-field';
import { TextAreaField } from '../fields/textarea-field';

export class Form {
    private readonly $element: HTMLFormElement;
    private readonly $fields: Array<Field>;
    private readonly $formId: string;
    private readonly $documentId: string;

    public constructor(formId: string, documentId: string = null) {
        const document = documentId
            ? LocalStorage.load(documentId)
            : null;
        this.$fields = Form.getFieldsFromJsonObjects(LocalStorage.load(formId), document);

        this.$element = $('form', {
            onsubmit: event => event.preventDefault()
        }) as HTMLFormElement;
        this.$fields.forEach(field => {
            field.render(this.$element);
        });

        this.$formId = formId;
        this.$documentId = documentId || null;
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
        context.append(this.$element);
        $('button', {
            innerText: 'save',
            onclick: event => this.save(event)
        }, context);
        $('button', {
            innerText: 'cancel',
            onclick: () => window.location.href = '/index.html'
        }, context);
    }

    private static getFieldsFromJsonObjects(objects: Array<object>, document: object = null): Array<Field> {
        return objects.map(object => {
            const template = object as Field;
            switch (template.type) {
                case FieldType.CHECKBOX:
                    return new CheckboxField(template.label, document[template.id] || template.value);
                case FieldType.DATE:
                    return new DateField(template.label, document[template.id] || template.value, template.placeholder);
                case FieldType.EMAIL:
                    return new EmailField(template.label, document[template.id] || template.value, template.placeholder);
                case FieldType.SELECT:
                    return new SelectField(template.label, document[template.id] || template.value, ...template.options);
                case FieldType.TEXT:
                    return new TextField(template.label, document[template.id] || template.value, template.placeholder);
                case FieldType.TEXTAREA:
                    return new TextAreaField(template.label, document[template.id] || template.value);
            }
        });
    }

    private save(event: MouseEvent) {
        event.preventDefault();
        LocalStorage.saveDocument(this.getValue(), this.$documentId);
        window.location.href = '/index.html';
    }
}