import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-saldo-page',
  templateUrl: './saldo-page.component.html',
  styleUrls: ['./saldo-page.component.css']
})
export class SaldoPageComponent implements OnInit {

  public showPassword = false;
  public userId: string;
  public userAccounts = [];

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private accountService: AccountService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params.id;
    if (id !== null && id !== undefined) {
      this.userId = id;
    }

    this.accountService.getAccount(this.userId).then(
      (contas) => { this.userAccounts = contas; }
    );
  }

  seePassword() {
    this.showPassword = !this.showPassword;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
