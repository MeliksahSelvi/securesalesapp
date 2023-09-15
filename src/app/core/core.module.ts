import {NgModule} from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "../interceptor/token.interceptor";
import {CacheInterceptor} from "../interceptor/cache.interceptor";
import {UserService} from "../service/user.service";
import {CustomerService} from "../service/customer.service";
import {HttpcacheService} from "../service/httpcache.service";
import {NotificationService} from "../service/notification.service";

@NgModule({
  providers: [
    UserService,CustomerService,HttpcacheService,NotificationService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true}
  ],
  imports:[HttpClientModule]
})
export class CoreModule {
}
