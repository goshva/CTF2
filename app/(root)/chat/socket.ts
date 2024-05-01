'use client';

import { io } from 'socket.io-client';

export const socket = io("wss://countertrade.vit.ooo", {
    path: "/v1/socket"
  });