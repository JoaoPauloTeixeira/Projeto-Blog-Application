import { NgModule } from '@angular/core';
import { PostListModule } from './posts/list/PostListModule';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './posts/PostService';
import { PostResource } from './posts/PostResource';


@NgModule({
    declarations: [],
    imports: [
        PostListModule,
        HttpClientModule
    ],
    exports: [
        PostListModule
    ],
    providers: [

        PostService,
        PostResource,

    ],
})
export class BlogModule {}