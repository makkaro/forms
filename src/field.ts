import { Label } from './label';
import { Wrapper } from './wrapper';

abstract class Field extends Wrapper {
    protected $label: Label;

    protected constructor(tagName: string, id: string) {
        super(tagName);
        this.$element.id = id;
        this.$label = undefined;
    }

    abstract get value(): string;

    get id(): string {
        return this.$element.id;
    }

    get label(): FieldLabel {
        return {
            set: set.bind(this),
            remove: remove.bind(this)
        };

        function set(innerText: string): any {
            this['$label'] = new Label(this['id'], innerText);
            return this;
        }

        function remove(): any {
            this['$label'] = undefined;
            return this;
        }
    }

    render(node: Node): void {
        if (node) {
            if (this.$label) this.$label.render(node);
            node.appendChild(this.$element);
        }
    }
}

interface FieldLabel {
    set(innerText: string): any;
    remove(): any;
}

export { Field };