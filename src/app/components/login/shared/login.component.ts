import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  loginForm!: FormGroup;
  emailFailed = false;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }
  get password() {
    return this.loginForm.get('password')!;
  }

  login() {
    this.emailFailed = false;
    if (this.loginForm.invalid) {
      return;
    }
    const user: User = this.loginForm.value;
    this.userService.login(user).subscribe(
      (response) => {
        console.log(response.status);
        if (response.ok && response.status === 200) {
          const token = JSON.parse(JSON.stringify(response.body!)).token;
          localStorage.setItem('token', token);
          this.router.navigateByUrl('/home', {});
        } else if (response.status === 204) {
        } else {
          console.log('aqui');
        }
      },
      () => {
        this.emailFailed = true;
      },
    );
  }
}

//localStorage.setItem('token', response.body?["token"]);
