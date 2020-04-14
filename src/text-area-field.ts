import { Field } from './field';
import { TagName } from './tag-name';

class TextAreaField extends Field {
    protected readonly $element: HTMLTextAreaElement;

    constructor(id: string) {
        super(TagName.TEXTAREA, id);
    }

    get value(): string {
        return this.$element.value;
    }
}

export { TextAreaField };