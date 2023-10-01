
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {}

  // Function to get data from a JSON file
  getData(): Observable<any[]> {
    return this.http.get<any[]>('assets/database.json');
  }
}
