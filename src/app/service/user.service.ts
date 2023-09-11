import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {AccountType, CustomHttpResponse, Profile} from "../interface/appstates";
import {JwtHelperService} from "@auth0/angular-jwt";
import {User} from "../interface/user";
import {Key} from "../enum/key.enum";
import {RoleType} from "../enum/roletype.enum";

@Injectable()
export class UserService {

  private readonly server: string = 'http://localhost:8080';
  private jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient) {
  }

  login$ = (email: string, password: string) => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.post<CustomHttpResponse<Profile>>
    (`${this.server}/user/login`, {email, password})
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );
  save$ = (user:User) => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.post<CustomHttpResponse<Profile>>
    (`${this.server}/user/register`, user)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  requestPasswordReset$ = (email:string) => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.get<CustomHttpResponse<Profile>>
    (`${this.server}/user/resetpassword/${email}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  verifyCode$ = (email: string, code: string) => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.post<CustomHttpResponse<Profile>>(`${this.server}/user/verify/code`, {email, code})
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  verify$ = (key: string, type: AccountType) => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.get<CustomHttpResponse<Profile>>(`${this.server}/user/verify/${type}/${key}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  renewPassword$ = (form: { userId:number,password:string,confirmPassword:string }) => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.patch<CustomHttpResponse<Profile>>(`${this.server}/user/new/password`,form)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );


  profile$ = () => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.get<CustomHttpResponse<Profile>>(`${this.server}/user/profile`)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  update$ = (user: User) => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.put<CustomHttpResponse<Profile>>(`${this.server}/user/update`, {user},)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  refreshToken$ = () => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.get<CustomHttpResponse<Profile>>(`${this.server}/user/refresh/token`,
      {headers: {Authorization: `Bearer ${localStorage.getItem(Key.REFRESH_TOKEN)}`}})
      .pipe(
        tap(response => {
          localStorage.removeItem(Key.TOKEN);
          localStorage.removeItem(Key.REFRESH_TOKEN);
          localStorage.setItem(Key.TOKEN, response.data.access_token);
          localStorage.setItem(Key.REFRESH_TOKEN, response.data.refresh_token);
        }),
        catchError(this.handleError)
      );

  updatePassword$ = (form: {
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string
  }) => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.patch<CustomHttpResponse<Profile>>
    (`${this.server}/user/update/password`, form)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  updateRole$ = (roleType: RoleType) => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.patch<CustomHttpResponse<Profile>>
    (`${this.server}/user/update/role/${roleType}`, {})
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  updateAccountSettings$ = (settings: {
    enabled: boolean,
    notLocked: boolean
  }) => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.patch<CustomHttpResponse<Profile>>
    (`${this.server}/user/update/settings`, settings)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  toggleMfa$ = () => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.patch<CustomHttpResponse<Profile>>
    (`${this.server}/user/toggleMfa`, {})
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  updateImage$ = (formData: FormData) => <Observable<CustomHttpResponse<Profile>>>
    this.httpClient.patch<CustomHttpResponse<Profile>>
    (`${this.server}/user/update/image`, formData)
      .pipe(
        tap(console.log),
        catchError(this.handleError)
      );

  isAuthenticated = (): boolean => this.jwtHelper.decodeToken<string>(localStorage.getItem(Key.TOKEN)) && !this.jwtHelper.isTokenExpired(localStorage.getItem(Key.TOKEN)) ? true : false;

  handleError(error: HttpErrorResponse): Observable<never> {

    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `A client error occurred - ${error.error.message}`;
    } else {
      if (error.error.reason) {
        errorMessage = error.error.reason;
      } else {
        errorMessage = `An error occurred - Error status ${error.status}`;
      }
    }
    return throwError(errorMessage);
  }

  logOut() {
    localStorage.removeItem(Key.TOKEN);
  }
}
