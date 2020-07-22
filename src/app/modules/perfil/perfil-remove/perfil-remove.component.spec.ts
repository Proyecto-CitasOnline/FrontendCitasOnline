import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRemoveComponent } from './perfil-remove.component';

describe('PerfilRemoveComponent', () => {
  let component: PerfilRemoveComponent;
  let fixture: ComponentFixture<PerfilRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
