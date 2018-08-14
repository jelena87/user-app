import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TableDataSource, ValidatorService } from 'angular4-material-table';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  displayedColumns = ['select', 'userId', 'email', 'password', 'status'];
    data = Object.assign(values);

    dataSource = new MatTableDataSource<Element>(this.data);
    selection = new SelectionModel<Element>(true, []);

    selectedRows = [];
    selectedRowsChecked = [];

    @ViewChild('paginator') paginator: MatPaginator;

    ngOnInit() {

    }
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }

    removeSelectedRows() {
      if(window.confirm('Are sure you want to delete this item ?')) {
        this.selection.selected.forEach(item => {
          let index: number = this.data.findIndex(d => d === item);
          if (index > -1) {
            this.data.splice(index, 1);
          }
        });
        this.selection = new SelectionModel<Element>(true, []);
        this.dataSource = new MatTableDataSource<Element>(this.data);
        this.dataSource.paginator = this.paginator;
      }

    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
      console.log(this.data);
    }

    disableUser() {
      console.log('User is Disabled!');
    }


  }

  export interface Element {
    userId: string;
    email: string;
    password: string;
    status: string;
  }

  const values: Element[] = [
    {userId: '1', email: 'john.doe@test.com', password: 'john', status: 'Disabled'},
    {userId: '2', email: 'jane.doe@test.com', password: 'jane', status: 'Enabled'},
    {userId: '3', email: 'lili.doe@test.com', password: 'lili', status: 'Enabled'}
  ];
