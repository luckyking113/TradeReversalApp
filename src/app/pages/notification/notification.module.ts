import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NotificationPage } from './notification.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: NotificationPage,
    children:[
      {
        path:'home',
        loadChildren: '../tabs/home/home.module#HomePageModule',        
      },
      {
        path:'chat',
        loadChildren: '../tabs/chat/chat.module#ChatPageModule'
      },
      {
        path:'about',
        loadChildren: '../tabs/about/about.module#AboutPageModule'
      },
      {
        path:'login',
        loadChildren: '../tabs/login/login.module#LoginPageModule'
      },
      {
        path:'config',
        loadChildren: '../tabs/config/config.module#ConfigPageModule'
      },
      {
        path:'notification',
        loadChildren: '../tabs/notification/notification.module#NotificationPageModule'
      }      
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/notification',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotificationPage]
})
export class NotificationPageModule {}
