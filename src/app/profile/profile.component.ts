import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  followers: any[] = [];
  searchedhUser: string;
  url: string;

  searchUser(user: HTMLInputElement) {
    this.searchedhUser = user.value;
    this.url = 'https://api.github.com/users/' + this.searchedhUser;
    this.http.get(this.url)
      .subscribe(followers => this.followers = followers.json());

  }

  constructor(private http: Http) {
  }

  

  ngOnInit() {
  }

}
