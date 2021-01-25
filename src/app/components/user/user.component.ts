import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
user: User;
@Output()
  bubleUpUser = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getUser(user: User): void{
    this.bubleUpUser.emit(user);
  }

}
