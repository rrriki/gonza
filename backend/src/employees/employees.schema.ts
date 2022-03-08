import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    salary: { type: Number, required: true },
    department: { type: String, required: true },
  },
  { versionKey: false },
);