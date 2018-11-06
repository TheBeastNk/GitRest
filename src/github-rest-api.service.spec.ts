import { TestBed } from '@angular/core/testing';

import { GithubRestApiService } from './github-rest-api.service';

describe('GithubRestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubRestApiService = TestBed.get(GithubRestApiService);
    expect(service).toBeTruthy();
  });
});
