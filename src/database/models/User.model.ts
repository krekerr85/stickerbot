import mongoose from "mongoose";
const { Schema } = mongoose;

const RefSchema = new Schema({
  uid: Number,
  level: Number,
  income: Number,
  date: Date
})

const userSchema = new Schema({
  uid: Number,
    subscribe: Boolean,
    subscribeUntil: Date,
    language: String,
    refBalance: Number,
    refIncome: Number,
    refs: [RefSchema],
    myRef: Number,
    createdAt: Date,
    balance: Number,
    lastActivity: Date,
    lastSentStickerId: String,
    paymentIds: [String],
    selectedPack: String,
    isCreatingPack: Boolean,
    isDeleting: Boolean
});

export const UserModel = mongoose.model("User", userSchema);