import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilImagesComponent } from './perfil-images.component';

describe('PerfilImagesComponent', () => {
  let component: PerfilImagesComponent;
  let fixture: ComponentFixture<PerfilImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
