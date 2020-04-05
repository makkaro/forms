import { InputField } from './input-field';
import { Field } from './field';
import { FieldType } from './field-type';

export class EmailField extends InputField implements Field {
    private constructor(id: string) {
        super(id);
        this.$element.type = FieldType.EMAIL;
    }

    static create(id: string): EmailField {
        return new EmailField(id);
    }
}