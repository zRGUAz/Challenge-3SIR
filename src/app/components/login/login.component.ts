import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  export class LoginComponent {
  
    username: string = '';
    password: string = '';
    loginError: boolean = false;
  
    constructor(private loginService: LoginService, private router: Router) {}
  
    onSubmit() {
      if (this.loginService.login(this.username, this.password)) {
        // Se o login for bem-sucedido, redireciona para o dashboard
        this.router.navigate(['/homepage']);
      } else {
        // Se falhar, exibe uma mensagem de erro
        this.loginError = true;
      }
    }
  }