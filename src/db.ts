import mongoose from "mongoose";

const conectDataBase = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://root:root@todo-app.w2qau6x.mongodb.net/?retryWrites=true&w=majority&appName=todo-app"
    );
    if (connection) {
      console.log(" Connected to DB")
    }
  } catch (error) {
    console.log("error in database connection", error);
    throw error;
  }
};

export default conectDataBase;
