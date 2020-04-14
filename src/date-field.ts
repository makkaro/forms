import { InputField } from './input-field';
import { InputType } from './input-type';

class DateField extends InputField {
    constructor(id: string) {
        super(id);
        this.$element.type = InputType.DATE;
    }
}

export { DateField };