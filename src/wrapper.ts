abstract class Wrapper {
    protected readonly $element: HTMLElement;

    protected constructor(tagName: string) {
        this.$element = document.createElement(tagName);
    }

    get classList(): ClassList {
        return {
            add: add.bind(this),
            remove: remove.bind(this)
        };

        function add(...classes: Array<string>): any {
            this['$element'].classList.add(...classes);
            return this;
        }

        function remove(...classes: Array<string>): any {
            this['$element'].classList.remove(...classes);
        }
    }

    abstract render(node: Node): void;
}

interface ClassList {
    add(...classes: Array<string>): any;
    remove(...classes: Array<string>): any;
}

export { Wrapper };