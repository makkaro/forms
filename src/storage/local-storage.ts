export class LocalStorage {
    public static load(id: string): any {
        return JSON.parse(localStorage.getItem(id));
    }

    public static remove(id: string): void {
        localStorage.removeItem(id);
    }

    public static getDocuments(): Array<string> {
        return Object.keys(localStorage).filter(id => id.includes('document'));
    }

    public static getForms(): Array<string> {
        return Object.keys(localStorage).filter(id => id.includes('form'));
    }

    public static saveDocument(document: any, id: string = null): string {
        const newId = id || `document-${String(Date.now())}`;
        localStorage.setItem(newId, JSON.stringify(document));
        return newId;
    }

    public static saveForm(form: any, id: string = null): string {
        const newId = id || `form-${String(Date.now())}`;
        localStorage.setItem(newId, JSON.stringify(form));
        return newId;
    }
}