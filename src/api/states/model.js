import mongoose, { Schema } from "mongoose";

const statesSchema = new Schema(
  {
    state_id: { type: String },
    name: { type: String },
    country_id: { type: String },
    country_code: { type: String },
    state_code: { type: String },
    GSTCode: { type: String },
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

statesSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      state_id: this.state_id,
      name: this.name,
      country_id: this.country_id,
      country_code: this.country_code,
      state_code: this.state_code,
      GSTCode: this.GSTCode,
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

const model = mongoose.model("States", statesSchema);

export const schema = model.schema;
export default model;
