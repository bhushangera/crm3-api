import mongoose, { Schema } from "mongoose";

const scaleChartsSchema = new Schema(
  {
    mm: { type: Number, default: 0 },
    cm: { type: Number, default: 0 },
    inch: { type: Number, default: 0 },
    ft: { type: Number, default: 0 },
    m: { type: Number, default: 0 },
    frac: { type: String },
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

scaleChartsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      mm: this.mm,
      cm: this.cm,
      inch: this.inch,
      ft: this.ft,
      m: this.m,
      frac: this.frac,
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

const model = mongoose.model("ScaleCharts", scaleChartsSchema);

export const schema = model.schema;
export default model;
