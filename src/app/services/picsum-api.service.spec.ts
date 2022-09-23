import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PicsumApiService } from './picsum-api.service';

describe('PicsumApiService', () => {
  let service: PicsumApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PicsumApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
