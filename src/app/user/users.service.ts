import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  userActivated = new Subject();
}
