import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';

import { AlertyfyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm:FormGroup;
  user :User;
  userSubmitted :boolean;
  constructor(private fb:FormBuilder ,private userService :UserServiceService ,
   private alertify :AlertyfyService ) { }

  ngOnInit() {
    //this.registrationForm= new FormGroup({
    // userName:new FormControl('Mark',Validators.required),
    // email :new FormControl (null,[Validators.required , Validators.email]),
    // password :new FormControl (null,[Validators.required , Validators.minLength(8)]),
    // confirmPassword :new FormControl (null,[Validators.required ]),
    // mobile :new FormControl (null,[Validators.required, Validators.minLength(11)])
    // } ,this.passwordMatchingValidator);
    //this.registrationForm.controls['userName'].setValue('Default Value');
    this.createRegistrationForm();

  }
  createRegistrationForm()
  {
    this.registrationForm = this.fb.group({
      userName: [null,Validators.required],
      email : [null,[Validators.required , Validators.email]],
      password : [null,[Validators.required , Validators.minLength(8)]],
      confirmPassword :[null,[Validators.required ]],
      mobile : [null,[Validators.required, Validators.minLength(11)]]
    } ,{Validators:this.passwordMatchingValidator})
  }
  passwordMatchingValidator(fg:FormGroup) :Validators
  {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {
      notmactched:true
    }
  }
  //get method for all control
  get userName ()
  {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email ()
  {
    return this.registrationForm.get('email') as FormControl;
  }
  get password ()
  {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword ()
  {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile ()
  {
    return this.registrationForm.get('mobile') as FormControl;
  }
  onReset()
  {

  }
  onSubmit()
  {

    console.log(this.registrationForm.value);
    this.userSubmitted=true;
    if (this.registrationForm.valid)
    {
    //this.user =Object.assign(this.user ,this.registrationForm.value);
     //this.addUser(this.user);
     //this.userService.addUser(this.user);
     this.userService.addUser(this.userData());
     this.registrationForm.reset();
     this.userSubmitted=false;
    this.alertify.success('Congrats, you are successfuly registered');
  }
  else{
    this.alertify.error('Kindly provide required fields');
  }
}
userData () :User{
  return this.user = {
    userName:this.userName.value,
    email:this.email.value,
    password:this.password.value,
    mobile:this.mobile.value

  }
}
  // addUser(user)
  // {
  //   let users=[];
  //   if (localStorage.getItem('Users')){
  //     users = JSON.parse(localStorage.getItem('Users'));
  //     users = [user, ...users]
  //   }
  //   else{
  //     users =[user];
  //   }
  //   localStorage.setItem('Users',JSON.stringify( users));

  // }
}
