import { $ } from '../utilities';
import { FieldTemplate } from './field-template';
import { FieldType } from './field-type';

export class SelectField extends FieldTemplate {
    protected readonly $element: HTMLSelectElement;

    public constructor(label: string = null, value: string = null, ...options: Array<string>) {
        super('select', label);
        options.forEach(text => {
            $('option', {
                innerText: text
            }, this.$element);
        });
        if (value) this.$element.selectedIndex = options.indexOf(value);
    }

    public get type(): string {
        return FieldType.SELECT;
    }

    public get value(): string {
        return this.$element.value;
    }

    public get options(): Array<string> {
        return Array.from(this.$element.options).map(option => option.innerText);
    }

    public getValue(): object {
        return {
            ...super.getValue(),
            options: this.options
        };
    }
}