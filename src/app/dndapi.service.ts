import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DndapiService {
  private dndapiUrl = 'https://www.dnd5eapi.co/api/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getRaces(): Observable<JSON[]> {
    return this.sendRequest('races');
  }

  private sendRequest(url: string): Observable<JSON[]> {
    return this.http.get<JSON[]>(this.dndapiUrl + url)
      .pipe(
        tap(() => this.log('fetched ' + url)),
        catchError(this.handleError<JSON[]>('get' + url)) // TODO: figure out how to have a blank json object to send to error function
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consuption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`DnDApi Service: ${message}`);
  }
}
