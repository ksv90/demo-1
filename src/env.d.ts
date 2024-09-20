/* eslint-disable @typescript-eslint/naming-convention */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'production' | 'development' | 'staging' | 'testing';
      PORT: string;
      BOT_TOKEN: string;
    }
  }
}

export {};
