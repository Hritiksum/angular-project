import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss','../../../customcss/formcss/form.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('f') accountForm:NgForm|any;
  accountFormData:object|any={
    UserName:{
          Fname:'',
          Mname:'',
          Lname:''
        },
    userAccountInfo:{
      userid:'',
    },
    userDetail:{
      email:'',
      gender:''
    }
  };
  accountdatalist:[]|any=[];
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
    // console.log(this.accountForm);
    this.accountFormData.UserName.Fname=this.accountForm.value.UserName.Fname;
    this.accountFormData.UserName.Mname=this.accountForm.value.UserName.Mname;
    this.accountFormData.UserName.Lname=this.accountForm.value.UserName.Lname;
    this.accountFormData.userAccountInfo.userid=this.accountForm.value.userAccountInfo.userid;
    this.accountFormData.userDetail.email=this.accountForm.value.userDetail.email;
    this.accountFormData.userDetail.gender=this.accountForm.value.userDetail.gender;
    // console.log(this.accountFormData);

    this.accountdatalist.push(this.accountFormData);
    this.accountFormData={
    UserName:{
          Fname:'',
          Mname:'',
          Lname:''
        },
        userAccountInfo:{
          userid:'',
        },
        userDetail:{
          email:'',
          gender:''
        }
  };
    // console.log(this.accountFormData);
    // console.log(this.accountdatalist);
    //reset the form
    this.accountForm.reset();
  }
}
