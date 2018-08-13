import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { TableDataSource, ValidatorService } from 'angular4-material-table';

import { TableValidatorService } from './table-validator.service';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  providers: [
    {provide: ValidatorService, useClass: TableValidatorService }
  ],
  styleUrls: ['./admins-list.component.css']
})

export class AdminsListComponent {
  constructor(private personValidator: ValidatorService) { }

    displayedColumns = ['userId', 'email', 'password', 'status', 'actionsColumn'];
    dataSource: TableDataSource<Element>;
    status: Status[] = [
      {value: 'enabled-0', viewValue: 'Disabled'},
    ];

    @Input() values: Element[] = [
      {userId: '1', email: 'john.doe@test.com', password: 'John'},
      {userId: '2', email: 'jane.doe@test.com', password: 'Jane'},
      {userId: '3', email: 'lili.doe@test.com', password: 'Lili'},
      {userId: '2', email: 'jane.doe@test.com', password: 'Jane'},
      {userId: '3', email: 'lili.doe@test.com', password: 'Lili'},
      {userId: '2', email: 'jane.doe@test.com', password: 'Jane'},
      {userId: '3', email: 'lili.doe@test.com', password: 'Lili'}
      ] ;
    @Output() tableChange = new EventEmitter<Element[]>();

    @ViewChild('paginator') paginator: MatPaginator;


    ngOnInit() {
      this.dataSource = new TableDataSource<any>(this.values, Element, this.personValidator);

      this.dataSource.datasourceSubject.subscribe(values => this.tableChange.emit(values));
    }

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

  }

  export interface Element {
    userId: string;
    email: string;
    password: string;
    status: string;
  }

  export interface Status {
    value: string;
    viewValue: string;
  }

  const values: Element[] = [
    {userId: '1', email: 'john.doe@test.com', password: 'john', status: 'Disabled'},
    {userId: '2', email: 'jane.doe@test.com', password: 'jane', status: 'Enabled'},
    {userId: '3', email: 'lili.doe@test.com', password: 'lili', status: 'Enabled'}
  ];
