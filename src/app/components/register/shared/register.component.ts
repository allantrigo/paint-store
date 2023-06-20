import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){0,})(?=(.*[!@# $%^&*()-__+.]){1,}).{8,32}$',
        ),
      ]),
    });
  }

  get username() {
    return this.registerForm.get('username')!;
  }
  get email() {
    return this.registerForm.get('email')!;
  }
  get password() {
    return this.registerForm.get('password')!;
  }

  submit() {
    if (this.registerForm.invalid) {
      return;
    }
    const user: User = this.registerForm.value;
    this.userService.register(user).subscribe((user) => {
      Swal.fire(
        'Sucesso!',
        'Seu registro foi realizado com sucesso!',
        'success',
      ).then(() => {
        this.router.navigateByUrl('/login');
      });
    });
  }
}
