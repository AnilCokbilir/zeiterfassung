import { Injectable } from '@angular/core';
import { Userdatas } from './mock-userdata';
import { Userdata } from './userdata';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() {

  }
  getUserdata(): Userdata[] {
    return Userdatas;
  }
}
