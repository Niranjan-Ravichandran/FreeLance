import { Component, OnInit } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import { JobsService } from './jobs.service';
import { Jobs } from './jobs';
import { User } from './user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSignupComponent } from './modal-signup/modal-signup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isUserLoggedIn: boolean;
  user: User;
  profile: string ;
  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
    this.isUserLoggedIn = false;
    this.profile = 'Profile';
  }
  openModal() {
    const modalRef = this.modalService.open(ModalSignupComponent);
    modalRef.componentInstance.user = this.user;
    modalRef.result.then((result) => {
        if (result) {
          this.profile = result.email;
        }
        });
    this.isUserLoggedIn = true;
    }
    onSignOut() {
      this.profile = 'Profile';
      this.isUserLoggedIn = false;
    }

}
