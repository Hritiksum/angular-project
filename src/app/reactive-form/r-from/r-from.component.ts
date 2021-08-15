import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-from',
  templateUrl: './r-from.component.html',
  styleUrls: ['./r-from.component.scss']
})
export class RFormComponent implements OnInit {
  genders:[]|any=['male','female','other'];
  Rform: FormGroup|any;
  constructor() { }

  ngOnInit(): void {
    this.Rform = new FormGroup({
      'username': new FormGroup({
        'userfname': new FormControl(null,Validators.required),
        'usermname': new FormControl(null),
        'userlname': new FormControl(null,Validators.required),
      }),
      'userid': new FormControl(null,Validators.required),
      'useremail': new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('male',Validators.required)
    });
  }
  onSubmit(){
    console.log(this.Rform);
  }

}
