import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisRemoveComponent } from './pais-remove.component';

describe('PaisRemoveComponent', () => {
  let component: PaisRemoveComponent;
  let fixture: ComponentFixture<PaisRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
