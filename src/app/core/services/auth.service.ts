// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { distinctUntilChanged, map } from 'rxjs/operators';
// import { ROLES } from 'src/app/app-const';
// import { AuthModel, UserModel } from 'src/app/core/backend/models';
// import { AuthService } from '../backend/services';



// @Injectable({ providedIn: 'root' })

// export class AuthenticationService {
//     currentUserSubject: BehaviorSubject<AuthModel | null> = new BehaviorSubject<AuthModel | null>(null);
//     public currentUser: Observable<AuthModel>;

//     private token;
//     private get _token(): string {
//         return this.token || localStorage.getItem('userToken') || sessionStorage.getItem('userToken');
//     }
//     private set _tokenInLocal(value: string) {
//         this.token = value;
//         localStorage.setItem('userToken', JSON.stringify(value));
//     }
//     private set _tokenInSession(value: string) {
//         this.token = value;
//         sessionStorage.setItem('userToken', JSON.stringify(value));
//     }

//     userData = null;
//     constructor(
//         private router: Router,
//         private beAuthService: AuthService) {
//         this.currentUser = this.currentUserSubject.asObservable();
//     }


//     identity(force = false): Observable< UserModel | null> {

//         if (!this._token) {
//             return of(null);
//         }

//         if (this.currentUserSubject.value && !force) {
//             return this.currentUserSubject;
//         } else {
//             return this.beAuthService.apiAuthGetAccountGet$Json().pipe(distinctUntilChanged(), map(user => {
//                 // login successful if there's a jwt token in the response
//                 if (user.data) {
//                     if (!this.currentUserSubject.value || force) {
//                         this.currentUserSubject.next(user.data);
//                     }

//                     return user.data;
//                 }
//                 this.router.navigate(['/']);
//                 return null;
//             }));
//         }
//     }

//     public get currentUserValue(): AuthModel {
//         return this.currentUserSubject.value;
//     }

//     login(phone: string, password: string, rememberMe = false) {
//         return this.beAuthService.apiAuthLoginPost$Json({
//             body: {
//                 phone,
//                 password
//             }
//         })
//             .pipe(map(user => {

//                 // login successful if there's a jwt token in the response
//                 if (user && user.data.token) {
//                     if (rememberMe) {
//                         this._tokenInLocal = user.data.token;
//                     } else {
//                         this._tokenInSession = user.data.token;
//                     }
                    
//                 }
//                 return user;
//             }));
//     }

//     redirectByRole(role: String, id?: string) {
//        if(role ){
//         switch (role) {
//             case ROLES.ADMIN:
//                 this.router.navigate(['/dashboard'])
//                 break;
//             case ROLES.CUSTOMER:
//                 this.router.navigate(['/profile', id])
//                 break;
//             case ROLES.DELEGATE:
//                 this.router.navigate(['/delegete-profile', id])
//                 break;
//             case ROLES.VENDOR:
//                 this.router.navigate(['/vendor-profile', id])
//                 break;
//             default:
//                 break;
//         }
//        }
//     }

//     logout() {
//         // remove user from local storage to log user out
//         if (this._token) {
//             this.beAuthService.apiAuthRevokeTokenPost({
//                 body: {
//                     token: this._token
//                 }
//             }).subscribe();
//         }
//         this._tokenInLocal = null;
//         this._tokenInSession = null;
//         this.currentUserSubject.next(null);
//         this.router.navigate(['/account/login'])
//     }
// }

