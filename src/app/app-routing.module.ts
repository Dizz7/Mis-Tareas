import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    
  },

   {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },

  {
    path: 'leyendo',
    loadChildren: () => import('./pages/tabs/por-hacer/leyendo.module').then( m => m.LeyendoPageModule),
  },
  


  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
  
  },
  
  
  {
    path: 'por-leer',
    loadChildren: () => import('./pages/tabs/importante/por-leer.module').then( m => m.PorLeerPageModule),
    
  },
  {
    path: 'leidos',
    loadChildren: () => import('./pages/tabs/hechos/leidos.module').then( m => m.LeidosPageModule),
    
  },
  




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
