import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { identifierName } from '@angular/compiler';
import { environment } from '../../../environments/environment';
import { Users } from '../../models/admin-models/model.users';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class UserService {
    private status='';
    private userUrl = `${environment.url}api/user`;
    private userTestUrl = `${environment.url}api/test/user`;
   
    private adminUrl = `${environment.url}api/test/admin`;
    constructor(private http: HttpClient) { }
    postData(user: Users) {
        const body = {
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password,
           
            role: user.role,
        
             create: user.createdAt,
             update: user.updatedAt};

        return this.http.post(environment.url, body);
    }
    
    getDataUser(page: number, pageSize: number,status: string,block?: number) {
        const querry = `${this.userUrl + '/pagination'}?page=${page}&pageSize=${pageSize}&status=${status}&block=${block}`;
        return this.http.get(querry).pipe(map(data => data));
    }

    getOne(id: number) {
        return this.http.get(this.userUrl + '/only/' + id);
    }

    getDescriptionById(id: number){
        return this.http.get(this.userUrl + '/description/' + id);
    }

    deleteUser(id: number) {
        return this.http.delete(this.userUrl + '/' + id);
    }
    
    createUser(user: Users) {
        return this.http.post(this.userUrl, user, httpOptions).pipe(map(data => data));
    }

    editUser(id: number, user?: Users){
       return this.http.put(this.userUrl + '/edit/' + id,user);
    }

    getUserBoard(): Observable<any> {
        return this.http.get(this.userTestUrl);
    }
   
    getAdminBoard(): Observable<any> {
        return this.http.get(this.adminUrl);
    }

}
