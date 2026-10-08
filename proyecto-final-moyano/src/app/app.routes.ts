import { Routes } from '@angular/router';
import { Productos } from './pages/productos/productos';
import { Inicio } from './pages/inicio/inicio';
import { Contacto } from './pages/contacto/contacto';
import { Nosotros } from './pages/nosotros/nosotros';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'Inicio', component: Inicio },
    { path: 'productos', component: Productos },
    { path: 'Contacto', component: Contacto },
    { path: 'Nosotros', component: Nosotros },
    { path: '**', component: NotFound },
];
