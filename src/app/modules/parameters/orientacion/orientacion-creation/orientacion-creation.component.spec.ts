import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientacionCreationComponent } from './orientacion-creation.component';

describe('OrientacionCreationComponent', () => {
  let component: OrientacionCreationComponent;
  let fixture: ComponentFixture<OrientacionCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientacionCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientacionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
