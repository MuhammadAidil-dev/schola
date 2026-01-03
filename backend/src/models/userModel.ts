import { model, Schema } from 'mongoose';
import { IUserDocument } from '../types/user/userType';
import { hashPassword } from '../utils/bcrypt';

const UserSchema = new Schema<IUserDocument>({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Email tidak valid'],
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await hashPassword(this.password);

  next();
});

UserSchema.set('toJSON', {
  transform(_, ret) {
    const obj = ret as any;
    delete obj.password;
    return obj;
  },
});

const User = model<IUserDocument>('User', UserSchema);
export default User;
