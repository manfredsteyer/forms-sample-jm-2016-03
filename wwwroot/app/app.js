System.register(['angular2/core', 'angular2/router', './home/home', './flug-buchen/flug-buchen', './flug-edit/flug-edit', './flug-edit-imp/flug-edit-imp', './flug-grid/flug-grid'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, flug_buchen_1, flug_edit_1, flug_edit_imp_1, flug_grid_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (flug_buchen_1_1) {
                flug_buchen_1 = flug_buchen_1_1;
            },
            function (flug_edit_1_1) {
                flug_edit_1 = flug_edit_1_1;
            },
            function (flug_edit_imp_1_1) {
                flug_edit_imp_1 = flug_edit_imp_1_1;
            },
            function (flug_grid_1_1) {
                flug_grid_1 = flug_grid_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(location) {
                    this.location = location;
                    this.info = "Flug-Suchen App";
                }
                App.prototype.isActive = function (path) {
                    if (path == '') {
                        return this.location.path() == '';
                    }
                    return this.location.path().startsWith(path);
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES] // router-outlet, routerLink
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: home_1.Home, name: 'Home', useAsDefault: true },
                        { path: '/flug-buchen/...', component: flug_buchen_1.FlugBuchen, name: 'FlugBuchen' },
                        { path: '/flug-edit/:id', component: flug_edit_1.FlugEdit, name: 'FlugEdit' },
                        { path: '/flug-edit-imp/:id', component: flug_edit_imp_1.FlugEditImp, name: 'FlugEditImp' },
                        { path: '/flug-grid', component: flug_grid_1.FlugGrid, name: 'FlugGrid' }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map