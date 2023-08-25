import { Component, OnInit } from '@angular/core';
import { AlertController, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-login-exitoso',
  templateUrl: './login-exitoso.page.html',
  styleUrls: ['./login-exitoso.page.scss'],
})
export class LoginExitosoPage implements OnInit {
  firstName: string = '';
  lastName: string = '';
  educationLevel: string = '';
  birthDate: string = '';

  meses: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  constructor(
    private alertController: AlertController,
    private pickerController: PickerController
    ) {}

  clearFields() {
    this.firstName = '';
    this.lastName = '';
    this.educationLevel = '';
    this.birthDate = '';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'System',
      message: this.firstName +' '+  this.lastName + ', your name was added succesfully!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async openDatePicker() {
    const picker = await this.pickerController.create({
      columns: [
        {
          name: 'days',
          options: Array.from({ length: 31 }, (_, i) => ({ text: (i + 1).toString(), value: i + 1 }))
        },
        {
          name: 'months',
          options: this.meses.map((months, index) => ({ text: months, value: index + 1 }))
        },
        {
          name: 'years',
          options: Array.from({ length: 2023 - 2000 + 1 }, (_, i) => ({ text: (2000 + i).toString(), value: 2000 + i }))
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Select',
          handler: (value) => {
            const selectedDay = value.days.value;
            const selectedMonth = value.months.value;
            const selectedYear = value.years.value;
            
            // Crear la fecha seleccionada
            const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
            
            // Formatear la fecha en el formato deseado
            const formattedDate = `${selectedDay} de ${this.meses[selectedMonth - 1]} de ${selectedYear}`;
            
            // Mostrar el mensaje con la fecha seleccionada
            this.showSelectedDateMessage(formattedDate);
          }
        }
      ]
    });

    await picker.present();
  }

  async showSelectedDateMessage(date: string) {
    const alert = await this.alertController.create({
      header: 'System',
      message: `You've had selected: ${date}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit(): void {
      
  }
}
