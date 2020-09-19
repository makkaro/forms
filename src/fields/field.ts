export interface Field {
    readonly id: string;
    readonly label: string;
    readonly type: string;
    readonly value: string;
    readonly placeholder?: string;
    readonly options?: Array<string>;

    getValue(): boolean | string;
    render(context: Element): Field;
}