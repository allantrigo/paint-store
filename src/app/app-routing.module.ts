import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/shared/register.component';

const routes: Routes = [
  { path: 'app-register', component: RegisterComponent },
  { path: '', redirectTo: '/app-register', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
