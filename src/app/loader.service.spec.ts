import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoaderService } from './loader.service';
import { Picture } from './model/picture';

describe('LoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderService
    ],
    imports: [
      HttpClientTestingModule
    ]
  }));


  it(
    'should get pictures',
    inject(
      [HttpTestingController, LoaderService],
      (
        httpMock: HttpTestingController,
        dataService: LoaderService
      ) => {
        const mockPictureList = [
          {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
          },
          {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
          }
        ];

        dataService.getPicturePage(0).subscribe(event => {
          expect(event).toEqual([
            new Picture('officia porro iure quia iusto qui ipsa ut modi',
              'https://via.placeholder.com/600/24f355',
              'https://via.placeholder.com/150/24f355'
            ),
            new Picture('culpa odio esse rerum omnis laboriosam voluptate repudiandae',
              'https://via.placeholder.com/600/d32776',
              'https://via.placeholder.com/150/d32776'
            ),
          ]);
        });
        const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=30';
        const mockReq = httpMock.expectOne(url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        expect(mockReq.request.method).toEqual('GET');

        mockReq.flush(mockPictureList);
        httpMock.verify();
      }
    )
  );

});
