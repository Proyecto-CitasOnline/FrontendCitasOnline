import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadRemoveComponent } from './ciudad-remove.component';

describe('CiudadRemoveComponent', () => {
  let component: CiudadRemoveComponent;
  let fixture: ComponentFixture<CiudadRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
