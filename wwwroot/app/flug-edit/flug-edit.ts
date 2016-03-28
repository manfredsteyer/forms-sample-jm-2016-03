import {Component } from 'angular2/core';
import {RouteParams, OnActivate, OnDeactivate, CanActivate, CanDeactivate, ComponentInstruction } from 'angular2/router';
import {FlugService} from '../services/flug-service';
import {IFlug } from '../flug';
import { OrtValidatorDirective } from '../validation/ort-validator-directive';
import { OrtValidatorAsyncDirective } from '../validation/ort-validator-async-directive';
import { DateControl } from '../date-control/date-control';

@Component({
    templateUrl: 'app/flug-edit/flug-edit.html',
    directives: [OrtValidatorDirective, OrtValidatorAsyncDirective, DateControl]
})
export class FlugEdit {

    private id: number;
    private flug = {};
    private message: string;
    private activate = true;

    info = "Flug-Detail";

    constructor(params: RouteParams, private flugService: FlugService) {
        this.id = parseInt(params.get('id'));

        this.flugService
            .load(this.id)
            .subscribe(
                flug => {
                    this.flug = flug;
                    this.message = "";
                },
                err => {
                    console.error(err);
                    this.message = "Fehler beim Laden!";
                }
            );
    }

    save() {

        this.flugService
            .save(<IFlug>this.flug)
            .subscribe(
                flug => {
                    this.flug = flug;
                    this.message = "Flug wurde gespeichert!";
                },
                (err: any) => {
                    console.error("Fehler beim Speichern!");
                    console.error(err); // <-- Http-Response mit Fehler!
                    this.message = err.text(); // <-- Text aus Payload
                }
            );
    }


}