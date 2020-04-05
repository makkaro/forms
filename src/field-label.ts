export class FieldLabel {
    private readonly $element: HTMLLabelElement;

    private constructor(htmlFor: string, innerText: string) {
        this.$element = document.createElement('label');
        this.$element.htmlFor = htmlFor;
        this.$element.innerText = innerText;
    }

    render(node: Node): void {
        if (node) node.appendChild(this.$element);
    }

    static create(htmlFor: string, innerText: string) {
        return new FieldLabel(htmlFor, innerText);
    }
}