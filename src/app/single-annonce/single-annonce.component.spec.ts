import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAnnonceComponent } from './single-annonce.component';

describe('SingleAnnonceComponent', () => {
  let component: SingleAnnonceComponent;
  let fixture: ComponentFixture<SingleAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleAnnonceComponent]
    });
    fixture = TestBed.createComponent(SingleAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
