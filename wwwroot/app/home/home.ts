import {Component } from 'angular2/core';
import { Grid } from '../kendo/grid';
import { OAuthService } from 'app/oauth2/oauth-service';
import { Location } from 'angular2/router';

@Component({
    templateUrl: 'app/home/home.html',
    directives: [Grid]
})
export class Home {

    info = "Willkommen";

}