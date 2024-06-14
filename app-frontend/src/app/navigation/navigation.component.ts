import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ 
    NgbModule,
    RouterModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  collapsed = true;
  
  constructor(private modalService: ModalService) {}

  openSignInModal() {
    this.modalService.openSignInModal();
  }

}

