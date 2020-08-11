import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilListHomeComponent } from './perfil-list-home.component';

describe('PerfilListHomeComponent', () => {
  let component: PerfilListHomeComponent;
  let fixture: ComponentFixture<PerfilListHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilListHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
