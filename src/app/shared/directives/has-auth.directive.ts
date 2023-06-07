// import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// import { Subject } from 'rxjs';
// import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
// import { AuthenticationService } from '../../core/services/auth.service';

// @Directive({
//   selector: '[mgmgHasAuth]',
//   standalone: true,
// })
// export class HasAuthDirective {

//   @Input() mgmgHasAuth!: string;
//   @Input() permissions!: string[];
//   private destroy$ = new Subject();

//   constructor(
//     private template: TemplateRef<any>,
//     private view: ViewContainerRef,
//     private authService: AuthenticationService
//   ) {
//   }

//   ngOnInit() {
//     this.authService.identity()
//       .pipe(
//         distinctUntilChanged(),
//         takeUntil(this.destroy$)
//       )
//       .subscribe(user => {
//         this.view.clear();
//         // ?? handle auth by roles 
//         let allowed = user?.role?.includes(this.mgmgHasAuth);
//         // ?? Handle auth by user permission
//         const userRoles =  user?.userPermissions?.userCalims?.filter(c => c.isSelected) || [];
//         if(this.permissions){
//           allowed = userRoles.find(r => this.permissions.find(p => r.displayValue.includes(p)) )?.isSelected ;
//         }
//         if (allowed) {
//           this.view.createEmbeddedView(this.template);
//         } 
//       });
//   }

//   ngOnDestroy() {
//     this.destroy$.next();
//     this.destroy$.complete();
//   }

// }
