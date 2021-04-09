import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ShipAddEditComponent = class ShipAddEditComponent {
    constructor(shipService, formBuilder, avRoute, router) {
        this.shipService = shipService;
        this.formBuilder = formBuilder;
        this.avRoute = avRoute;
        this.router = router;
        const idParam = 'id';
        this.actionType = 'Ajouter';
        this.formName = 'name';
        this.formYearOfConstruction = 'yearOfConstruction';
        this.formLengthOfVessel = 'lengthOfVessel';
        this.formVesselWidth = "vesselWidth";
        this.formGrossTonnage = "grossTonnage";
        this.formNetTonnage = "netTonnage";
        if (this.avRoute.snapshot.params[idParam]) {
            this.number = this.avRoute.snapshot.params[idParam];
        }
        this.form = this.formBuilder.group({
            number: 0,
            name: ['', [Validators.required]],
            yearOfConstruction: ['', Validators.maxLength(4)],
            lengthOfVessel: ['', [Validators.required]],
            vesselWidth: ['', [Validators.required]],
            grossTonnage: ['',],
            netTonnage: ['',],
        });
    }
    ngOnInit() {
        if (this.number > 0) {
            this.actionType = 'Modifier';
            this.shipService.getShip(this.number)
                .subscribe(data => (this.existingShip = data,
                this.form.controls[this.formName].setValue(data.name),
                this.form.controls[this.formYearOfConstruction].setValue(data.yearOfConstruction),
                this.form.controls[this.formGrossTonnage].setValue(data.grossTonnage),
                this.form.controls[this.formLengthOfVessel].setValue(data.lengthOfVessel),
                this.form.controls[this.formVesselWidth].setValue(data.vesselWidth),
                this.form.controls[this.formNetTonnage].setValue(data.netTonnage)));
        }
    }
    save() {
        if (!this.form.valid) {
            return;
        }
        if (this.actionType === 'Ajouter') {
            let ship = {
                name: this.form.get(this.formName).value,
                yearOfConstruction: this.form.get(this.formYearOfConstruction).value,
                lengthOfVessel: this.form.get(this.formLengthOfVessel).value,
                vesselWidth: this.form.get(this.formVesselWidth).value,
                grossTonnage: this.form.get(this.formGrossTonnage).value,
                netTonnage: this.form.get(this.formNetTonnage).value,
            };
            this.shipService.saveShip(ship)
                .subscribe((data) => {
                this.router.navigate(['/home']);
            });
        }
        if (this.actionType === 'Modifier') {
            let ship = {
                number: this.existingShip.number,
                name: this.form.get(this.formName).value,
                yearOfConstruction: this.form.get(this.formYearOfConstruction).value,
                lengthOfVessel: this.form.get(this.formLengthOfVessel).value,
                vesselWidth: this.form.get(this.formVesselWidth).value,
                grossTonnage: this.form.get(this.formGrossTonnage).value,
                netTonnage: this.form.get(this.formNetTonnage).value,
            };
            this.shipService.updateShip(ship.number, ship)
                .subscribe((data) => {
                this.router.navigate(['/home']);
            });
        }
    }
    cancel() {
        this.router.navigate(['/home']);
    }
    get name() { return this.form.get(this.formName); }
    get yearOfConstruction() { return this.form.get(this.formYearOfConstruction); }
    get lengthOfVessel() { return this.form.get(this.formLengthOfVessel); }
    get vesselWidth() { return this.form.get(this.formVesselWidth); }
    get grossTonnage() { return this.form.get(this.formGrossTonnage); }
    get netTonnage() { return this.form.get(this.formNetTonnage); }
};
ShipAddEditComponent = __decorate([
    Component({
        selector: 'app-ship-add-edit',
        templateUrl: './ship-add-edit.component.html',
        styleUrls: ['./ship-add-edit.component.scss']
    })
], ShipAddEditComponent);
export { ShipAddEditComponent };
//# sourceMappingURL=ship-add-edit.component.js.map