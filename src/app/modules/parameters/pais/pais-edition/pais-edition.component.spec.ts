import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisEditionComponent } from './pais-edition.component';

describe('PaisEditionComponent', () => {
  let component: PaisEditionComponent;
  let fixture: ComponentFixture<PaisEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
