import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css'],
  providers: [AuthService]
})
export class SendEmailComponent{

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) { }

  onSendEmail(): void{
    this.authSvc.sendVerificationEmail();
  }
}
