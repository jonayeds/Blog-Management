/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

let server: Server;
async function main() {
  try {
    await mongoose.connect(config.database_uri as string);
    server = app.listen(config.port, () => {
      console.log(`This app is running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
