import { CapacitorConfig } from '@capacitor/cli';
import { Server } from 'http';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'todoAppIonic',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    "androidScheme": "http",
    "allowNavigation": [
      'https://d245-190-120-248-136.ngrok-free.app/todo_tasks'
    ]
  }
  
};


export default config;
