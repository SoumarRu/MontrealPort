import { TestBed } from '@angular/core/testing';
import { ShipService } from './ship.service';
describe('ShipService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ShipService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=ship.service.spec.js.map