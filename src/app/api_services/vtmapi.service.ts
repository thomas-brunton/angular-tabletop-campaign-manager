import { Injectable } from '@angular/core';
import { ApiService } from './apiInterface';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';


@Injectable({
  providedIn: 'root'
})
export class VtmApiService implements ApiService{
  setting = 'vtm';
  private vtmApiUrl = '/assets/vtm_5e_api/'; // Here please specify where you downloaded the vampire api

  constructor(private http: HttpClient, private messageService: MessageService) {

  }

  getRaces(): Observable<JSON[]> {
    return this.sendRequest('clans/clans.json');
  }
  getAbilities(): Observable <JSON[]> {
    return this.sendRequest('powers/powers.json');
  }
  getDetails(url: string): Observable <JSON[]> {
    return this.sendRequest(url);
  }

  getClasses(): Observable<JSON[]> {
    return this.sendRequest('clans/clans.json'); // TODO: Figure out what to do with this since classes aren't really a thing in vampire
  }

  sendRequest(url: string ): Observable<JSON[]>{
    return this.http.get<JSON[]>(this.vtmApiUrl + url).pipe(
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
