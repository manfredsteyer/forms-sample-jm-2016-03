import {Directive, provide, Attribute} from 'angular2/core';
import {Control, NG_VALIDATORS, Validator} from 'angular2/common';
import { RangeValidator } from './range-validator';

@Directive({
    selector: 'input[min][max]',
    providers: [provide(NG_VALIDATORS, { useExisting: RangeValidatorDirective, multi: true })]
})
export class RangeValidatorDirective implements Validator {

    validator: Function;

    constructor( @Attribute('min') min: string, @Attribute('max') max: string) {
        
        this.validator = RangeValidator.create(Number(min), Number(max));
    }

    validate(c: Control) {
        return this.validator(c);
    }

}