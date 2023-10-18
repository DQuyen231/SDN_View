import { Token } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


export class AuthGuardService implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem('token')) {
            return true;
        } else {
            window.location.href = '';
            return false
        }
    }
}