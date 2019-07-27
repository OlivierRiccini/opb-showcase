import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnInit() {
    this.createForm();
  }

  public onSubmit(): void {
    console.log(this.form.value);
    this.form.reset();
  }

  private createForm(): void {
    this.form = this.fb.group({
      email:  ['', Validators.required],
      phone:  ['', null],
      message: ['', Validators.required]
    });
  }

}
