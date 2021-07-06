import mongoose, { Schema } from "mongoose";
import Icons from '../icons/model'

const featureSchema = new Schema({
  feature: { type: String, trim: true, default: ' ' }
})
const metaSchema = new Schema({
  name: { type: String, trim: true },
  content: { type: String, trim: true },
  property: { type: String, trim: true },
})
const pageSchema = new Schema({
  title: { type: String, trim: true },
  headerImage: { type: String, trim: true },
  sideImage: { type: String, trim: true },
  shortDescription: { type: String, trim: true },
  description: { type: String, trim: true },
})
const sectionSchema = new Schema({
  heading: { type: String, trim: true },
  subHeading: { type: String, trim: true },
  shortDescription: { type: String, trim: true },
  icon: Icons.schema,
  image: { type: String, trim: true },
  btnText: { type: String, trim: true },
  btnLink: { type: String, trim: true },
})
const gallerySchema = new Schema({
  name: { type: String, trim: true },
  image: { type: String, trim: true },
})
const webpagesSchema = new Schema(
  {
    code: { type: String, trim: true },
    pageLink: { type: String, trim: true },
    title: { type: String, trim: true }, // page title in header
    page: pageSchema,
    features: [featureSchema],
    meta: [metaSchema],
    sections: [sectionSchema],
    gallery: [gallerySchema],
    hasGallery: { type: Boolean, default: false },
    hasFeatures: { type: Boolean, default: false },
    hasSections: { type: Boolean, default: false },
    hasMetaTags: { type: Boolean, default: false }
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

webpagesSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      code: this.code,
      pageLink: this.pageLink,
      title: this.title,
      page: this.page,
      features: this.features,
      meta: this.meta,
      sections: this.sections,
      gallery: this.gallery,
      hasGallery: this.hasGallery,
      hasFeatures: this.hasFeatures,
      hasSections: this.hasSections,
      hasMetaTags: this.hasMetaTags,
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

const model = mongoose.model("Webpages", webpagesSchema);

export const schema = model.schema;
export default model;
