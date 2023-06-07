import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: '503',
        loadComponent: () => import('./pages/errors/error505/error505.component').then(m => m.Error505Component)
      },
      {
        path: '**',
        loadComponent: () => import('./pages/errors/error404/error404.component').then(m => m.Error404Component)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
