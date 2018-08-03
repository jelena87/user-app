import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';

export interface Users {
  userId: string;
  email: string;
  password: string;
}

const ELEMENT_DATA: Users[] = [
  {userId: '1', email: 'john.doe@test.com', password: 'john'},
  {userId: '2', email: 'jane.doe@test.com', password: 'jane'},
  {userId: '3', email: 'lili.doe@test.com', password: 'lili'}
];

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'email', 'password'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {

  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
