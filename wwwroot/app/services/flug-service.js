System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1;
    var FlugService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            FlugService = (function () {
                function FlugService(baseUrl, http) {
                    this.baseUrl = baseUrl;
                    this.http = http;
                }
                FlugService.prototype.find = function (von, nach) {
                    var headers = new http_1.Headers();
                    headers.set('Accept', 'text/json');
                    var url = this.baseUrl + "/api/flug";
                    var search = new http_1.URLSearchParams();
                    search.set('abflugOrt', von);
                    search.set('zielOrt', nach);
                    return this.http
                        .get(url, { search: search, headers: headers })
                        .map(function (response) { return response.json(); });
                };
                FlugService.prototype.load = function (id) {
                    var url = this.baseUrl + "/api/flug";
                    var search = new http_1.URLSearchParams();
                    search.set('flugNummer', id);
                    var headers = new http_1.Headers();
                    headers.set('Accept', 'text/json');
                    return this
                        .http.get(url, { search: search, headers: headers })
                        .map(function (resp) { return resp.json(); }); // <-- Observable.subsribe
                };
                FlugService.prototype.save = function (flug) {
                    // Content-Type: text/json
                    var headers = new http_1.Headers();
                    headers.set('Content-Type', 'text/json');
                    var url = this.baseUrl + "/api/flug";
                    return this.http
                        .post(url, JSON.stringify(flug), { headers: headers })
                        .map(function (resp) { return resp.json(); });
                };
                FlugService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject('BASE_URL')), 
                    __metadata('design:paramtypes', [String, http_1.Http])
                ], FlugService);
                return FlugService;
            })();
            exports_1("FlugService", FlugService);
        }
    }
});
//# sourceMappingURL=flug-service.js.map