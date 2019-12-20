
import { PostModel } from "../models/PostModel";
import { Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { MockedPosts } from "../mocks/MockedPosts";

declare const of: any;

@Injectable()
export class PostService {
    public findAll(): Observable<PostModel[]> {
        return  of (MockedPosts);
    }
}