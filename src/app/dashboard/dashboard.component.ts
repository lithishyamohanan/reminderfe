import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})  

export class DashboardComponent implements OnInit {
  
  dashboardForm=this.fb.group({
    uid:[''],
    pswd:[''],
    date:[''],
    evnt:['']
  })
  user:any
  constructor(private fb:FormBuilder,private dataService:DataService,private router:Router) { 
  this.user=localStorage.getItem("name")
  }

  ngOnInit(): void {
  }
save(){
  var uid=this.dashboardForm.value.uid;

  var pswd=this.dashboardForm.value.pswd;
  var date=this.dashboardForm.value.date;
  var evnt=this.dashboardForm.value.evnt;
  this.dataService.save(uid,pswd,date,evnt)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message)
    }
  },
  (result)=>{
    alert(result.error.message)

  })
  // if(result){
  //    alert("There is "+evnt+ " on " +date);
  
  //   alert("successfully saved")
  //   console.log(this.dataService.accountDetails)
  // }

}
view(){
  this.router.navigateByUrl('view') 
  
}
}
