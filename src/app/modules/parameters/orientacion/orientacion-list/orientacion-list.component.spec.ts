import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacionListComponent } from './orientacion-list.component';

describe('OrientacionListComponent', () => {
  let component: OrientacionListComponent;
  let fixture: ComponentFixture<OrientacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
