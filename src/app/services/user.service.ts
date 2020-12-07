import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { environment } from '../../../src/environments/environment';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class UserService {
    private status='';
    private userUrl = `${environment.url}api/user`;
    
    constructor(private http: HttpClient) { }
    postData(user: any) {
        const body = {
            name: user.name,
            username: user.username,
            email: user.email,
            password: user.password,
            foto_path: user.foto_path,
            role: user.role,
            block: user.block,
            user_description: user.user_description,
            publish_count: user.publish_count,
             create: user.createdAt,
             update: user.updatedAt};

        return this.http.post(environment.url, body);
    }
  

    deleteUser(id: number) {
        return this.http.delete(this.userUrl + '/' + id);
    }
    
    createUser(user: any) {
        return this.http.post(this.userUrl, user, httpOptions).pipe(map(data => data));
    }

    editUser(id: number, user?: any){
       return this.http.put(this.userUrl + '/edit/' + id,user);
    }

    

}
