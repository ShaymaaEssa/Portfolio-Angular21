import { Routes } from '@angular/router';
import { Pathes } from './core/environment/pathes';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path:Pathes.home, component: Home},
    {path:Pathes.about, component:About},
    {path:Pathes.skills, component:Skills},
    {path:Pathes.projects, component:Projects},
    {path:Pathes.contact, component:Contact}
];
