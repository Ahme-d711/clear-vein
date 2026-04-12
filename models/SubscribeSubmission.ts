import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISubscribeSubmission extends Document {
  fullName: string;
  email: string;
  description: string;
  role: "patient" | "gp" | "hcp";
  createdAt: Date;
  updatedAt: Date;
}

const SubscribeSubmissionSchema = new Schema<ISubscribeSubmission>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    description: { type: String, default: "" },
    role: {
      type: String,
      required: true,
      enum: ["patient", "gp", "hcp"],
    },
  },
  { timestamps: true }
);

SubscribeSubmissionSchema.index({ createdAt: -1 });
SubscribeSubmissionSchema.index({ email: 1 });

const SubscribeSubmission: Model<ISubscribeSubmission> =
  mongoose.models.SubscribeSubmission ||
  mongoose.model<ISubscribeSubmission>(
    "SubscribeSubmission",
    SubscribeSubmissionSchema
  );

export default SubscribeSubmission;
