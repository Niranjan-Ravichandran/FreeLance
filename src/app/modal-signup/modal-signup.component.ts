import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-signup',
  templateUrl: './modal-signup.component.html',
  styleUrls: ['./modal-signup.component.css']
})
export class ModalSignupComponent implements OnInit {
  @Input() public user: User ;
  name: string ;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal , private modalService: NgbModal,
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.user);
    if ( this.user === undefined) {
      this.user = new User();
    }
  }
  passBack() {
   // this.passEntry.emit(this.user);
   sessionStorage.setItem('userName', this.user.name);
   sessionStorage.setItem('passWord' , this.user.password);
   this.activeModal.close(this.user);
  }

}
