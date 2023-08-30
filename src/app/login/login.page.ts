import { Component, OnInit } from '@angular/core';
import { Animation, createAnimation } from '@ionic/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';


  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  clearAnimation() {
    const inputElement = document.querySelector('ion-input') as HTMLElement;
    const inputElement2 = document.querySelector('.ion-input') as HTMLElement;
    const animation = createAnimation()
      .addElement(inputElement)
      .addElement(inputElement2)
      .duration(2500)
      .iterations(1)
      .fromTo('transform', 'translateX(-20px)', 'translateX(300px)')
      .fromTo('opacity', '1', '0.0');
    animation.play();
    username:  '';
    password:  '';
  }

  limpiar(){
    this.username = '';
    this.password = '';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Username or password incorrect.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  validacionLogin(){
    if (this.username == 'usuario' && this.password == '1234'){
      this.router.navigate(['/login'])
    }else{
      
    }
  }

  ngOnInit() {
  }
  

}
