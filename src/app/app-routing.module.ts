import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [
    { path: 'news/:page', component: ListViewComponent },
    { path: '',   redirectTo: '/news/0', pathMatch: 'full' }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }