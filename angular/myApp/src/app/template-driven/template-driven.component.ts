import { Component } from '@angular/core';

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: [`
    input.ng-invalid {
      border: 1px solid red;
    }
  `]
})
export class TemplateDrivenComponent {
  user = {
    username: 'Asaad',
    email: 'asaad@mum.edu',
    password: 'test',
    gender: 'male'
  };

  genders = [
    'male',
    'female'
  ];

  onSubmit(form) {
    console.log(form.value);
  }

}
