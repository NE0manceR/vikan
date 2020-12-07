import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class SearchService {
    
    private searchUrl = `${environment.url}/api/search`;

    constructor(private http: HttpClient) { }
    
    /* запит для пошуку , приймає шукане слово */
    searchWord(word: string) {
        return this.http.get(this.searchUrl+`?word=${word}`);
    }
    
}
