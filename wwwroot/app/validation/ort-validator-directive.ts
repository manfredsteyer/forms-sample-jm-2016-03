import { OrtValidator } from './ort-validator';
import { Directive, Provider, provide, forwardRef } from 'angular2/core';
import { NG_VALIDATORS, Validator, Control } from 'angular2/common';

/*
@Directive({
    selector: 'input[ort]', 
    providers: [provide(NG_VALIDATORS,
        { useValue: OrtValidator.validate, multi: true })]
})
*/
/*
    forwardRef( )
*/

@Directive({
    selector: 'input[ort]', 
    providers: [provide(NG_VALIDATORS,
        { useExisting: OrtValidatorDirective, multi: true })]
})
export class OrtValidatorDirective implements Validator {

    validate(c: Control): any {
        return OrtValidator.validate(c);
    }

}