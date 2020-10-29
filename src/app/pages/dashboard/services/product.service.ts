import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {Product} from '../../../shared/models';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<any> {
    return this.http
      .get<Product[]>(`${environment.SERVICE_URL}/b40e997f-610a-42b6-b23f-f199ae8f3aa8`)
      .pipe(map(data => data), catchError(this.errorHandler));
  }

  private errorHandler(res: HttpErrorResponse | any): any {
    console.error(res.error || res.body.error);
    return throwError('Something went wrong...');
  }
}
