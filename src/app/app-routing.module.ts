import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarRebeldeComponent } from './criar-rebelde/criar-rebelde.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main-screen/main/main.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "main", component: MainComponent},
  {path: "cadastro", component: CriarRebeldeComponent},
  // {path: "main/:id", component: MainComponent, canActivate: [AuthGuard]},
  // {path: "users", component: UsersComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'main', pathMatch: 'full' },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
