import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeComponent } from './list-demande.component';

describe('ListDemandeComponent', () => {
  let component: ListDemandeComponent;
  let fixture: ComponentFixture<ListDemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDemandeComponent]
    });
    fixture = TestBed.createComponent(ListDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
