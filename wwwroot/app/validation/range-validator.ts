import {Control} from 'angular2/common';

export class RangeValidator {

    static create(min: number, max: number): Function {
        return (c: Control): any => {
            if (!c.value) return {};

            var value = Number(c.value);

            if (isNaN(value)) return { 'range': true };
            if (value >= min && value <= max) return {};

            return { 'range': true };
        };
    }

}