export class Router {
    public static getParam(key: string): string {
        const query = window.location.search.substr(1);
        const urlParams = new URLSearchParams(query);
        return urlParams.get(key);
    }
}