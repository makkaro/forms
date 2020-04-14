class App {
    private readonly $root: Node;

    constructor(node: Node) {
        this.$root = node;
    }

    renderHTML(template: string) {
        (this.$root as HTMLElement).innerHTML = template;
    }
}

export { App };