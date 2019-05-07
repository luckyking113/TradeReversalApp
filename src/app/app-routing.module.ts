import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },  
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // { path: 'notification', loadChildren: './pages/tabs/notification/notification.module#NotificationPageModule' },
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  // { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  // { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },
  // { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  // { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  // { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },   
  // { path: 'home', loadChildren: './pages/tabs/home/home.module#HomePageModule' },
  // { path: 'chat', loadChildren: './pages/tabs/chat/chat.module#ChatPageModule' },
  // { path: 'about', loadChildren: './pages/tabs/about/about.module#AboutPageModule' },
  // { path: 'login', loadChildren: './pages/tabs/login/login.module#LoginPageModule' },
  // { path: 'config', loadChildren: './pages/tabs/config/config.module#ConfigPageModule' },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
