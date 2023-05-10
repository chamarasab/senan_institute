import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }

  get() {
    return this.http.get<Students[]>("http://localhost:3000/students");
  }
}
