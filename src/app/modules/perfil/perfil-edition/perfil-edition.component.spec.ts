import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEditionComponent } from './perfil-edition.component';

describe('PerfilEditionComponent', () => {
  let component: PerfilEditionComponent;
  let fixture: ComponentFixture<PerfilEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
