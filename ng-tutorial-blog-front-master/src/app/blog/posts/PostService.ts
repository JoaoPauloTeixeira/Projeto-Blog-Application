import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListItem } from './services/dataModel/PostListItem';
import { PostResource } from './PostResource';

@Injectable()
export class PostService {

    constructor (private postResource: PostResource) {
        
    }

    public getAllPostItems(): Observable<PostListItem[]>{
        return this.postResource.findAll()
    }
}