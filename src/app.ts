import { CheckboxField } from './fields/checkbox-field';
import { DateField } from './fields/date-field';
import { EmailField } from './fields/email-field';
import { Field } from './fields/field';
import { FieldType } from './fields/field-type';
import { SelectField } from './fields/select-field';
import { TextField } from './fields/text-field';
import { TextAreaField } from './fields/textarea-field';

export class App {
    public static getDefaultRenderingContext(): Element {
        return document.getElementById('content');
    }

    public static getFieldConstructor(type: string): any {
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

    public static getFieldsFromJsonObjects(objects: Array<object>, document: object = null): Array<Field> {
        const values = document ? document['values'] : null;

        return objects.map(object => {
            const { label, type, value, placeholder, options } = object as Field;
            const fieldConstructor = this.getFieldConstructor(type);
            const newValue = values ? values.shift() : value;

            const args = [ label, newValue ];
            if (this.hasArgOptions(type)) args.push(...options);
            if (this.hasArgPlaceholder(type)) args.push(placeholder);

            return new fieldConstructor(...args);
        });
    }

    public static hasArgOptions(type: string): boolean {
        return type == FieldType.SELECT;
    }

    public static hasArgPlaceholder(type: string): boolean {
        return type == FieldType.EMAIL || type == FieldType.TEXT;
    }
}