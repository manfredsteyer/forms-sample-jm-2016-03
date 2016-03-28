import {Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Location, CanActivate} from 'angular2/router';
import {Home } from './home/home';
import {FlugBuchen } from './flug-buchen/flug-buchen';
import {FlugEdit } from './flug-edit/flug-edit';
import {FlugEditImp } from './flug-edit-imp/flug-edit-imp';
import {FlugGrid } from './flug-grid/flug-grid';
import {OAuthService } from 'app/oauth2/oauth-service';

    @Component({
        selector: 'app',
        templateUrl: 'app/app.html',
        directives: [ROUTER_DIRECTIVES] // router-outlet, routerLink
    })
    @RouteConfig([

            { path: '/', component: Home, name: 'Home', useAsDefault: true },
            { path: '/flug-buchen/...', component: FlugBuchen, name: 'FlugBuchen' },
            { path: '/flug-edit/:id', component: FlugEdit, name: 'FlugEdit' },
            { path: '/flug-edit-imp/:id', component: FlugEditImp, name: 'FlugEditImp' },
            { path: '/flug-grid', component: FlugGrid, name: 'FlugGrid' }

    ])
    export class App {

        info = "Flug-Suchen App";

        constructor(
            private location: Location) {
        }

        isActive(path): boolean {
            if (path == '') {
                return this.location.path() == '';
            }
            return this.location.path().startsWith(path);
        }

    }