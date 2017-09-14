import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MessageResolver } from './message.resolver';

export const originalResolver = { message: MessageResolver };
export const duplicateResolver = Object.assign({}, originalResolver);

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'original', pathMatch: 'full' },
      { path: 'original', component: ChildComponent, resolve: originalResolver },
      { path: 'duplicate', component: ChildComponent, resolve: duplicateResolver },
    ]),
  ],
  providers: [MessageResolver],
  bootstrap: [AppComponent],
})
export class AppModule { }
