import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
})
export class TestingComponent {
  message: string = '';

  io = io('http://localhost:3000', {
    withCredentials: true,
    autoConnect: true,
  });

  constructor() {
    this.io.emit('event', { text: 'Hola mundo esto se conecto al fin' });
    this.io.on('event', ({ servidor }) => {
      console.log(servidor);
    });
  }

  send() {
    this.io.emit('event', { text: this.message });
    console.log(this.message);
  }
}
