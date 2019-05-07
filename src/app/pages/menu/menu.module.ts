import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'chat', loadChildren: '../chat/chat.module#ChatPageModule' },
      { path: 'notification', loadChildren: '../notification/notification.module#NotificationPageModule' },
      { path: 'about', loadChildren: '../about/about.module#AboutPageModule' },
      { path: 'setting', loadChildren: '../setting/setting.module#SettingPageModule' },
      { path: 'login', loadChildren: '../login/login.module#LoginPageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
