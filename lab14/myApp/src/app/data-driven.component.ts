import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MyCustomHttpService } from './my-custom-http.service';

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html',
  styles: []
})
export class DataDrivenComponent{

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpService: MyCustomHttpService, private router: Router) {
    this.myForm = formBuilder.group({
      'name': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'post': ['', [Validators.required, this.exampleValidator]]
    });
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.length < 10) {
      return {'example': true};
    }
    return null;
  }

  getData() {
    this.httpService.getUserData().subscribe(
      res => {
        this.myForm.controls['name'].setValue(res['name']);
        this.myForm.controls['email'].setValue(res['email']);
      },
      error => console.error(error),
      () => console.log('Operation completed')
    );

    this.httpService.getPost().subscribe(
      res => {
        this.myForm.controls['post'].setValue(res[0]['body']);
      },
      error => console.error(error),
      () => console.log('Operation completed')
    );
  }

  onSubmit() {
    console.log(this.myForm);
    this.router.navigateByUrl('/thankyou');
  }

}
