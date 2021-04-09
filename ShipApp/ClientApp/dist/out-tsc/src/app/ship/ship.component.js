import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ShipComponent = class ShipComponent {
    constructor(shipService, avRoute) {
        this.shipService = shipService;
        this.avRoute = avRoute;
        const idParam = 'id';
        if (this.avRoute.snapshot.params[idParam]) {
            this.ship$ = this.avRoute.snapshot.params[idParam];
        }
    }
    ngOnInit() {
        this.loadShip();
    }
    loadShip() {
        this.ship$ = this.shipService.getShip(this.number);
    }
};
ShipComponent = __decorate([
    Component({
        selector: 'app-ship',
        templateUrl: './ship.component.html',
        styleUrls: ['./ship.component.scss']
    })
], ShipComponent);
export { ShipComponent };
//# sourceMappingURL=ship.component.js.map