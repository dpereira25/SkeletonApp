import { Component } from '@angular/core';
import { Animation, createAnimation } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  ngAfterViewInit() {
    this.moveTitleAnimation(); // Llamada a la función al cargar la vista
  }

  moveTitleAnimation() {
    const titleElement = document.querySelector('.ion-tittle') as HTMLElement;

    const animation = createAnimation()
      .addElement(titleElement)
      .duration(2500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(-400px)', 'translateX(400px)')
      .fromTo('opacity','1','0.2');
    animation.play();
  }
}
