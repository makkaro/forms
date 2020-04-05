import { Field } from './field';

export class Form {
    private readonly $element: HTMLFormElement;
    private $controls: Array<Field>;

    private constructor() {
        this.$element = document.createElement('form');
        this.$controls = new Array<Field>();
    }

    get values(): Array<any> {
        return this.$controls.map(control => {
            return {
                id: control.id,
                value: control.value
            };
        });
    }

    withControls(...fields: Array<Field>): Form {
        this.$controls = [ ...fields ];
        return this;
    }

    onsubmit(callbackFn: Function): Form {
        const context = this;
        this.$element.onsubmit = callbackFn.bind(context);
        return this;
    }

    render(node: Node): void {
        if (node) {
            this.$controls.forEach(control => control.render(this.$element));
            const btn = document.createElement('input');
            btn.type = 'submit';
            this.$element.appendChild(btn);
            node.appendChild(this.$element);
        }
    }

    static create(): Form {
        return new Form();
    }
}