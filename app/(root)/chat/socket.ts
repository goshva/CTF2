'use client';

import { io } from 'socket.io-client';
const baseUrl = process.env.BASE_URL
export const socket = io(`wss://www.ctforumtest.ru`, {
    path: "/v1/socket"
  });