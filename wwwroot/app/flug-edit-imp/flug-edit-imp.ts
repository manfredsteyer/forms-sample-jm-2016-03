import {Component } from 'angular2/core';
import {RouteParams, OnActivate, OnDeactivate, CanActivate, CanDeactivate, ComponentInstruction } from 'angular2/router';
import {FlugService} from '../services/flug-service';
import {IFlug } from '../flug';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import { OrtValidator } from '../validation/ort-validator';
import { OrtValidatorAsync } from '../validation/ort-validator-async';


@Component({
    templateUrl: 'app/flug-edit-imp/flug-edit-imp.html'
})
export class FlugEditImp {

    private id: number;
    private message: string;
    private activate = true;

    private form: ControlGroup;

    info = "Flug-Edit";


    constructor(params: RouteParams, fb: FormBuilder, private flugService: FlugService) {
        this.id = parseInt(params.get('id'));

        this.form = fb.group({
            abflugort: [
                'Graz',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(30),
                    OrtValidator.validate
                ]),
                Validators.composeAsync([
                    OrtValidatorAsync.validate
                ])
            ],
            zielort: ['Hamburg'],
            datum: [],
            id: []
        });

        var form = this.form;

        this.flugService
            .load(this.id)
            .subscribe(
            flug => {

                this.setForm(flug);

                this.message = "";
            },
            err => {
                console.error(err);
                this.message = "Fehler beim Laden!";
            }
            );
    }

    private setFormValue(key, value) {
        var c = <Control>this.form.controls[key];
        if (c) {
            c.updateValue(value);
        }
    }

    private setForm(model: any) {
        for (var key in model) {
            var value = model[key];
            this.setFormValue(key, value);
        }
    }


    save() {


        var flug = this.form.value;
        var abflugort = flug.abflugort;        

        this.flugService
            .save(<IFlug>flug)
            .subscribe(
                flug => {

                    this.setForm(flug);
                    this.message = "Flug wurde gespeichert!";
                },
                (err: any) => {
                    console.error("Fehler beim Speichern!");
                    console.error(err); // <-- Http-Response mit Fehler!
                    this.message = err.text(); // <-- Text aus Payload
                }
            );
    }

    doStuffWithControl() {

        // Just demonstrated things, you can do with Control and ControlGroup

        var formValid = this.form.valid;

        var abflugortControl = <Control>this.form.controls['abflugort'];
        var controlValid = abflugortControl.valid;

        this.form.valueChanges.subscribe(
            (value) => {
                console.debug('form.valueChanges');
                console.debug(value);
            }
        );

        abflugortControl.valueChanges.subscribe(
            (value) => {
                console.debug('abflugortControl.valueChanges');
                console.debug(value);
            }
        );

    }

}