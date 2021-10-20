import { Component, OnInit } from '@angular/core';

let api;

const initIframeAPI = () => {
  const domain = '8x8.vc';
  const options = {
    roomName: 'vpaas-magic-cookie-4134225d6eb9491ead4bf5cf9c3fccbd/ExampleRoom',
    jwt: '',
    width: 800,
    height: 750,
    parentNode: document.querySelector('#meet'),
  };
  /* @ts-ignore */
  api = new JitsiMeetExternalAPI(domain, options);
};

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss'],
})
export class CallComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    initIframeAPI();
  }
}
