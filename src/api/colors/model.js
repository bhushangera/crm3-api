import mongoose, { Schema } from "mongoose";

const colorsSchema = new Schema(
  {
    code: {
      type: String,
    },
    background: {
      type: String,
    },
    foreground: {
      type: String,
    },
    fh: { type: Number },
    fs: { type: Number },
    fl: { type: Number },
    fa: { type: Number },
    bh: { type: Number },
    bs: { type: Number },
    bl: { type: Number },
    ba: { type: Number },
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

colorsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      background: this.background,
      foreground: this.foreground,
      fh: this.fh,
      fs: this.fs,
      fl: this.fl,
      fa: this.fa,
      bh: this.bh,
      bs: this.bs,
      bl: this.bl,
      ba: this.ba,
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

const model = mongoose.model("Colors", colorsSchema);

export const schema = model.schema;
export default model;
