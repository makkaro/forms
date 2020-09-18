import { FieldType } from './field-type';
import { TextField } from './text-field';

export class EmailField extends TextField {
    public constructor(label: string = null, value: string = null, placeholder: string = null) {
        super(label, value, placeholder);
        this.$element.type = FieldType.EMAIL;
    }

    public get type(): string {
        return FieldType.EMAIL;
    }
}