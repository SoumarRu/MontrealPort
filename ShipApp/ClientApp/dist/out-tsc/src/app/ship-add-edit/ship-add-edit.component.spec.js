import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ShipAddEditComponent } from './ship-add-edit.component';
describe('ShipAddEditComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ShipAddEditComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ShipAddEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ship-add-edit.component.spec.js.map