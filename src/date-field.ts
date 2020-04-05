import { Field } from './field';
import { InputField } from './input-field';

export class DateField extends InputField implements Field {
    private constructor(id: string) {
        super(id);
        this.$element.type = 'date';
    }

    static create(id: string): DateField {
        return new DateField(id);
    }
}