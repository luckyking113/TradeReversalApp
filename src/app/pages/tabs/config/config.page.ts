import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  data = {
    pushnotification:true,
    txtnotification:false,
    commentary:true,
    tradenotification:true,
    alertnotification:false,
    watchnotification:true,
  };  

  // customPopoverOptions: any = {
  //   header: 'Hair Color',
  //   subHeader: 'Select your hair color',
  //   message: 'Only select your dominant hair color'
  // };


  constructor() {    
  }

  ngOnInit() {
  }

}
