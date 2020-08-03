import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCivilEditionComponent } from './estado-civil-edition.component';

describe('EstadoCivilEditionComponent', () => {
  let component: EstadoCivilEditionComponent;
  let fixture: ComponentFixture<EstadoCivilEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoCivilEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoCivilEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
