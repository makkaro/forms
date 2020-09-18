import { App } from '../app';
import { Field } from '../fields/field';
import { LocalStorage } from '../storage/local-storage';
import { TextField } from '../fields/text-field';
import { FieldType } from '../fields/field-type';
import { $ } from '../utilities';
import { CheckboxField } from '../fields/checkbox-field';
import { DateField } from '../fields/date-field';
import { EmailField } from '../fields/email-field';
import { SelectField } from '../fields/select-field';
import { TextAreaField } from '../fields/textarea-field';

// export class FormCreator {
//     private $fields: Array<Field>;
//
//     public constructor(formId: string = null) {
//         if (formId) {
//             const form = LocalStorage.load(formId);
//         }
//
//     }
//
//     public render(context: Element = null) {
//         context = context || App.getDefaultRenderingContext();
//
//
//     }
//
//     private configureField(type: FieldType) {
//         const context = App.getDefaultRenderingContext();
//         context.innerHTML = '';
//
//         const label = new TextField('label');
//         label.render(context);
//
//         let typeSpecificLabel = '';
//         switch (FieldType)
//         const typeSpecific = new TextField('options', null, 'option1;option2');
//         typeSpecific.render(context);
//
//
//         $('button', {
//             innerText: 'apply',
//             onclick: () => this.$fields.push(getField())
//         })
//
//         function getField(): Field {
//             switch (type) {
//                 case FieldType.CHECKBOX:
//                     return new CheckboxField(label.value, value.value);
//                 case FieldType.DATE:
//                     return new DateField(label.value, value.value);
//                 case FieldType.EMAIL:
//                     return new EmailField(label.value, value.value);
//                 case FieldType.SELECT:
//                     return new SelectField(label.value, value.value, options);
//                 case FieldType.TEXT:
//                     return new TextField(template.label, document[template.id] || template.value, template.placeholder);
//                 case FieldType.TEXTAREA:
//                     return new TextAreaField(template.label, document[template.id] || template.value);
//             }
//         }
//     }
// }