import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Ship } from '../../models/ship';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/Ships/';
  }

  getShips(): Observable<Ship[]> {
    return this.http.get<Ship[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getShip(number: number): Observable<Ship> {
    return this.http.get<Ship>(this.myAppUrl + this.myApiUrl + number)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveShip(ship): Observable<Ship> {
    return this.http.post<Ship>(this.myAppUrl + this.myApiUrl, JSON.stringify(ship), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateShip(number: number, ship): Observable<Ship> {
    return this.http.put<Ship>(this.myAppUrl + this.myApiUrl + number, JSON.stringify(ship), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteShip(number: number): Observable<Ship> {
    return this.http.delete<Ship>(this.myAppUrl + this.myApiUrl + number)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
