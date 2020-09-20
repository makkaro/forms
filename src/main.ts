import { Document } from './views/document';
import { DocumentList } from './views/document-list';
import { Form } from './views/form';
import { FormList } from './views/form-list';
import { Router } from './router';

(function main(): void {
    document.addEventListener('DOMContentLoaded', () => {
        const url = window.location.href;

        if (url.includes('document-list')) {
            new DocumentList().render();
        }
        else if (url.includes('edit-document')) {
            new Document(Router.getParam('formId'), Router.getParam('id')).render();
        }
        else if (url.includes('form-list')) {
            new FormList().render();
        }
        else if (url.includes('new-document')) {
            new Document(Router.getParam('formId')).render();
        }
        else if (url.includes('new-form')) {
            new Form().render();
        }
    });
})();