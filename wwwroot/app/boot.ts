import {bootstrap}    from 'angular2/platform/browser'
import {App} from './app'
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/add/operator/map';
import {FlugService } from './services/flug-service';
import {provide, PLATFORM_PIPES, PLATFORM_DIRECTIVES, reflector, Injectable} from 'angular2/core';
import {OrtPipe} from './pipes/ort-pipe';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import { FlugManager} from './services/flug-manager';
import { FlugCard} from './flug-card/flug-card';
import {FlugEventService} from './services/flug-event-service';
import {OAuthService } from 'app/oauth2/oauth-service';

//
// Globales Registrieren von Abhängigkeiten entspricht Vorgehen in
// AngularJS 1.x, bringt jedoch den Nachteil, dass Komponenten nicht
// mehr "self-contained" sind.
//
var services = [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide("BASE_URL", { useValue: 'http://www.angular.at' }),
    FlugService,
    OAuthService,
    FlugManager,
    FlugEventService,
    provide(PLATFORM_PIPES, { useValue: OrtPipe, multi: true }),
    provide(PLATFORM_DIRECTIVES, { useValue: FlugCard, multi: true })
];

bootstrap(App, services);

