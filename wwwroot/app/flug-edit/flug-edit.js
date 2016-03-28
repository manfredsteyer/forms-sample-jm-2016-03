System.register(['angular2/core', 'angular2/router', '../services/flug-service', '../validation/ort-validator-directive', '../validation/ort-validator-async-directive', '../date-control/date-control'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, flug_service_1, ort_validator_directive_1, ort_validator_async_directive_1, date_control_1;
    var FlugEdit;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (ort_validator_directive_1_1) {
                ort_validator_directive_1 = ort_validator_directive_1_1;
            },
            function (ort_validator_async_directive_1_1) {
                ort_validator_async_directive_1 = ort_validator_async_directive_1_1;
            },
            function (date_control_1_1) {
                date_control_1 = date_control_1_1;
            }],
        execute: function() {
            FlugEdit = (function () {
                function FlugEdit(params, flugService) {
                    var _this = this;
                    this.flugService = flugService;
                    this.flug = {};
                    this.activate = true;
                    this.info = "Flug-Detail";
                    this.id = parseInt(params.get('id'));
                    this.flugService
                        .load(this.id)
                        .subscribe(function (flug) {
                        _this.flug = flug;
                        _this.message = "";
                    }, function (err) {
                        console.error(err);
                        _this.message = "Fehler beim Laden!";
                    });
                }
                FlugEdit.prototype.save = function () {
                    var _this = this;
                    this.flugService
                        .save(this.flug)
                        .subscribe(function (flug) {
                        _this.flug = flug;
                        _this.message = "Flug wurde gespeichert!";
                    }, function (err) {
                        console.error("Fehler beim Speichern!");
                        console.error(err); // <-- Http-Response mit Fehler!
                        _this.message = err.text(); // <-- Text aus Payload
                    });
                };
                FlugEdit = __decorate([
                    core_1.Component({
                        templateUrl: 'app/flug-edit/flug-edit.html',
                        directives: [ort_validator_directive_1.OrtValidatorDirective, ort_validator_async_directive_1.OrtValidatorAsyncDirective, date_control_1.DateControl]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, flug_service_1.FlugService])
                ], FlugEdit);
                return FlugEdit;
            })();
            exports_1("FlugEdit", FlugEdit);
        }
    }
});
//# sourceMappingURL=flug-edit.js.map