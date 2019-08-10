import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { IEmail } from 'src/app/models/email.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  public ngOnInit() {
    this.createForm();
  }

  public onSubmit(): void {
    const email: IEmail = {
      from: 'olivier-webdev@hotmail.com',
      to: 'olivier-webdev@hotmail.com',
      subject: 'Email from OPB website',
      content: `Phone number: ${this.form.value.phone}, ${this.form.value.message}`
    };
    console.log(email);
    this.messageService.sendEmail(email).subscribe(() => {
      console.log('Message sent!');
      this.form.reset();
    });
  }

  private createForm(): void {
    this.form = this.fb.group({
      email:  ['', Validators.required],
      phone:  ['', null],
      message: ['', Validators.required]
    });
  }

}
