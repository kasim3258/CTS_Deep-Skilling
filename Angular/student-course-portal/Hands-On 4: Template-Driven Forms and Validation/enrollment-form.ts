import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentForm {

  student = {
    studentName: '',
    studentEmail: '',
    courseId: null,
    preferredSemester: '',
    agreeToTerms: false
  };

  submitted = false;

  onSubmit(form: NgForm): void {

    console.log('Form Value:', form.value);
    console.log('Form Valid:', form.valid);

    if (form.valid) {
      this.submitted = true;
    }

  }

}