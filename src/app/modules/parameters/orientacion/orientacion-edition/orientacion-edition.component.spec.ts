import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacionEditionComponent } from './orientacion-edition.component';

describe('OrientacionEditionComponent', () => {
  let component: OrientacionEditionComponent;
  let fixture: ComponentFixture<OrientacionEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientacionEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientacionEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
