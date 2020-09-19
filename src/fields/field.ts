export interface Field {
    readonly id: string;
    readonly label: string;
    readonly type: string;
    readonly value: string;
    readonly placeholder?: string;
    readonly options?: Array<string>;

    getValue(): object;
    render(context?: Element): Field;
}