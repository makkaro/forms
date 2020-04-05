export interface Field {
    readonly id: string;
    readonly label: string;
    readonly type: string;
    readonly value: string;

    render(node: Node) : void;
}