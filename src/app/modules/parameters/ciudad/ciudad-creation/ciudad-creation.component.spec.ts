import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadCreationComponent } from './ciudad-creation.component';

describe('CiudadCreationComponent', () => {
  let component: CiudadCreationComponent;
  let fixture: ComponentFixture<CiudadCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
