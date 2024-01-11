import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import {error} from "@angular/compiler-cli/src/transformers/util";
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements  OnInit{

  contactForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router){}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      messageBody: ['', Validators.required]

    })
  }


  onSubmit() {

    if (this.contactForm.valid) {

      // send the message to my email
      emailjs.send("service_5490mdh","template_id",{
        from_name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.messageBody,
      }, "warfqILLgasRfl_Ii").then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        // @ts-ignore
        document.getElementById("contactForm").style.display = 'none'; // hide contact form
        // @ts-ignore
        document.getElementById("confirmationMessage").style.display = 'block'; // Show confirmation message

        // reload the page after sleep
        setTimeout(() => {
          location.reload()
        }, 5000); },
        // if message delivery failed
        function(error){
        console.log("FAILED!", error);
        alert("Message Delivery Failed. Please retry.");
      });
    }
    else{
      // @ts-ignore
      document.getElementById("invalidInputMessage").style.display = 'inline'; // Show Invalid input message
    }
  }

}
