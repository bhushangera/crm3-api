import mongoose, { Schema } from "mongoose";
import Countries from '../countries/model'
import States from '../states/model'
import Cities from '../cities/model'
import Company from '../company/model'

const crmSchema = new Schema({
  activityLogs: { type: Boolean, default: true },
  search: { type: Boolean, default: true },
  userLogging: { type: Boolean, default: true },
  notifications: { type: Boolean, default: true },
  quickActions: { type: Boolean, default: true },
  cart: { type: Boolean, default: true },
  language: { type: Boolean, default: true },
});
const emailSettingsSchema = new Schema({
  senderName: { type: String, trim: true },
  user: { type: Boolean, default: true },
  lead: { type: Boolean, default: true },
  deal: { type: Boolean, default: true },
  quotation: { type: Boolean, default: true },
  order: { type: Boolean, default: true },
  support: { type: Boolean, default: true },
});
const smsSettingsSchema = new Schema({
  senderID: { type: String, trim: true },
  smsAPI: { type: String, trim: true },
  smsKey: { type: String, trim: true },
  smsSecret: { type: String, trim: true },
  user: { type: Boolean, default: true },
  lead: { type: Boolean, default: true },
  deal: { type: Boolean, default: true },
  quotation: { type: Boolean, default: true },
  order: { type: Boolean, default: true },
  support: { type: Boolean, default: true },
});
const featureSchema = new Schema({
  search: { type: Boolean, default: false },
  notifications: { type: Boolean, default: false },
  quickActions: { type: Boolean, default: false },
  cart: { type: Boolean, default: false },
  quickPanel: { type: Boolean, default: false },
  language: { type: Boolean, default: false },
});
const apiSettingSchema = new Schema({
  email: { type: String, trim: true },
  cloudTOKEN: { type: String, trim: true },
  websiteURL: { type: String, trim: true },
  crmURL: { type: String, trim: true },
  uploadAPI: { type: String, trim: true },
  uploadPath: { type: String, trim: true },
  fallbackImage: { type: String, trim: true },
  profileEndpoint: { type: String, trim: true },
  profileUploadPath: { type: String, trim: true },
  enqUploadEndpoint: { type: String, trim: true },
  enqUploadPath: { type: String, trim: true },
  docUploadEndpoint: { type: String, trim: true },
  docUploadPath: { type: String, trim: true },
});
const locationSchema = new Schema({
  country: Countries.schema,
  state: States.schema,
  city: Cities.schema,
  geolocation: { type: Boolean, default: true },
});

const nodemaileSchema = new Schema({
  host: { type: String, trim: true },
  port: { type: Number, default: 0 },
  secure: { type: Boolean, default: true },
  encryption: { type: String, trim: true },
  user: { type: String, trim: true },
  pass: { type: String, trim: true },
});

const crmsettingsSchema = new Schema(
  {
    crm: crmSchema,
    emailAlert: emailSettingsSchema,
    smsAlert: smsSettingsSchema,
    features: featureSchema,
    location: locationSchema,
    nodemailer: nodemaileSchema,
    api: apiSettingSchema,
    company: Company.schema
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

crmsettingsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      license: this.license,
      crm: this.crm,
      emailAlert: this.emailAlert,
      smsAlert: this.smsAlert,
      features: this.features,
      location: this.location,
      nodemailer: this.nodemailer,
      api: this.api,
      company: this.company,
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

const model = mongoose.model("Crmsettings", crmsettingsSchema);

export const schema = model.schema;
export default model;
