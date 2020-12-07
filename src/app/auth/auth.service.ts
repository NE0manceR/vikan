import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { TokenStorageService } from './token-storage.service';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = `${environment.url}api/auth/signin`;
  private signupUrl = `${environment.url}api/auth/signup`;

  constructor(
    private http: HttpClient,
    private storage: TokenStorageService,
  ) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions).pipe(map((res: any) => {
      console.log(res)
      if (res.auth) {
        this.storage.saveToken(res.accessToken);
      }
      return res;
    }), catchError((err) => {
     // this.openErrorInAuth(err.status);
      return throwError(err)
    }))
  }

  signUp(info: SignUpInfo): Observable<any> {
    return this.http.post<any>(this.signupUrl, info, httpOptions).pipe(map(res => {
      // if (res.message === "Registered successfully!") {
      //   // this.createUserComet(user);
      // }
      return res;
    }), catchError((err) => {
      //this.openErrorInAuth(err.status, err.error);
      return throwError(err)
    }));
  }

  // openErrorInAuth(status, error?) {
  //   if (status == 404) {
  //     this._snackBar.open('Невірний логін', 'Х', {
  //       // duration: 1000,
  //       horizontalPosition: 'center',
  //       verticalPosition: 'top',
  //     });
  //   }
  //   if (status == 401) {
  //     this._snackBar.open('Невірний пароль', 'Х', {
  //       // duration: 1000,
  //       horizontalPosition: 'center',
  //       verticalPosition: 'top',

  //     });
  //   }
  //   if (status == 400) {
  //     if (error === "Fail -> Username is already taken!") {
  //       this._snackBar.open('Користувач з таким логіном вже існує', 'Х', {
  //         // duration: 1000,
  //         horizontalPosition: 'center',
  //         verticalPosition: 'top',
  //       });
  //     }
  //     if (error === "Fail -> Email is already in use!") {
  //       this._snackBar.open('Електронна адреса вже використовується', 'Х', {
  //         // duration: 1000,
  //         horizontalPosition: 'center',
  //         verticalPosition: 'top',
  //       });
  //     }
  //   }
  // }
}
