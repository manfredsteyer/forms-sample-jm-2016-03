import { OrtValidatorAsync } from './ort-validator-async';
import { Directive, Provider, provide, forwardRef } from 'angular2/core';
import { NG_ASYNC_VALIDATORS, Validator, Control } from 'angular2/common';

@Directive({
    selector: 'input[ort]',
    providers: [provide(NG_ASYNC_VALIDATORS,
        { useExisting: OrtValidatorAsyncDirective, multi: true })]
})
export class OrtValidatorAsyncDirective implements Validator {

    validate(c: Control): any {
        return OrtValidatorAsync.validate(c);
    }

}