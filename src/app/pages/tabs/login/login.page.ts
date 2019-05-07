import { Component, OnInit } from '@angular/core';

const loginInfo ={
  username:'',
  password:''
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  username: string;
  password: string;
  user = Array();
  TxtForValidation:string;

  constructor() { 
    this.TxtForValidation = "Invalid Username or Email Address";
    this.username="";
    this.password="";
  }

  ngOnInit() {
    this.getUserInfoFromStroage(); 
  }  

  login(){        
    this.userValidation();
  }

  getUserInfoFromStroage () {
    console.log("local storage");
  }

  userAuth(){

  }

  userValidation(){    
    if((this.username.length < 1)|| (this.password.length < 1)){
     this.addValidAnimation();
      
    } else { 
      this.removeValidAnimation();
      this.userAuth()
    }
  }

  addValidAnimation(){
    var classForValid = "." + "loginAuth";
    var classForemail = "." + "emailValid";
    var classForpwd = "." + "pwdValid";
    let showTxt = document.querySelector(classForValid);
    let showEmailAction = document.querySelector(classForemail);
    let showPwdAction = document.querySelector(classForpwd); 

    showTxt.classList.remove('hiddenTxt');
    showEmailAction.classList.add('addBorder');
    showEmailAction.classList.add('blink');      
    showPwdAction.classList.add('addBorder');
    showPwdAction.classList.add('blink');  
  }

  removeValidAnimation(){
    var classForValid = "." + "loginAuth";
    var classForemail = "." + "emailValid";
    var classForpwd = "." + "pwdValid";
    let showTxt = document.querySelector(classForValid);
    let showEmailAction = document.querySelector(classForemail);
    let showPwdAction = document.querySelector(classForpwd); 

    showTxt.classList.add('hiddenTxt');
    showEmailAction.classList.remove('addBorder');
    showEmailAction.classList.remove('blink');      
    showPwdAction.classList.remove('addBorder');
    showPwdAction.classList.remove('blink'); 
  }
}