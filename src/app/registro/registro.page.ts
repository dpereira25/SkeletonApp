import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username: string = '';
  password: string = '';
  confirmPw: string = '';
  email: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router
    ) {}

  ngOnInit() {
  }

  clearFields() {
    this.username = '';
    this.password = '';
    this.confirmPw = '';
    this.email = '';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'System',
      message: 'Successfully registered!',
      buttons: ['OK'],
    });

    await alert.present();
    this.router.navigate(['/login'])
    ;
  }
}
