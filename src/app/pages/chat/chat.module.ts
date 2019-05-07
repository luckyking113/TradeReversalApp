import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatPage } from './chat.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ChatPage,
    children:[
      {
        path:'home',
        loadChildren: '../tabs/home/home.module#HomePageModule'
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
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/chat',
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
  declarations: [ChatPage]
})
export class ChatPageModule {}
