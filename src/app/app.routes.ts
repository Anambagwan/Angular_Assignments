// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonComponent } from './python/python.component';
import { JavaComponent } from './java/java.component';
import { CComponent } from './c/c.component';

export const routes: Routes = [
  { path: 'python', component: PythonComponent },
  { path: 'java', component: JavaComponent },
  { path: 'c', component: CComponent },
  { path: '', redirectTo: '/python', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

