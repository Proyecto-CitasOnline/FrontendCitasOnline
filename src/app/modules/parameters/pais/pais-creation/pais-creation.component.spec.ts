import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisCreationComponent } from './pais-creation.component';

describe('PaisCreationComponent', () => {
  let component: PaisCreationComponent;
  let fixture: ComponentFixture<PaisCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
