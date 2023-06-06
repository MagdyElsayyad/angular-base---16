// import { Injectable } from '@angular/core';
// import * as signalR from "@aspnet/signalr";
// import { BehaviorSubject } from 'rxjs';
// import { environment } from 'src/environments/environment';
// @Injectable({
//   providedIn: 'root'
// })
// export class SignalRService {

//   private active = new BehaviorSubject<boolean>(false);
//   private hubConnection: signalR.HubConnection;
//    myToken = '';
   
//   constructor() {
//     if(localStorage.getItem('userToken') || sessionStorage.getItem('userToken')){
//       this.myToken =  JSON.parse(localStorage.getItem('userToken')) || JSON.parse(sessionStorage.getItem('userToken'))
//     }
//   }

//   public startConnection() {
//     this.hubConnection = new signalR.HubConnectionBuilder()
//     .withUrl(environment.api + "/realtimeHub", {
//       accessTokenFactory: () => new Promise<string>((res) => {
//         res(this.myToken)
//       }),
      
//     }) 
//     .configureLogging(signalR.LogLevel.None)
//     .build();

//     this.hubConnection
//       .start()
//       .then(() => {
//         this.active.next(true);
//         console.log('Connection started');
//       })
//       .catch(err => console.error('Error while starting connection: ' + err));
//   }

//   public addNotificationsListener(callback: (data: any) => void) {
//     this.active.subscribe(res => {
//       if(res){
//         this.hubConnection.on('getNotifcation', callback);
//       }
//     });
//   }


//   public addTransactionsListener(callback: (data: any) => void) {
//      this.active.subscribe(res => {
//       if(res){
//         this.hubConnection.on('getRealTimeTransaction', callback);
//       }
//     });
//   }
//   public addCashOrderListener(callback: (data: any) => void) {
//      this.active.subscribe(res => {
//       if(res){
//         this.hubConnection.on('getRealTimeCashOrder', callback);
//       }
//     });
//   }
//   public addTicketsListener(callback: (data: any) => void) {
//      this.active.subscribe(res => {
//       if(res){
//         this.hubConnection.on('getRealTimeTickets', callback);
//       }
//     });
//   }


// }
