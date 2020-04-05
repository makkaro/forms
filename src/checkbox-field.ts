import { Field } from './field';
import { InputField } from './input-field';

export class CheckboxField extends InputField implements Field {
    private constructor(id: string) {
        super(id);
        this.$element.type = 'checkbox';
    }

    get value(): string {
        return this.$element.checked ? 'checked' : 'unchecked';
    }

    static create(id: string): CheckboxField {
        return new CheckboxField(id);
    }
}