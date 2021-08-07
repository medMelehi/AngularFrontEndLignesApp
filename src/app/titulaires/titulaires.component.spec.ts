import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulairesComponent } from './titulaires.component';

describe('TitulairesComponent', () => {
  let component: TitulairesComponent;
  let fixture: ComponentFixture<TitulairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
