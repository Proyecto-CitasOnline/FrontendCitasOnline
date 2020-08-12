import { TestBed } from '@angular/core/testing';

import { PerfilImagesService } from './perfil-images.service';

describe('PerfilImagesService', () => {
  let service: PerfilImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
