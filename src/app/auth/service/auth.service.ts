import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth,
    public ngFireAuth: AngularFireAuth,
    public router: Router
  ){ }

  async sendVerificationEmail() {
    return this.afAuth.currentUser.then((user) => {
      return user.sendEmailVerification();
    }).then(() => {
      this.router.navigate(['verification-email']);
    })
  }

  async login(email:string, password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch(error){
      console.log(error);
    }
  }

  async register(email:string, password:string){
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.sendVerificationEmail();
    }
    catch(error){
      console.log(error);
    }
  }

  async logout(){
    try{
      await this.afAuth.signOut();
    }
    catch(error){
      console.log(error);
    }
  }
}
