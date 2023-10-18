import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildingDataService {

  constructor(private http: HttpClient) { }

  getBuilding() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMjY2ZDFlMC1lNWFmLTQ3NGQtYjYzYi1hZGNhZmFiY2ZhMWUiLCJlbWFpbCI6InZvZGluaHF1eWVuMTEyQGdtYWlsLmNvbSIsImlkIjoiZDEzYjNiZGEtMmNlNC00NTVmLTk5ZGMtY2ZmYzdlZjA5ZjgwIiwicm9sZXMiOiJBZG1pbiIsImV4cCI6MTY5NzAyMTg0OCwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzIyMCIsImF1ZCI6IlVzZXIifQ.p6KAoEZdjPk2YIAR6r5cmi5344MVNB_8-ZmJFmPITIw`
    })
    return this.http.get('https://13.212.24.193/api/v1/building', { headers: headers })
  }
}