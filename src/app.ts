import { CheckboxField } from './checkbox-field';
import { DateField } from './date-field';
import { EmailField } from './email-field';
import { InputField } from './input-field';
import { SelectField } from './select-field';
import { TextAreaField } from './text-area-field';

const app = document.getElementById('app');

InputField.create('msg')
    .withLabel('Hello, Web!')
    .render(app);

DateField.create('date')
    .withLabel('date')
    .render(app);

EmailField.create('email')
    .withLabel('email')
    .render(app);

CheckboxField.create('checkbox')
    .withLabel('check')
    .render(app);

TextAreaField.create('textarea')
    .withLabel('textarea')
    .render(app);

SelectField.create('select')
    .withLabel('select')
    .withOptions(
        'option 1',
        'option 2',
        'option 3'
    ).render(app);