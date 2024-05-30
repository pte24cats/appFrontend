import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from '../app/sign-in/sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) {}

  openSignInModal() {
    this.modalService.open(SignInComponent, { backdrop: 'static', keyboard: false });
  }
}
