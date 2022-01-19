import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any = {};
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter<boolean>();

<<<<<<< HEAD
  constructor(private accountService: AccountService,
    private toster: ToastrService
    ) { }
=======
  constructor(
    private accountService: AccountService,
    private toastr: ToastrService) { }
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21

  ngOnInit(): void {

  }
  register(){
    this.accountService.register(this.model).subscribe(
      (data) => {
        console.log(data);
        this.cancel();
      },
      error => {
<<<<<<< HEAD
      this.toster.error(error.error);
      console.log(error);
      }

=======
        this.toastr.error(error.error)
        console.log(error)
      }
>>>>>>> 6c0a1ae2a6009a3100d8c1021599012ab47dab21
    )
  }
  cancel(){
    this.cancelRegister.emit(false);
  }


}
