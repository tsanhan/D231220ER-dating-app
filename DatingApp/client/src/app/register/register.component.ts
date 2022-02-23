import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter<boolean>();
  registerForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.initializeForm();
  }
  register() {
    // this.accountService.register(this.model).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.cancel();
    //   },
    //   error => {
    //     this.toastr.error(error.error)
    //     console.log(error)
    //   }
    // )
    console.log(this.registerForm.value);

  }
  cancel() {
    this.cancelRegister.emit(false);
  }

  initializeForm() {
    this.registerForm = new FormGroup({
      username: new FormControl("Hello", Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, this.matchValues('password')]),
    });

    this.registerForm.get('password')?.valueChanges.subscribe(() => {
      this.registerForm.get('confirmPassword')?.updateValueAndValidity();
    });
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const controlValue = control.value;
      const controlToMatch = (control?.parent as FormGroup)?.controls[matchTo];
      const controlToMatchValue = controlToMatch?.value;
      return controlValue === controlToMatchValue ? null : { isMatching: true };
    }
  }

}


