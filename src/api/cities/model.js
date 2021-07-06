import mongoose, { Schema } from "mongoose";

const citiesSchema = new Schema(
  {
    name: { type: String },
    state_id: { type: String },
    state_code: { type: String },
    country_id: { type: String },
    country_code: { type: String },
    longitude: { type: String },
    latitude: { type: String }
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

citiesSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      state_id: this.state_id,
      state_code: this.state_code,
      country_id: this.country_id,
      country_code: this.country_code,
      longitude: this.longitude,
      latitude: this.latitude,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };

    return full
      ? {
          ...view,
          // add properties for a full view
        }
      : view;
  },
};

const model = mongoose.model("Cities", citiesSchema);

export const schema = model.schema;
export default model;
