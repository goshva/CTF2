'use client';

import { io } from 'socket.io-client';
const baseUrl = process.env.BASE_URL
export const socket = io(`wss://${baseUrl}`, {
    path: "/v1/socket"
  });