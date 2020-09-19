import { Field } from './fields/field';
import { FieldType } from './fields/field-type';
import { CheckboxField } from './fields/checkbox-field';
import { DateField } from './fields/date-field';
import { EmailField } from './fields/email-field';
import { SelectField } from './fields/select-field';
import { TextField } from './fields/text-field';
import { TextAreaField } from './fields/textarea-field';

export class App {
    public static getDefaultRenderingContext(): Element {
        return document.getElementById('content');
    }

    public static getFieldsFromJsonObjects(jsonObjects: Array<object>, document: object = null): Array<Field> {
        console.log(jsonObjects);
        console.log(document);
        const x = jsonObjects.map(object => {
            const { type, label, id, value, placeholder, options } = object as Field;
            switch (type) {
                case FieldType.CHECKBOX:
                    return new CheckboxField(label, document ? document['values'].shift() : value);
                case FieldType.DATE:
                    return new DateField(label, document ? document['values'].shift() : value, placeholder);
                case FieldType.EMAIL:
                    return new EmailField(label, document ? document['values'].shift() : value, placeholder);
                case FieldType.SELECT:
                    return new SelectField(label, document ? document['values'].shift() : value, ...options);
                case FieldType.TEXT:
                    return new TextField(label, document ? document['values'].shift() : value, placeholder);
                case FieldType.TEXTAREA:
                    return new TextAreaField(label, document ? document['values'].shift() : value);
            }
        });
        console.log(x);
        return x;
    }

    public static getFieldType(type: string): any {
        switch (type) {
            case FieldType.CHECKBOX:
                return CheckboxField;
            case FieldType.DATE:
                return DateField;
            case FieldType.EMAIL:
                return EmailField;
            case FieldType.SELECT:
                return SelectField;
            case FieldType.TEXT:
                return TextField;
            case FieldType.TEXTAREA:
                return TextAreaField;
        }
    }
}