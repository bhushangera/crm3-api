import mongoose, { Schema } from "mongoose";

const bannerSchema = new Schema(
  {
    image: { type: String, trim: true },
    title: { type: String, trim: true },
    text1: { type: String, trim: true },
    text2: { type: String, trim: true },
    btnText: { type: String, trim: true },
    pageCode: { type: String, trim: true },
    btnLink: { type: String, trim: true },
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

bannerSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      image: this.image,
      title: this.title,
      text1: this.text1,
      text2: this.text2,
      btnText: this.btnText,
      pageCode: this.pageCode,
      btnLink: this.btnLink,
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

const model = mongoose.model("Banner", bannerSchema);

export const schema = model.schema;
export default model;
