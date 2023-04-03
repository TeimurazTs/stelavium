import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './componenets/auth/auth.component';
import { EssaysComponent } from './componenets/essays/essays.component';
import { HomeComponent } from './componenets/home/home.component';
import { SubmitComponent } from './componenets/submit/submit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth/:page',
    component: AuthComponent
  },
  {
    path: 'submit',
    component: SubmitComponent
  },
  {
    path: 'essays',
    component: EssaysComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
