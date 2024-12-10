import { Component, inject, OnInit } from '@angular/core';
import { GitHubApiService } from '../github-api.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient  } from '@angular/common/http';
import { User } from '../models/user-interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
  userData:User | undefined

 constructor(private gitHubApiService: GitHubApiService, private httpClient: HttpClient) { }

ngOnInit(): void {
    this.fetchUserData()
  
}

fetchUserData(): void {
  this.gitHubApiService.getUser('Sherin-Susan-Thomas').subscribe({
    next: (userData: User) => { 
      this.userData = userData;
    },
    error: (err) => {
      console.error('Error fetching user data: ', err);
    }
  });
}



}


