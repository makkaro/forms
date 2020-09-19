import { FieldTemplate } from './field-template';
import { FieldType } from './field-type';

export class TextField extends FieldTemplate {
    protected readonly $element: HTMLInputElement;

    public constructor(label: string = null, value: string = null, placeholder: string = null) {
        super('input', label);
        if (value) this.$element.value = value;
        if (placeholder) this.$element.placeholder = placeholder;
    }

    public get type(): string {
        return FieldType.TEXT;
    }

    public get value(): string {
        return this.$element.value;
    }

    public get placeholder(): string {
        return this.$element.placeholder;
    }

    public getValue(): object {
        return {
            ...super.getValue(),
            placeholder: this.placeholder
        };
    }
}