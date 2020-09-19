import { DocumentList } from './views/document-list';
import { Document } from './views/document';
import { Router } from './router';
import { Form } from './views/form';
import { FormList } from './views/form-list';

(function main(): void {
    document.addEventListener('DOMContentLoaded', event => {
        const url = window.location.href;

        if (url.includes('document-list')) {
            new DocumentList().render();
        }
        else if (url.includes('new-form')) {
            new Form().render();
        }
        else if (url.includes('form-list')) {
            new FormList().render();
        }
        if (url.includes('new-document')) {
            new Document(Router.getParam('formId')).render();
        }
        if (url.includes('edit-document')) {
            new Document(Router.getParam('formId'), Router.getParam('id')).render();
        }
    });
})();