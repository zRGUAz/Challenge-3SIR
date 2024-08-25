import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // Simulação de um login bem-sucedido com credenciais fixas
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123') {
      // Armazena no localStorage que o usuário está logado
      localStorage.setItem('loggedIn', 'true');
      return true;
    }
    return false;
  }

  // Logout - Remove o estado de login do localStorage
  logout(): void {
    localStorage.removeItem('loggedIn');
  }

  // Verifica se o usuário está logado
  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
