import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTitulaireComponent } from './new-titulaire.component';

describe('NewTitulaireComponent', () => {
  let component: NewTitulaireComponent;
  let fixture: ComponentFixture<NewTitulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTitulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTitulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
