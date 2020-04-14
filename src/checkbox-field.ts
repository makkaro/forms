import { InputField } from './input-field';
import { InputType } from './input-type';

class CheckboxField extends InputField {
    constructor(id: string) {
        super(id);
        this.$element.type = InputType.CHECKBOX;
    }

    get value(): string {
        return this.$element.checked ? 'checked' : 'unchecked';
    }
}

export { CheckboxField };