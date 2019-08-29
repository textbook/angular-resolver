import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildComponent } from './child/child.component';
import { MessageResolver } from './message.resolver';

export const originalResolver = { message: MessageResolver };
export const duplicateResolver = Object.assign({}, originalResolver);

const routes: Routes = [
  { path: '', redirectTo: 'original', pathMatch: 'full' },
  { path: 'original', component: ChildComponent, resolve: originalResolver },
  { path: 'duplicate', component: ChildComponent, resolve: duplicateResolver },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
