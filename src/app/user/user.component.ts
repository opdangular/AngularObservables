import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        },
        () => {
          // for error handling
        },
        () => {
          // when complete
        }
      );
  }

  onActivated() {
    this.usersService.userActivated.next(this.id);
  }

}
