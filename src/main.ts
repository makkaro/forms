import { DocumentList } from './views/document-list';
import { Document } from './views/document';
import { Router } from './router';
import { Form } from './views/form';

(function main(): void {
    document.addEventListener('DOMContentLoaded', event => {
        const url = window.location.href;

        if (url.includes('document-list')) {
            new DocumentList().render();
        }
        else if (url.includes('new-form')) {
            new Form().render();
        }
    });
})();