import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post } from '../models/post.model';

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all posts', () => {
    const dummy: Post[] = [
      {id: 1, title: 'lorem', body: 'ipsum'},
      {id: 2, title: 'dolor', body: 'sit'},
      {id: 3, title: 'kunai', body: 'amet'},
    ];
    service.getAll().subscribe(posts => {
      expect(posts.length).toBe(3);
      expect(posts).toEqual(dummy);
    });

    const request = httpMock.expectOne(service.baseUrl + '/posts');

    expect(request.request.method).toBe('GET');

    request.flush(dummy);
  });

  it('should retrieve one post', () => {
    const dummy = {id: 1, title: 'lorem', body: 'ipsum'};

    service.getById(1).subscribe(post => {
      expect(post).toEqual(dummy);
    });

    const request = httpMock.expectOne(service.baseUrl + '/posts/' + 1);

    request.flush(dummy);
  });

});
