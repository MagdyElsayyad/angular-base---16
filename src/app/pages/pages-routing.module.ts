import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from '../layouts/public/public.component';
import { StarterComponent } from './starter/starter.component';

const routes: Routes = [
  // ?? Public routes
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: StarterComponent,
        data: {
          roles: [],
          title: ''
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
