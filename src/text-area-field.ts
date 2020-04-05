import { Field } from './field';
import { FieldLabel } from './field-label';

export class TextAreaField implements Field {
    private readonly $element: HTMLTextAreaElement;
    private $label: FieldLabel;

    private constructor(id: string) {
        this.$element = document.createElement('textarea');
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
        return this.$element.value || '';
    }

    withLabel(innerText: string): TextAreaField {
        this.$label = FieldLabel.create(this.id, innerText);
        return this;
    }

    render(node: Node): void {
        if (node) {
            if (this.$label) this.$label.render(node);
            node.appendChild(this.$element);
        }
    }

    static create(id: string): TextAreaField {
        return new TextAreaField(id);
    }
}