import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ExampleApiService {
    private readonly actionUrl: string;

    constructor(private readonly http: HttpClient) {
        this.actionUrl = `${environment.server}${environment.apiUrl}franchises`;
    }

    // getChains(): Observable<Chain[]> {
    //     return this.http.get<Chain[]>(this.actionUrl);
    // }

    // getChainsWithSearch(search: DataSourceRequest): Observable<DataSourceResult<Chain>> {
    //     return this.http.get<DataSourceResult<Chain>>(this.actionUrl + '/query?' + DataSourceRequest.toQueryString(search));
    // }

    // createChain(chain: Chain): Observable<Chain> {
    //     return this.http.post<Chain>(this.actionUrl, chain);
    // }

    // updateChain(chainId: string, chainForm: ChainFormModel): Observable<Chain> {
    //     return this.http.put<Chain>(this.actionUrl + `/${chainId}`, chainForm);
    // }

    // deleteChain(chain: Chain): Observable<string> {
    //     return this.http.delete<string>(this.actionUrl + `/${chain.franchiseId}`);
    // }
}
