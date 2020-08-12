import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6LdNI74ZAAAAAP5trJFNAFsN-yhWgYEpn4rJbVLr"></re-captcha>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Matching';
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}
}
