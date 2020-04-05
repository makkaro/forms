import { InputField } from './input-field';
import { DateField } from './date-field';
import { EmailField } from './email-field';
import { CheckboxField } from './checkbox-field';

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