import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title:'Home',
      url: '/menu/home',
      icon:'home',
    },
    {
      title:'Chat',
      url: '/menu/chat',
      icon:'chatbubbles',
    },    
    {
      title:'Notification',
      url: '/menu/notification',
      icon:'clipboard',
    },
    {
      title:'About Us',
      url: '/menu/about',
      icon:'information-circle',
    },
    {
      title:'Setting',
      url: '/menu/setting',
      icon:'settings',
    },
    {
      title:'Login',
      url: '/menu/login',
      icon:'log-in',
    }
  ];

  selectedPath= '';

  constructor(private router: Router) { 
    this.router.events.subscribe((event:RouterEvent) =>{
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    })
  }

  ngOnInit() {
    // this.go();
    
  }
  // go() {
  //   this.router.navigateByUrl('/menu/home');
  // }
}
