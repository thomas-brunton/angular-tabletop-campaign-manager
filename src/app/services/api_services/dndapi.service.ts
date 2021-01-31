import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../message.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {ApiService} from './apiInterface';

@Injectable({
  providedIn: 'root'
})
export class DndApiService implements ApiService{
  private dndapiUrl = 'https://www.dnd5eapi.co';
  setting = 'dnd';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getRaces(): Observable<JSON[]> {
    return this.sendRequest('/api/races');
  }
  getAbilities(): Observable <JSON[]> {
    return this.sendRequest('/api/spells');
  }

  getDetails(url: string): Observable <JSON[]> {
    return this.sendRequest(url);
  }

  getClasses(): Observable<JSON[]> {
    return this.sendRequest('/api/classes');
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
  private handleError<T>(operation, result?: T) { // Maybe add back in operation = 'operation' if needed later for other http requests
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consuption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }

  private log(message: string): void {
    this.messageService.add(`DnDApi Service: ${message}`);
  }
}
