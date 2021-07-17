import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updateForm=this.fb.group({
    uid:['']
    // dates:[''],
    // evnts:[''],
    // ndate:[''],
    // nevnt:['']
   
  })
  updateevntForm=this.fb.group({
    uid:[''],
    dates:[''],
    evnts:[''],
    ndate:[''],
    nevnt:['']
   
  })
dates:any
evnts:any
eventdet:any
uid:any
  constructor(private fb:FormBuilder,private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
back(){
  this.router.navigateByUrl('view')
}
updateevnt(){
 var uid=this. updateevntForm.value.uid;
 var dates= this. updateevntForm.value.dates;
 var evnts= this. updateevntForm.value.evnts;
// var dates=localStorage.getItem("date")
//  var evnts=localStorage.getItem("evnts")
 var ndate= this. updateevntForm.value.ndate;
 var nevnt= this. updateevntForm.value.nevnt;
this.dataService.updateevnt(uid,dates,evnts,ndate,nevnt)
.subscribe((result:any)=>{
  if(result){
    alert(result.message);
  }
 },
 (result)=>{
alert(result.error.message)
 })
 

}
view(){
  var uid=this.updateForm.value.uid;
  this.dataService.view(uid)
  .subscribe((result:any)=>{
    if(result){
      this.eventdet=result.message
      localStorage.setItem("userid",result.userid)
  this.uid=localStorage.getItem("userid")
      // localStorage.setItem("date",result.date)
      // localStorage.setItem("evnt",result.evnt)
     }
   },
   (result)=>{
  alert(result.error.message)
   })
   
 }
//  updateevnt(){
//   var uid=this.updateForm.value.uid;
//   var dates= this.updateForm.value.dates;
//   var evnts= this.updateForm.value.evnts;
//  // var dates=localStorage.getItem("date")
//  //  var evnts=localStorage.getItem("evnts")
//   var ndate= this.updateForm.value.ndate;
//   var nevnt= this.updateForm.value.nevnt;
//  this.dataService.updateevnt(uid,dates,evnts,ndate,nevnt)
//  .subscribe((result:any)=>{
//    if(result){
//      alert(result.message);
//    }
//   },
//   (result)=>{
//  alert(result.error.message)
//   })
  
 
//  }
}
