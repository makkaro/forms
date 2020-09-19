import { $ } from '../utilities';
import { App } from '../app';
import { Field } from './field';

export abstract class FieldTemplate implements Field {
    protected readonly $element: HTMLElement;
    protected readonly $label: HTMLLabelElement;

    protected constructor(tagName: string, label: string = null) {
        this.$element = $(tagName, {
            id: `${ tagName }-${ Date.now().toString() }`
        });
        if (label) {
            this.$label = $('label', {
                htmlFor: this.$element.id,
                innerText: label
            }) as HTMLLabelElement;
        }
    }

    public get id(): string {
        return this.$element.id;
    }

    public get label(): string {
        return this.$label.innerText;
    }

    public abstract get type(): string;

    public abstract get value(): string;

    public abstract getValue(): boolean | string;

    public render(context: Element = null): Field {
        if (!context) {
            context = App.getDefaultRenderingContext();
        }
        const container = $('div', {}, context);
        container.append(this.$element, this.$label);
        return this;
    }

}