import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { UserService } from '../../services/user.services';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public userId;

  public user;

  public userAccounts;

  constructor(private router: ActivatedRoute, private userService: UserService, private accountService: AccountService) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params.id;
    if (id !== null && id !== undefined) {
      this.userId = id;
    }

    this.userService.getUser(this.userId).then(
      (user) => { this.user = user; console.log(user)}
    );

    this.accountService.getAccount(this.userId).then(
      (contas) => { this.userAccounts = contas[0]; console.log(contas)}
    );
  }

}
