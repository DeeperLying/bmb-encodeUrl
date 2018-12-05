import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerService {

  constructor() { }
  public logger(): any {
    console.log('pppp');
  }
}

