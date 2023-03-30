import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Picture } from './model/picture';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private limitPerPage = 30;
  private url = 'http://jsonplaceholder.typicode.com/photos/1';

  constructor(private http: HttpClient) { }

  getPicture() {
    return this.http.get(this.url);
  }

  getPicturePage(pageNumber: number) {
    // http://jsonplaceholder.typicode.com/photos?_start=2&_limit=4
    const photosUrl = 'https://jsonplaceholder.typicode.com/photos';
    return this.http.get<Picture[]>(photosUrl,
      {
        params: new HttpParams()
          .append('_start', `${pageNumber * this.limitPerPage}`)
          .append('_limit', `${this.limitPerPage}`)
      }
    )
      .pipe(
        map(response => response.map(el => new Picture(el.title, el.url, el.thumbnailUrl))),
        catchError(this.handleError)
      );
  }

  /**
 * Handle HTTP error
 */
  private handleError(error: any) {
    console.error('handleError');
    const errMsg = error.message
      ? error.message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return throwError(errMsg);
  }
}
