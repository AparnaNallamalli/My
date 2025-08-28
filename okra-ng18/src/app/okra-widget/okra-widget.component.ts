import { Component } from '@angular/core';
import { OkraService } from '../services/okra.service';

@Component({
  selector: 'app-okra-widget',
  template: `
    <button (click)="open()">Connect with Okra</button>
  `,
  styles: ``
})
export class OkraWidgetComponent {
  constructor(private okra: OkraService) {}

  open() {
    const options: any = {
      key: 'YOUR_PUBLIC_KEY',
      token: 'YOUR_TOKEN',
      env: 'sandbox',
      products: ['auth', 'balance', 'identity', 'transactions'],
      onSuccess: (data: any) => {
        console.log('Okra success', data);
      },
      onClose: () => {
        console.log('Okra closed');
      },
      callback: (response: any) => {
        console.log('Okra callback', response);
      }
    };

    this.okra.openWidget(options).catch((err) => {
      console.error(err);
    });
  }
}
