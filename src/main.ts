import { App } from './app';
import { CheckboxField } from './checkbox-field';
import { EmailField } from './email-field';
import { Form } from './form';
import { InputField } from './input-field';
import { SelectField } from './select-field';
import { TextAreaField } from './text-area-field';

(function main() {
    const app = new App('app');

    function displayValues(event): void {
        event.preventDefault();
        const list = document.querySelector('#sample-values>ul');
        for (let value of this.values) {
            list.innerHTML += `
                <li>${value.id}: ${value.value}</li>
            `;
        }
    }

    const name = InputField
        .create('name')
        .withLabel('Your name...');
    const lastName = InputField
        .create('lname')
        .withLabel('Your last name...');
    const email = EmailField
        .create('email')
        .withLabel('Your email...');
    const studies = SelectField
        .create('studies')
        .withLabel('Your preferred field of study...')
        .withOptions(
            'History',
            'Computer Science',
            'Mathematics',
            'Hungarian Philology'
        );
    const remote = CheckboxField
        .create('remote')
        .withLabel('Do you prefer studying remote...');
    const remarks = TextAreaField
        .create('remarks')
        .withLabel('Your remarks...');

    app.render(`
        <div class='box' id='sample-form'>
        </div>
        <div class='box' id='sample-values'>
            <ul>
            </ul>
        </div>
    `);

    Form
        .create()
        .withControls(
            name,
            lastName,
            email,
            studies,
            remote,
            remarks
        )
        .onsubmit(displayValues)
        .render(document.querySelector('#sample-form'));
})();