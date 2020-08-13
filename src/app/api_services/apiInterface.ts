import { Observable, of } from 'rxjs';

export interface ApiService{
    setting : string;
    getRaces(): Observable<JSON[]>;
    getAbilities(): Observable <JSON[]>;
    getDetails(url : string) : Observable <JSON[]>;
}