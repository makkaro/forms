import { $ } from '../utilities';
import { App } from '../app';
import { LocalStorage } from '../storage/local-storage';

export class FormList {
    private $formIdentifiers: Array<string>;

    public constructor() {
        this.getFormList();
    }

    public getForm(id: string): any {
        return LocalStorage.load(id);
    }

    public getFormList(): Array<string> {
        return this.$formIdentifiers = LocalStorage.getForms();
    }

    public removeForm(id: string): void {
        LocalStorage.remove(id);
        this.getFormList();
        window.location.reload();
    }

    public render(context: Element = null): void {
        const table = $('table');
        this.$formIdentifiers.forEach(id => {
            const row = $('tr', { }, table);
            const fill = $('td', { }, row);
            $('a', {
                innerText: id,
                href: `new-document.html?formId=${id}`
            }, fill);
            const remove = $('td', { }, row);
            $('a', {
                innerText: 'delete',
                href: '#',
                onclick: () => this.removeForm(id)
            }, remove);
        });
        context = context || App.getDefaultRenderingContext();
        context.append(table);
    }
}