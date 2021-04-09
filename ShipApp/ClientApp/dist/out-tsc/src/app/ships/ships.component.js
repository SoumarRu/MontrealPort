import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ShipsComponent = class ShipsComponent {
    constructor(shipService) {
        this.shipService = shipService;
    }
    ngOnInit() {
        this.loadShips();
    }
    delete(number) {
        const ans = confirm('Est ce que tu veux supprimer le navire ' + number + ' ?');
        if (ans) {
            this.shipService.deleteShip(number).subscribe((data) => {
                this.loadShips();
            });
        }
    }
    loadShips() {
        this.ships$ = this.shipService.getShips();
    }
};
ShipsComponent = __decorate([
    Component({
        selector: 'app-ships',
        templateUrl: './ships.component.html',
        styleUrls: ['./ships.component.scss']
    })
], ShipsComponent);
export { ShipsComponent };
//# sourceMappingURL=ships.component.js.map