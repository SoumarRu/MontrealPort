import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipService } from '../services/ship/ship.service';
import { Ship } from '../models/ship';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  ships$: Observable<Ship[]>;

  constructor(private shipService: ShipService) {
  }

  ngOnInit(): void {
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
}
