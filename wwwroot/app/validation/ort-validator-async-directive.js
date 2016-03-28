System.register(['./ort-validator-async', 'angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ort_validator_async_1, core_1, common_1;
    var OrtValidatorAsyncDirective;
    return {
        setters:[
            function (ort_validator_async_1_1) {
                ort_validator_async_1 = ort_validator_async_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            OrtValidatorAsyncDirective = (function () {
                function OrtValidatorAsyncDirective() {
                }
                OrtValidatorAsyncDirective.prototype.validate = function (c) {
                    return ort_validator_async_1.OrtValidatorAsync.validate(c);
                };
                OrtValidatorAsyncDirective = __decorate([
                    core_1.Directive({
                        selector: 'input[ort]',
                        providers: [core_1.provide(common_1.NG_ASYNC_VALIDATORS, { useExisting: OrtValidatorAsyncDirective, multi: true })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OrtValidatorAsyncDirective);
                return OrtValidatorAsyncDirective;
            })();
            exports_1("OrtValidatorAsyncDirective", OrtValidatorAsyncDirective);
        }
    }
});
//# sourceMappingURL=ort-validator-async-directive.js.map