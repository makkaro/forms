import { Field } from './field';
import { FieldLabel } from './field-label';

export class SelectField implements Field {
    private readonly $element: HTMLSelectElement;
    private $label: FieldLabel;

    private constructor(id: string) {
        this.$element = document.createElement('select');
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
        return this.$element.tagName;
    }
    get value(): string {
        return this.$element.value;
    }

    withLabel(innerText: string): SelectField {
        this.$label = FieldLabel.create(this.id, innerText);
        return this;
    }

    withOptions(...texts: Array<string>): SelectField {
        for (let text of texts) {
            const option = document.createElement('option');
            option.text = text;
            this.$element.appendChild(option);
        }
        return this;
    }

    render(node: Node): void {
        if (node) {
            if (this.$label) this.$label.render(node);
            node.appendChild(this.$element);
        }
    }

    static create(id: string): SelectField {
        return new SelectField(id);
    }
}