import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    confirmDelete(): void {
      this.dataService.deleteIssue(this.data.id);
    }

    ngOnInit() {}
}
