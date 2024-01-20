const mongoose = require('mongoose');

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("=> Using existing connection.");
      return;
    }
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/nextBlog');
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    
  }
};
