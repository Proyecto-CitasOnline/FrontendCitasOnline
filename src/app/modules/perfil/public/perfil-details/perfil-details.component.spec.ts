import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDetailsComponent } from './perfil-details.component';

describe('PerfilDetailsComponent', () => {
  let component: PerfilDetailsComponent;
  let fixture: ComponentFixture<PerfilDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
