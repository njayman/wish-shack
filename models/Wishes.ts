import { Schema, model, models } from "mongoose";

const WishSchema = new Schema(
  {
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Wish = models.Wish || model<{ message: string }>("Wish", WishSchema);

export default Wish;
