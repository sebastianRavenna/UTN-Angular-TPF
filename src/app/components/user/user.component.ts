import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  nombrePersona: FormGroup 
  nombreMostrado = '';
  mostrarFormulario = true;
  
  constructor(private fb: FormBuilder) {
    this.nombrePersona = this.fb.group({
    name: [''],   
  })

}
onSubmit() {
  let userName = (this.nombrePersona.get('name')?.value)
  this.nombreMostrado = userName;
  this.mostrarFormulario = false;
}
}

