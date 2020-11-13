import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-saldo-page',
  templateUrl: './saldo-page.component.html',
  styleUrls: ['./saldo-page.component.css']
})
export class SaldoPageComponent implements OnInit {

  public showPassword = false;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  seePassword() {
    this.showPassword = !this.showPassword;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
