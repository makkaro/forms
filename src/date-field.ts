import { InputField } from './input-field';
import { Field } from './field';
import { FieldType } from './field-type';

export class DateField extends InputField implements Field {
    private constructor(id: string) {
        super(id);
        this.$element.type = FieldType.DATE;
    }

    static create(id: string): DateField {
        return new DateField(id);
    }
}