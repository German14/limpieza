import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from "../_service/AuthentificationService";
import {query} from "@angular/animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(  private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private authenticationService : AuthenticationService,
                ) { }


   ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

// for accessing to form fields
  get fval() { return this.loginForm.controls; }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.fval.username.value, this.fval.password.value)
      .subscribe(
        data =>
        {
          this.router.navigate(['/table'], {queryParams: {user: data.username} });
        },
        error => {
          this.router.navigate(['/login']);
          this.loading = false;
        });
  }
}
