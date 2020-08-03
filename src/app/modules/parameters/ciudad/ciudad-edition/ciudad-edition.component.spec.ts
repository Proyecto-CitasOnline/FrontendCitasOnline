import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadEditionComponent } from './ciudad-edition.component';

describe('CiudadEditionComponent', () => {
  let component: CiudadEditionComponent;
  let fixture: ComponentFixture<CiudadEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
