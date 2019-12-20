import { NgModule } from '@angular/core';
import { PostListComponent } from './PostListComponent';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [

        PostListComponent,
    ],
    imports: [
        
        CommonModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [

        PostListComponent,
    ],
    providers: [],
})
export class PostListModule {}
