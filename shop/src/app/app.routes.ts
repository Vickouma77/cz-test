import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent,
        children: [
            {path: '', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
        ]
    }
];