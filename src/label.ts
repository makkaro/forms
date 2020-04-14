import { TagName } from './tag-name';
import { Wrapper } from './wrapper';

class Label extends Wrapper {
    protected readonly $element: HTMLLabelElement;

    constructor(htmlFor: string, innerText: string) {
        super(TagName.LABEL);
        this.$element.htmlFor = htmlFor;
        this.$element.innerText = innerText;
    }

    render(node: Node): void {
        if (node) node.appendChild(this.$element);
    }
}

export { Label };