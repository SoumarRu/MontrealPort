import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let ShipService = class ShipService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8'
            })
        };
        this.myAppUrl = environment.appUrl;
        this.myApiUrl = 'api/Ships/';
    }
    getShips() {
        return this.http.get(this.myAppUrl + this.myApiUrl)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    getShip(number) {
        return this.http.get(this.myAppUrl + this.myApiUrl + number)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    saveShip(ship) {
        return this.http.post(this.myAppUrl + this.myApiUrl, JSON.stringify(ship), this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    updateShip(number, ship) {
        return this.http.put(this.myAppUrl + this.myApiUrl + number, JSON.stringify(ship), this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    deleteShip(number) {
        return this.http.delete(this.myAppUrl + this.myApiUrl + number)
            .pipe(retry(1), catchError(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
};
ShipService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ShipService);
export { ShipService };
//# sourceMappingURL=ship.service.js.map