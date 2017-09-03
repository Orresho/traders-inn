import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    
];

export const routing = RouterModule.forRoot(APP_ROUTES);
