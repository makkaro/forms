import { Field } from './field';
import { FieldLabel } from './field-label';

export class InputField implements Field {
    protected readonly $element: HTMLInputElement;
    protected $label: FieldLabel;

    protected constructor(id: string) {
        this.$element = document.createElement('input');
        this.$element.id = id;
        this.$label = undefined;
    }

    get id(): string {
        return this.$element.id;
    }
    get label(): string {
        return this.$element.labels.item(0).innerText || '';
    }
    get type(): string {
        return this.$element.type;
    }
    get value(): string {
        return this.$element.value || '';
    }

    withLabel(innerText: string): Field {
        this.$label = FieldLabel.create(this.id, innerText);
        return this;
    }

    render(node: Node): void {
        if (node) {
            if (this.$label) this.$label.render(node);
            node.appendChild(this.$element);
        }
    }

    static create(id: string): InputField {
        return new InputField(id);
    }
}