import { InputField } from './input-field';
import { InputType } from './input-type';

class TextField extends InputField {
    constructor(id: string) {
        super(id);
        this.$element.type = InputType.TEXT;
    }
}

export { TextField };