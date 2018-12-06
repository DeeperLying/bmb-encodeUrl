import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { catchError, retry, tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})

export class ServerService {
  constructor(
    private http: HttpClient
  ) {}

  private handleError() {
    console.log('错误处理');
    const error = {
      messages: 'cuowu'
    };
    return error.toString();
  }

  public getConfig() {
    return this.http.get('http://test.api.snsports.cn/api/content/phone/GetBMMatchListByAreaId.json?pageNum=1&status=3&device=phone&appVersion=3.0.5').pipe(
      retry(3),
      tap(
        data => console.log(data),
        error => console.log(error)
      ),
    );
  }
}


