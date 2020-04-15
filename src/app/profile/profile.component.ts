import { Component, OnInit } from '@angular/core';
import { Profile } from './Profile';
import { User } from '../user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSignupComponent } from '../modal-signup/modal-signup.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  user: User;
  name: string;
  submit : boolean;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.profile = new Profile();
    this.profile.id = 101 ;
    this.profile.name = 'Niranjan Ravichandran';
    this.profile.title = 'Java Full Stack Developer';
    this.profile.location = 'Chennai , Tamil Nadu , India';
    // tslint:disable-next-line:max-line-length
    this.profile.about = 'Experienced System Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Java (Programming Language), Spring boot, Angular 6,Oracle Database, Java Server Page, JavaScript, Bootstrap with additional interest in Adobe Premiere Pro, and Android Studio. Strong information technology professional graduated from Jeppiaar Engineering College';
    this.profile.skills = ['Java 8 ', ' Python ', ' Spring 5 ' , ' Spring Microservices' , ' Hibernate'];
    this.user = new User();
    this.user.name = 'Niranjan';
    this.user.email = 'abc@gmail.com';
    this.user.password = 'XYZ@123';
  }
  openModal() {
    const modalRef = this.modalService.open(ModalSignupComponent);
    modalRef.componentInstance.user = this.user;
    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    //   });
    modalRef.result.then((result) => {
        if (result) {
        console.log(result);
        }
        });
    }
    onSubmit(){

      this.submit = false;
    }
}
