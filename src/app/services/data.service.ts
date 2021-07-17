import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  options={
    withCredentials:true
  }
 
  Details:any = {
    1000: { uid: 1000,  username: "userone", password: "userone",evnts:[]},
    1001: { uid: 1001, username: "usertwo", password: "usertwo",evnts:[] },
    1002: { uid: 1002, username: "userthree", password: "userthree",evnts:[]},
    1003: { uid: 1003,  username: "userfour", password: "userfour",evnts:[]}
}

  constructor(private http:HttpClient) {
    
   }
 

  register(uid:any,uname:any,pswd:any){
    const data={
      uid,
      uname,
      pswd
    }
   return this.http.post("http://localhost:3000/register",data)
//     var users=this.Details
//  if(uid in users){
//    return false;
//  }
//  else{
//    users[uid]={
//      uid,
//      username:uname,
//      password:pswd,
//      evnts:[]
     
//      }
     
//      return true;
    
//  }
  }
  login(uid:any,pswd:any){
    const data={
      uid,
      pswd
    }
    return this.http.post("http://localhost:3000/login",data,this.options)
  //   var users=this.Details;
  //   if(uid in users){
  //     if(pswd==users[uid]["password"]){
       
  //       return true;   
  //     }
  //     else{
  //       alert("Incorrect password");
  //       return false
  //     }
  //  }
  //   else{
  //     alert("Invalid account");
  //     console.log(users.password)
  //     return false;
  //   }
  }
  save(uid:any,pswd:any,date:any,evnt:any){
    const data={
      uid,
      pswd,
      date,
      evnt
    }
    return this.http.post("http://localhost:3000/save",data)
  //   var users=this.Details;
  //   if(uid in users){
  //     if(pswd==users[uid]["password"]){
  //       users[uid]["evnts"].push({
  //         date:date,
  //         evnt:evnt
  //       })
  //       console.log(users)
      
  //       return true
  //     }
  //     else{
  //       alert("Incorrect password");
  //       return false;
  //     }
  //  }
  //  else{
  //   alert("Invalid account");
  //   return false
  // }
  }
  view(uid:any){
   const data={
     uid
   }
   return this.http.post("http://localhost:3000/view",data,this.options)
  }
  deleteevnt(index:any){
    const data={
     index
    }
    return this.http.post("http://localhost:3000/deleteevnt",data,this.options)
 
  }
  updateevnt(uid:any,dates:any,evnts:any,ndate:any,nevnt:any){
    const data={
      uid,
      dates,
      evnts,
      ndate,
      nevnt
    }
    return this.http.post("http://localhost:3000/updateevnt",data,this.options)

  }
}
