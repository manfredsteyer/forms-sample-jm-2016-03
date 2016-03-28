import {Injectable, Inject } from 'angular2/core';
import { Http, URLSearchParams, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { IFlug } from '../flug';
import { OAuthService} from 'app/oauth2/oauth-service';

declare var fetch: any;

@Injectable()
export class FlugService {

    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private http: Http) {
    }

    public find(von, nach) {

        var headers = new Headers();
        headers.set('Accept', 'text/json');

        var url = this.baseUrl + "/api/flug";

        var search = new URLSearchParams();
        search.set('abflugOrt', von);
        search.set('zielOrt', nach);

        return this.http
                   .get(url, { search, headers })
                   .map(response => response.json());

    }


    public load(id): Observable<IFlug>  {

        var url = this.baseUrl + "/api/flug";
        var search = new URLSearchParams();
        search.set('flugNummer', id);

        var headers = new Headers();
        headers.set('Accept', 'text/json'); 

        return this
            .http.get(url, { search, headers })
                .map(resp => resp.json()); // <-- Observable.subsribe
    }


    public save(flug: IFlug): Observable<IFlug> {

        // Content-Type: text/json
        var headers = new Headers();
        headers.set('Content-Type', 'text/json'); 

        var url = this.baseUrl + "/api/flug";

        return this.http
                    .post(url, JSON.stringify(flug), { headers })
                    .map(resp => resp.json());

    }
}