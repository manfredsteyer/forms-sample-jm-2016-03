System.register(['./ort-validator', 'angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ort_validator_1, core_1, common_1;
    var OrtValidatorDirective;
    return {
        setters:[
            function (ort_validator_1_1) {
                ort_validator_1 = ort_validator_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
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
            OrtValidatorDirective = (function () {
                function OrtValidatorDirective() {
                }
                OrtValidatorDirective.prototype.validate = function (c) {
                    return ort_validator_1.OrtValidator.validate(c);
                };
                OrtValidatorDirective = __decorate([
                    core_1.Directive({
                        selector: 'input[ort]',
                        providers: [core_1.provide(common_1.NG_VALIDATORS, { useExisting: OrtValidatorDirective, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OrtValidatorDirective);
                return OrtValidatorDirective;
            })();
            exports_1("OrtValidatorDirective", OrtValidatorDirective);
        }
    }
});
//# sourceMappingURL=ort-validator-directive.js.map