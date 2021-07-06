import mongoose, { Schema } from "mongoose";
import Make from "../make/model";
import TapeDecor from "../tapeDecor/model";

const shadeSwatchesSchema = new Schema(
  {
    uuid: { type: String, trim: true },
    makeId: { type: String, trim: true },
    makeCode: { type: String, trim: true },
    makeDescription: { type: String, trim: true },
    logo: { type: String, trim: true },
    color: { type: String, trim: true }, //
    code: { type: String, trim: true },
    description: { type: String, trim: true },
    image: { type: String, trim: true },
    slug: { type: String, trim: true },
    isEdgeband: { type: Boolean, default: false },
    matt: { type: Boolean, default: false },
    hgl: { type: Boolean, default: false },
    shgl: { type: Boolean, default: false },
    vnr: { type: Boolean, default: false },
    spl: { type: Boolean, default: false },
    edgeBands: [{
      uuid: { type: String, trim: true },
      makeId: { type: String, trim: true },
      makeCode: { type: String, trim: true },
      code: { type: String, trim: true },
      description: { type: String, trim: true },
      makeDescription: { type: String, trim: true },
      logo: { type: String, trim: true },
      image: { type: String, trim: true },
    }]
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

shadeSwatchesSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      makeId: this.makeId,
      makeCode: this.makeCode,
      makeDescription: this.makeDescription,
      logo: this.logo,
      color: this.color,
      code: this.code,
      description: this.description,
      image: this.image,
      slug: this.slug,
      isEdgeband: this.isEdgeband,
      edgeBands: this.edgeBands,
      matt: this.matt,
      hgl: this.hgl,
      shgl: this.shgl,
      vnr: this.vnr,
      spl: this.spl,
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

const model = mongoose.model("ShadeSwatches", shadeSwatchesSchema);

export const schema = model.schema;
export default model;
