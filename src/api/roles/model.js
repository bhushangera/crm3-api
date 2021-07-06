import mongoose, { Schema } from "mongoose";
import FeatureModules from '../featureModules/model';
const crudSchema = new Schema({
  create: {type: Boolean, default: false},
  read: {type: Boolean, default: false},
  update: {type: Boolean, default: false},
  delete: {type: Boolean, default: false},
  import: {type: Boolean, default: false},
  export: {type: Boolean, default: false},
})

const rolesSchema = new Schema(
  {
    code: { type: String },
    description: { type: String },
    crud: crudSchema,
    features: [FeatureModules.schema],
    active: {type: Boolean, default: false}
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

rolesSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      description: this.description,
      crud: this.crud,
      features: this.features,
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

const model = mongoose.model("Roles", rolesSchema);

export const schema = model.schema;
export default model;
