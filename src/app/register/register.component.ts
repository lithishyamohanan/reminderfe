import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    uid:[''],
    uname:[''],
    pswd:['']
  })

  constructor(private fb:FormBuilder,private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
 var uid=this.registerForm.value.uid;
 var uname=this.registerForm.value.uname;
 var pswd=this.registerForm.value.pswd;
 this.dataService.register(uid,uname,pswd)
 .subscribe((result:any)=>{
  if(result){
    alert(result.message);
     this.router.navigateByUrl('')
   }
 },
 (result)=>{
alert(result.error.message)
 })
 
}
}
