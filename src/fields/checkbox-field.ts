import { FieldType } from './field-type';
import { TextField } from './text-field';

export class CheckboxField extends TextField {
    public constructor(label: string = null, value: boolean | string = false) {
        super(label);
        this.$element.type = FieldType.CHECKBOX;
        this.$element.checked = typeof value === 'boolean'
            ? value
            : value === 'checked' || value === 'true';
    }

    public get type(): string {
        return FieldType.CHECKBOX;
    }

    public get value(): string {
        return String(this.$element.checked);
    }
}