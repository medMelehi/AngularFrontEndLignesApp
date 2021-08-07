import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTitulaireComponent } from './add-titulaire.component';

describe('AddTitulaireComponent', () => {
  let component: AddTitulaireComponent;
  let fixture: ComponentFixture<AddTitulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTitulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTitulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
