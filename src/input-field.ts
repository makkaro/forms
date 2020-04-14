import { Field } from './field';
import { TagName } from './tag-name';

abstract class InputField extends Field {
    protected readonly $element: HTMLInputElement;

    protected constructor(id: string) {
        super(TagName.INPUT, id);
    }

    get value(): string {
        return this.$element.value;
    }
}

export { InputField };