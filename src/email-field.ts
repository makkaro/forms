import { InputField } from './input-field';
import { InputType } from './input-type';

class EmailField extends InputField {
    constructor(id: string) {
        super(id);
        this.$element.type = InputType.EMAIL;
    }
}

export { EmailField };