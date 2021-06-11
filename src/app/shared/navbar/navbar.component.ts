import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers:[AuthService]
})
export class NavbarComponent {
  public isLogged = false;
  public user:any;
  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService, private router: Router) { }


  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/home'])
    }
    catch(error){
      console.log(error);
    }
  }
}
