import { Component, OnInit } from '@angular/core';
import { Animation, createAnimation } from '@ionic/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';


  constructor() { }

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

  ngOnInit() {
  }
  

}
