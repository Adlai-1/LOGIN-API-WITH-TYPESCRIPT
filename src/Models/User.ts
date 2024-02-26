import mongoose, { Schema, model } from "mongoose";
import argon2 from "argon2";

interface User {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Using the pre hook to hash passwords before saving...
userSchema.pre("save", async function(next) {
  const user = this as mongoose.Document & User;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    // Hash the password using argon2
    const hashedPassword = await argon2.hash(user.password);
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next();
  }
});

// Export model
export const UserModel = model<User>("User", userSchema);
