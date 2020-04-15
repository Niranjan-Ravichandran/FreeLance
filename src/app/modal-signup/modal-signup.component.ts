import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-signup',
  templateUrl: './modal-signup.component.html',
  styleUrls: ['./modal-signup.component.css']
})
export class ModalSignupComponent implements OnInit {
  @Input() public user: User ;
  name: string ;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.user);
    if ( this.user === undefined) {
      this.user = new User();
    }
  }
  passBack() {
   // this.passEntry.emit(this.user);
   this.activeModal.close(this.user);
  }
}
