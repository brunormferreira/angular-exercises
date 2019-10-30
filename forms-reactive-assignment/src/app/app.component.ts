import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName
      ),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
    // this.projectForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }
}
