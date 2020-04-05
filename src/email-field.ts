import { Field } from './field';
import { InputField } from './input-field';

export class EmailField extends InputField implements Field {
    private constructor(id: string) {
        super(id);
        this.$element.type = 'email';
    }

    static create(id: string): EmailField {
        return new EmailField(id);
    }
}