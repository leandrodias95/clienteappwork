import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("Authorization")!=null && localStorage.getItem("Authorization")!="" && localStorage.getItem("Authorization")!="null"){
    console.log("Entrou no true");
    return true;
  }
  else{
    let router= new Router();
    console.log("Entrou no false");
    router.navigate(['login']);
    return false;
  }
};


