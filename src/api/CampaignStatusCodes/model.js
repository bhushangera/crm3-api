import mongoose, { Schema } from "mongoose";

const campaignStatusCodesSchema = new Schema(
  {
    code: { type: String },
    description: { type: String },
    sortOrder: { type: Number },
    icon: { type: String },
    colorId: { type: String },
    background: { type: String },
    foreground: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      },
    },
  }
);

campaignStatusCodesSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      sortOrder: this.sortOrder,
      icon: this.icon,
      colorId: this.colorId,
      background: this.background,
      foreground: this.foreground,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view;
  },
};

const model = mongoose.model("CampaignStatusCodes", campaignStatusCodesSchema);

export const schema = model.schema;
export default model;
