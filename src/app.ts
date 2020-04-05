import { CheckboxField } from './checkbox-field';
import { DateField } from './date-field';
import { EmailField } from './email-field';
import { InputField } from './input-field';
import { SelectField } from './select-field';
import { TextAreaField } from './text-area-field';
import { Form } from './form';

const app = document.getElementById('app');

const msg = InputField
    .create('msg')
    .withLabel('Hello, Web!');

const date = DateField
    .create('date')
    .withLabel('date');

const email = EmailField
    .create('email')
    .withLabel('email');

const checkbox = CheckboxField
    .create('checkbox')
    .withLabel('check');

const textarea = TextAreaField
    .create('textarea')
    .withLabel('textarea');

const select = SelectField
    .create('select')
    .withLabel('select')
    .withOptions(
        'option 1',
        'option 2',
        'option 3'
    );


Form.create()
    .controls(
        msg,
        date,
        email,
        checkbox,
        textarea,
        select,
        SelectField
            .create('select2')
            .withLabel('select2')
            .withOptions(
                'option 4',
                'option 5',
                'option 6'
            ),
        TextAreaField
            .create('area')
            .withLabel('I <3 Javascript :) :)')
    ).render(app);