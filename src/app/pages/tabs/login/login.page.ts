import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { JsonPipe } from '@angular/common';

var loginInfo = {
  log:'',
  pwd:'',
  action:"aamlogin",
  rememberme:0
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

  constructor(private http: HTTP) { 
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
    // console.log("local storage");
    
  }

  userAuth(){
    console.log(loginInfo);
    
    this.http.post('https://www.tradereversal.com/chat/check_login.php', loginInfo, {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }).then((response) => {
          console.log(response);
      });
  }

  userValidation(){    
    if((this.username.length < 1)|| (this.password.length < 1)){
     this.addValidAnimation();      
    } else { 
      this.removeValidAnimation();
      loginInfo.log=this.username;
      loginInfo.pwd=this.password;
      
      this.userAuth();
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