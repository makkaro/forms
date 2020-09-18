import { DocumentList } from './views/document-list';
import { Form } from './views/form';
import { Router } from './router';

(function main(): void {
    document.addEventListener('DOMContentLoaded', event => {
        const url = window.location.href;

        if (url.includes('document-list')) {
            new DocumentList().render();
        }
        else if (url.includes('edit-document')) {
            new Form(Router.getParam('formId'), Router.getParam('id')).render();
        }
    });
})();