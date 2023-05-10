import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
  constructor(private studentsService: StudentsService){}

  students: Students[] = [];

  ngOnInit(): void  {
    this.getAll();
  }

  private getAll() {
    this.studentsService.get().subscribe((data)=>{
      this.students = data;
    })
  }
}
