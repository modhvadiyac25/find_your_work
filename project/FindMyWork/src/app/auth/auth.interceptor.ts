import { HttpInterceptor,HttpHandler,HttpRequest,HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';


import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private userservice : UserService,private router:Router){

    }

    intercept(req:HttpRequest<any>,next:HttpHandler){
        if(req.headers.get('noauth')){
            return next.handle(req.clone());
        }
        else{
            const clonedReq = req.clone({
                headers:req.headers.set('Authorization','Bearer ' + this.userservice.getToken())
            });
            return next.handle(clonedReq).pipe(
                tap(
                    event=>{},
                    err=>{
                        if(err.error.auth==false){
                            this.router.navigateByUrl('/login');
                        }
                    }
                )
            );
        }
    }
}
