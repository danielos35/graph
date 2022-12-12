import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketsService {
  io = io('http://localhost:3000/', {
    withCredentials: true,
    autoConnect: true,
  });

  constructor() {}

  listen() {
    this.io.on('event', ({ servidor }) => {
      console.log(servidor);
    });
  }

  emit() {
    this.io.emit('event', { text: 'test' });
  }
}
