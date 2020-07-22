import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCreationComponent } from './perfil-creation.component';

describe('PerfilCreationComponent', () => {
  let component: PerfilCreationComponent;
  let fixture: ComponentFixture<PerfilCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
