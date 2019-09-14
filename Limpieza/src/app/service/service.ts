import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


export interface GithubIssue {
  id: number;
  Name: string;
  Phone: string;
  Portal: string;
  Dias: string;
  Observations: string;
}
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}



@Injectable()
export class DataService {

  /** An Table database that the data source uses to retrieve data for the table. */
  public newCoordinateForm = new Subject<any>();
  public newCoordinateForm$=  this.newCoordinateForm.asObservable();


  constructor(private httpClient: HttpClient) {}
  public href;
  public requestUrl;
  public data;

  getRepoIssues(): Observable<any> {
    this.href = 'http://localhost:3000/users';
    this.requestUrl = this.href;
    return this.httpClient.get (this.requestUrl);
  }

  PostRepoIssues(data) {
    this.href = 'http://localhost:3000/users';
    this.requestUrl = this.href;
    if (data.id === undefined) {
      return this.httpClient.post (this.requestUrl, data).subscribe();
    } else {
      this.href = 'http://localhost:3000/users/' + data.id;
      this.requestUrl = this.href;
      return this.httpClient.put (this.requestUrl, data).subscribe();
    }
  }

  DeleteRepoIssues(data) {
    this.href = 'http://localhost:3000/users/' + data.id ;
    this.requestUrl = this.href;
    return this.httpClient.delete (this.requestUrl, data).subscribe();
  }

}


