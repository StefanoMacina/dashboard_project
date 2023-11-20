import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isLoggedinGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).canActivate();
};
