import { Form } from './form';
import { TextField } from './text-field';
import { SelectField } from './select-field';


(function main() {
    var form = new Form();
    form.controls.add(
        new TextField('test').classList.add(
            'test-class',
            'another'
        ),
        new SelectField('select-test').options.add(
            '1',
            '2',
            '3',
            '4'
        )
    );
    form.render(document.getElementById('app'));
})();