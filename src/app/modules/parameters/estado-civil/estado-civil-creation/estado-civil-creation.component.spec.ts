import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCivilCreationComponent } from './estado-civil-creation.component';

describe('EstadoCivilCreationComponent', () => {
  let component: EstadoCivilCreationComponent;
  let fixture: ComponentFixture<EstadoCivilCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoCivilCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoCivilCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
