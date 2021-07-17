import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  viewForm=this.fb.group({
    uid:['']
   
  })
  user:any
  eventdet:any
  constructor(private dataService:DataService,private fb:FormBuilder,private router:Router) { 
    this.user=localStorage.getItem("name")

  }
   
  ngOnInit(): void {
  }
 
  view(){
  var uid=this.viewForm.value.uid;
  this.dataService.view(uid)
  .subscribe((result:any)=>{
    if(result){
      this.eventdet=result.message
      // localStorage.setItem("userid",result.userid)
      // localStorage.setItem("date",result.date)
      // localStorage.setItem("evnt",result.evnt)
     }
   },
   (result)=>{
  alert(result.error.message)
   })
   
 }
 deleteevnt(index:any){
   var index=this.viewForm.value.index;

   this.dataService.deleteevnt(index)
   .subscribe((result:any)=>{
    if(result){
      alert(result.message)
     
     }
   },
   (result)=>{
  alert(result.error.message)
   })
 }
 back(){
   this.router.navigateByUrl('dashboard')
 }
 update(){
   this.router.navigateByUrl('update')
 }
}
