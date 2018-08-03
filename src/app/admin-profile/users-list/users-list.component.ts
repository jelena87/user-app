import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

export interface Users {
  userId: number;
  email: string;
  password: string;
}

const ELEMENT_DATA: Users[] = [
  {userId: 1, email: 'john.doe@test.com', password: 'john'},
  {userId: 2, email: 'jane.doe@test.com', password: 'jane'},
  {userId: 3, email: 'lili.doe@test.com', password: 'lili'}
];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'email', 'password'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
