export class App {
    private readonly $root: Node;

    constructor(id: string) {
        this.$root = document.getElementById(id);
    }

    render(template: string): void {
        (this.$root as HTMLElement).innerHTML += template;
    }
}