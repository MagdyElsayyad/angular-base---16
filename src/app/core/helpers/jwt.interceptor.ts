import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const token = JSON.parse(localStorage.getItem('userToken')) || JSON.parse(sessionStorage.getItem('userToken'))
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        if (request.url.toLowerCase().endsWith('.jpg') || request.url.toLowerCase().endsWith('.jpeg') || request.url.toLowerCase().endsWith('.png') || request.url.toLowerCase().endsWith('.gif')) {
            const cacheTtl = 3600 * 24; // 1 hour cache TTL
            const cacheControlHeader = `max-age=${cacheTtl}`;
            const modifiedReq = request.clone({ setHeaders: { 'Cache-Control': cacheControlHeader } });
            return next.handle(modifiedReq);
          }

        return next.handle(request);
    }
}
