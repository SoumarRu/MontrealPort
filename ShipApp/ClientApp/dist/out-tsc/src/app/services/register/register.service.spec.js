import { TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';
describe('RegisterService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RegisterService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=register.service.spec.js.map