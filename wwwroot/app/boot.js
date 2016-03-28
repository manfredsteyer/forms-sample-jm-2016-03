System.register(['angular2/platform/browser', './app', 'angular2/http', 'rxjs/add/operator/map', './services/flug-service', 'angular2/core', './pipes/ort-pipe', 'angular2/router', './services/flug-manager', './flug-card/flug-card', './services/flug-event-service', 'app/oauth2/oauth-service'], function(exports_1) {
    var browser_1, app_1, http_1, flug_service_1, core_1, ort_pipe_1, router_1, flug_manager_1, flug_card_1, flug_event_service_1, oauth_service_1;
    var services;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (flug_service_1_1) {
                flug_service_1 = flug_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ort_pipe_1_1) {
                ort_pipe_1 = ort_pipe_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (flug_manager_1_1) {
                flug_manager_1 = flug_manager_1_1;
            },
            function (flug_card_1_1) {
                flug_card_1 = flug_card_1_1;
            },
            function (flug_event_service_1_1) {
                flug_event_service_1 = flug_event_service_1_1;
            },
            function (oauth_service_1_1) {
                oauth_service_1 = oauth_service_1_1;
            }],
        execute: function() {
            //
            // Globales Registrieren von Abhängigkeiten entspricht Vorgehen in
            // AngularJS 1.x, bringt jedoch den Nachteil, dass Komponenten nicht
            // mehr "self-contained" sind.
            //
            services = [
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                core_1.provide("BASE_URL", { useValue: 'http://www.angular.at' }),
                flug_service_1.FlugService,
                oauth_service_1.OAuthService,
                flug_manager_1.FlugManager,
                flug_event_service_1.FlugEventService,
                core_1.provide(core_1.PLATFORM_PIPES, { useValue: ort_pipe_1.OrtPipe, multi: true }),
                core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: flug_card_1.FlugCard, multi: true })
            ];
            browser_1.bootstrap(app_1.App, services);
        }
    }
});
//# sourceMappingURL=boot.js.map