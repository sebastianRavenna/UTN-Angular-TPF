import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)] ],

      email: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]], 
      
      message: ['', [Validators.required, Validators.minLength(3)]]
    })

  }
  onSubmit() {
    console.log(this.contactForm.value)
  }
}
