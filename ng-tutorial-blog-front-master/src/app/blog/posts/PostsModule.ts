import {NgModule} from '@angular/core';
import {PostListModule} from './list/PostListModule';
import {CommonMaterialModules} from '../../common/material/CommonMaterialModules';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { PostService } from './PostService';
import { PostResource } from './PostResource';

@NgModule({
    imports: [
        PostListModule,
        FormsModule,
        CommonModule,
        CommonMaterialModules
    ],
    exports: [
        PostListModule
    ],
    providers: [
        PostService,
        PostResource
    ],
})
export class PostsModule {
}
