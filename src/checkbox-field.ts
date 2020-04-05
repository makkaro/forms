import { InputField } from './input-field';
import { Field } from './field';
import { FieldType } from './field-type';

export class CheckboxField extends InputField implements Field {
    private constructor(id: string) {
        super(id);
        this.$element.type = FieldType.CHECKBOX;
    }

    static create(id: string): CheckboxField {
        return new CheckboxField(id);
    }
}