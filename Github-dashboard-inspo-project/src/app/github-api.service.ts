import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user-interface';

const API_URL = 'https://api.github.com/';

@Injectable({
  providedIn: 'root'
})


export class GitHubApiService {
  constructor(private http: HttpClient) { }

  getUser(username: string) {
    const headers = new HttpHeaders({ Authorization: `token ${ACCESS_TOKEN}` });
    return this.http.get<User>(`${API_URL}users/${username}`, { headers });
  }

 
  
}