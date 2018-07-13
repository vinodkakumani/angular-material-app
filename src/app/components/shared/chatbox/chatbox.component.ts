import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  isOpened: boolean;
  messages = [];
  totalOnline = 0;
  user = 1;

  constructor() { }

  ngOnInit() {
    this.isOpened = false;
  }


  sendMessage(message) {
    if (message) {
      const nd = new Date;
      const data = {
        message,
        userId: this.user,
        time: nd.getHours() + ':' + nd.getMinutes()
      };

      const respData = {
        message,
        userId: 2,
        time: nd.getHours() + ':' + nd.getMinutes()
      };

      this.messages = [...this.messages, data, respData];
    }
  }
}
