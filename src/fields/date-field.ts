import { FieldType } from './field-type';
import { TextField } from './text-field';

export class DateField extends TextField {
    public constructor(label: string = null, value: string = null) {
        super(label, value);
        this.$element.type = FieldType.DATE;
    }

    public get type(): string {
        return FieldType.DATE;
    }
}