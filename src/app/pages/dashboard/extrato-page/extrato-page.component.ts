import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-extrato-page',
  templateUrl: './extrato-page.component.html',
  styleUrls: ['./extrato-page.component.css']
})
export class ExtratoPageComponent implements OnInit {

  public userId;
  public bankStatements = [];

  constructor( private accountService: AccountService,  private router: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.router.snapshot.params.id;
    if (id !== null && id !== undefined) {
      this.userId = id;
    }

    this.accountService.getBankStatements(this.userId).then(
      (bankStatements) => { this.bankStatements = bankStatements; }
    );
  }

}
