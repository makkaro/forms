import { TagName } from './tag-name';
import { Field } from './field';
import { Wrapper } from './wrapper';

class Form extends Wrapper {
    protected $element: HTMLFormElement;

    constructor() {
        super(TagName.FORM);
    }

    get controls(): ControlsList {
        return {
            add: add.bind(this)
        };

        function add(...controls: Array<Field>): any {
            controls.forEach(control => {
                control.render(this['$element']);
            });
            return this;
        }
    }

    render(node: Node): void {
        if (node) node.appendChild(this.$element);
    }
}

interface ControlsList {
    add(...controls: Array<Field>): any;
}

export { Form };