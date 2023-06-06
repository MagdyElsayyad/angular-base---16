import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    /**
        * Constructor
        */
    constructor(
        private _authService: AuthenticationService,
        private _router: Router,
        private loaderService: LoaderService,
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const redirectUrl = state.url === '/account/login' ? '/' : state.url;
        const authorities = route.data.authorities;
        const roles = route.data.roles;
        return this._check(redirectUrl, authorities, roles);
    }

    /**
     * Can activate child
     *
     * @param childRoute
     * @param state
     */
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const redirectUrl = state.url === '/account/login' ? '/' : state.url;
        return this._check(redirectUrl);
    }

    /**
     * Can load
     *
     * @param route
     * @param segments
     */
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this._check('/');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check the authenticated status
     *
     * @param redirectURL
     * @private
     */
    private _check(redirectURL: string, authorities?: string[], roles?: string[]): Observable<boolean> {




        this.loaderService.isLoading.next(true);
        // Check the authentication status
        return this._authService.identity()
            .pipe(
                map((user) => {
                    this.loaderService.isLoading.next(false);
                    // If the user is not user...
                    if (!user) {
                        // Redirect to the sign-in page
                        this._router.navigate(['/account/login'], { queryParams: { redirectURL } });
                        // Prevent the access
                        return false;
                    }

                    if (authorities) {
                        // const userRoles = user?.userPermissions?.userCalims?.filter(c => c.isSelected) || [];
                        const userRoles = [];
                        let allowed = false;
                        if ((!authorities || authorities.length === 0) && (!roles || roles.length === 0)) {
                            allowed = true;
                        }
                        authorities.forEach(auth => {
                            if (userRoles.find(r => r.displayValue.includes(auth))) {
                                allowed = true;
                            }
                        })
                        if (roles && roles.find(r => r === user.role)) {
                            allowed = true;
                        }
                        if (!allowed) {
                            this._router.navigate(['/404'])
                            return false;
                        }
                    }

                    // Allow the access
                    return true;
                },
                )
            );
    }
}
