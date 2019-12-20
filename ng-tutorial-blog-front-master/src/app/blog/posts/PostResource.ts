import { Injectable } from '@angular/core';
import { ApiConfig } from 'src/app/common/ApiConfig';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostListItem } from './services/dataModel/PostListItem';

@Injectable()
export class PostResource {

    private readonly URL = ApiConfig.url + '/posts';
    constructor (private httpClient: HttpClient ) {
        }
    public findAll(): Observable<PostListItem[]> {
        return this.httpClient.get(this.URL) as Observable<PostListItem[]>
    }
}
