import { FieldTemplate } from './field-template';
import { FieldType } from './field-type';

export class TextAreaField extends FieldTemplate {
    protected readonly $element: HTMLTextAreaElement;

    public constructor(label: string = null, value: string = null) {
        super('textarea', label);
        if (value) this.$element.value = value;
    }

    public get type(): string {
        return FieldType.TEXTAREA;
    }

    public get value(): string {
        return this.getValue();
    }

    public getValue(): string {
        return this.$element.value;
    }
}