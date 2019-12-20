import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogModule} from './blog/BlogModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';
import {LoginModule} from './login/LoginModule';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        MatToolbarModule,
        BrowserModule,
        AppRoutingModule,
        BlogModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
