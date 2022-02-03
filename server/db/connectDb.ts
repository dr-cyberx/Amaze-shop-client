import { connect } from 'mongoose';

const connectDB = (uri: string): Promise<unknown> => new Promise((resolve, reject) => {
  connect(uri)
    .then(() => {
      resolve('connect to DB');
    })
    .catch((err: any) => {
      reject(err);
    });
});

export default connectDB;
