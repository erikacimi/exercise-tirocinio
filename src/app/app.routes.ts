import { Routes } from '@angular/router';
import { LoginComponent } from './Page/login/login.component';
import { HomeComponent } from './Page/home/home.component';
import { DashComponent } from './Page/home/dash/dash.component';
import { DipendentiComponent } from './Page/home/dipendenti/dipendenti.component';
import { PagenotfoundComponent } from './Page/home/pagenotfound/pagenotfound.component';
import { DirigentiComponentComponent } from './Page/home/dipendenti/dirigenti-component/dirigenti-component.component';
import { AnalistiComponentComponent } from './Page/home/dipendenti/analisti-component/analisti-component.component';
import { ProgrammatoriComponentComponent } from './Page/home/dipendenti/programmatori-component/programmatori-component.component';



export const routes: Routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: 'full'
    },
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "home",
        component: HomeComponent,
        children: [
            {
                path: "dash",
                component: DashComponent

            },
            {
                path: "dipendenti",
                component: DipendentiComponent,
                children : [
                    {
                        path: "dirigenti",
                        component: DirigentiComponentComponent
        
                    },
                    {
                        path: "analisti",
                        component: AnalistiComponentComponent
        
                    },
                    {
                        path: "programmatori",
                        component: ProgrammatoriComponentComponent
        
                    },

                ]

            },

            {
                path: "dash",
                component: DipendentiComponent
            },
            {
                path: "",
                redirectTo: "dash",
                pathMatch: 'prefix'
            }
        ]
    },
    {
        path: "**",
        pathMatch: 'full',
        component:PagenotfoundComponent
    }

];