import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  let token = localStorage.getItem('token');
  console.log('token', token)
  if(token) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
