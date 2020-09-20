import { $ } from '../utilities';
import { App } from '../app';
import { LocalStorage } from '../storage/local-storage';

export class DocumentList {
    private $documentIdentifiers: Array<string>;

    public constructor() {
        this.getDocumentList();
    }

    public render(context: Element = null): void {
        const table = $('table');
        this.$documentIdentifiers.forEach(id => {
            const row = $('tr', { }, table);
            const edit = $('td', { }, row);
            $('a', {
                innerText: id,
                href: `edit-document.html?id=${id}&formId=${DocumentList.getDocument(id).formId}`
            }, edit);
            const remove = $('td', { }, row);
            $('a', {
                innerText: 'delete',
                href: '#',
                onclick: () => this.removeDocument(id)
            }, remove);
        });
        context = context || App.getDefaultRenderingContext();
        context.append(table);
    }

    private static getDocument(id: string): any {
        return LocalStorage.load(id);
    }

    private getDocumentList(): Array<string> {
        return this.$documentIdentifiers = LocalStorage.getDocuments();
    }

    private removeDocument(id: string): void {
        LocalStorage.remove(id);
        this.getDocumentList();
        window.location.reload();
    }
}