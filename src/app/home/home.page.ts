import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DeviceAccounts } from '@ionic-native/device-accounts/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public alertCtrl: AlertController, private deviceAccounts: DeviceAccounts) {}

  async ionViewDidEnter() {
    this.getPermissionsFromDevice()
  }

  getPermissionsFromDevice() {
    console.log("Executing DeviceAccounts.getPermissions()")
    this.deviceAccounts.getPermissions()
  }

  getAccountsFromDevice() {
    console.log("Executing DeviceAccounts.get()")
    this.deviceAccounts.get()
      .then(accounts => this.showAlert(JSON.stringify(accounts), "Success"))
      .catch(error => this.showAlert(JSON.stringify(error), "Error"))
  }

  async showAlert(content, type) {
    let alert = await this.alertCtrl.create({
      header: type,
      message: content,
      buttons: ['OK']
    });
    return await alert.present();
  }
}
