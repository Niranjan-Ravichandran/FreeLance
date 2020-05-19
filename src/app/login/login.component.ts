import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSignupComponent } from '../modal-signup/modal-signup.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder , private router: Router
            , private modalService: NgbModal) { }
  registerForm: FormGroup;
  submitted: boolean;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      passWord: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      subscription: ['', Validators.required],
      role: ['', Validators.required]
    });
  }
  openModal() {
    const modalRef = this.modalService.open(ModalSignupComponent);
    modalRef.result.then((result) => {
        if (result) {
          this.router.navigate(['/dashboard']);
        }
        });
    }
    onSubmit() {
      alert('submitted');
      console.log(this.registerForm);
    }

}
