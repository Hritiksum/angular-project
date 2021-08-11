import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss','../../../customcss/formcss/form.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('f') accountForm:NgForm|any;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.accountForm);
  }
}
