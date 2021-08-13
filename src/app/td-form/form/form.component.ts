import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss','../../../customcss/formcss/form.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('f') accountForm:NgForm|any;
  genders:[]|any=['male','female','other'];
  constructor() { }

  ngOnInit(): void {
  }
  onSuggestUsername(){
    const username= 'superuser';
    // this.accountForm.setValue({
    //   UserName:{
    //     Fname:'',
    //     Mname:'',
    //     Lname:''
    //   },
    //   userAccountInfo:{
    //     userid:username,
    //   },
    //   userDetail:{
    //     email:'',
    //     gender:'male'
    //   }
    // });
    this.accountForm.form.patchValue({
      userAccountInfo:{
        userid:username,
      }
    });
  }
  onSubmit(){
    console.log(this.accountForm);
  }
}
