
import { Component, provide, Inject} from 'angular2/core';
import { IFlug} from '../flug';
import { FlugManager} from '../services/flug-manager';
import { OrtPipe} from '../pipes/ort-pipe';
import { ROUTER_DIRECTIVES} from 'angular2/router';
import { FlugCard} from '../flug-card/flug-card';
import { DateControl} from '../date-control/date-control';
import {FlugEventService} from '../services/flug-event-service';
import { OAuthService} from 'app/oauth2/oauth-service';
import { ChangeDetectionStrategy} from 'angular2/core';

@Component({
    selector: 'flug-suchen', 
    templateUrl: 'app/flug-suchen/flug-suchen.html',
    pipes: [OrtPipe],
    directives: [ROUTER_DIRECTIVES, FlugCard, DateControl],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlugSuchen {

    public von: string = "Graz";
    public nach: string = "Hamburg";
    public datum: string = "2016-02-15T12:10+01:00";
    public selectedFlug: IFlug;

    constructor(
        private flugManager: FlugManager,
        private flugEventService: FlugEventService,
        private authService: OAuthService) {
    }

    public suchen(): void {

        this.flugManager
            .load(this.von, this.nach);

    }

    get fluege(): Array<IFlug> {
        return this.flugManager.fluege;
    }

    get fluegeSubject() {
        return this.flugManager.fluegeSubject;
    }

    public selectFlug(flug: IFlug) {
        this.selectedFlug = flug;
        this.flugEventService.flugSelected.next(flug);
    }

}