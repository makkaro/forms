import { Field } from './field';
import { TagName } from './tag-name';

class SelectField extends Field {
    protected readonly $element: HTMLSelectElement;

    constructor(id: string) {
        super(TagName.SELECT, id);
    }

    get value(): string {
        return this.$element.value;
    }

    get options(): OptionsList {
        return {
            add: add.bind(this),
        }

        function add(...optionsTexts: Array<string>): any {
            this['$element'].append(
                ...optionsTexts.map(optionsText => {
                    const option = document.createElement(TagName.OPTION);
                    option.text = optionsText;
                    return option;
                })
            );
            return this;
        }
    }
}

interface OptionsList {
    add(...options: Array<string>): any;
}

export { SelectField };