import mongoose, { Schema } from "mongoose";
import Entities from "../entities/model";
import EntityState from "../entityState/model";
import EntityCategory from "../entityCategory/model";
import CategoryCodes from "../CategoryCodes/model";
import StatusCodes from "../statusCodes/model";
import Territories from "../territories/model";
import { addressSchema } from "../employees/model";
import Businessunits from "../businessunits/model";
import Salutations from "../salutations/model";
import Campaigns from "../campaigns/model";
import Parties from "../parties/model";

const contactsSchema = new Schema(
  {
    title: { type: String, trim: true },
    uuid: { type: String, trim: true },
    contactId: { type: String, trim: true },
    scrollNo: { type: Number, default: 0 },
    name: { type: String, trim: true },
    lastName: { type: String, trim: true },
    contact: { type: String, trim: true },
    mobile: { type: String, trim: true },
    email: { type: String, trim: true },
    altContact: { type: String, trim: true },
    altEmail: { type: String, trim: true },
    avatar: { type: String, trim: true },
    profilePicture: { type: String, trim: true },
    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },
    stateId: { type: String, trim: true },
    state: { type: String, trim: true },
    statusId: { type: String, trim: true },
    status: { type: String, trim: true },
    categoryId: { type: String, trim: true },
    category: { type: String, trim: true },
    categoryCodeId: { type: String, trim: true },
    categoryCode: { type: String, trim: true },
    buId: { type: String, trim: true },
    unitName: { type: String, trim: true },
    partyId: { type: String, trim: true },
    personalDetails: {
      DOB: Date,
      Anniversary: Date,
      bio: String,
      notes: String,
    },
    address: addressSchema,
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

contactsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      contactId: this.contactId,
      scrollNo: this.scrollNO,
      title: this.title,
      name: this.name,
      lastName: this.lastName,
      contact: this.contact,
      mobile: this.mobile,
      email: this.email,
      altContact: this.altContact,
      altEmail: this.altEmail,
      avatar: this.avatar,
      profilePicture: this.profilePicture,
      entityId: this.entityId,
      entityCode: this.entityCode,
      stateId: this.stateId,
      state: this.state,
      statusId: this.statusId,
      status: this.status,
      categoryId: this.categoryId,
      category: this.category,
      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,
      buId: this.buId,
      unitName: this.unitName,
      partyId: this.partyId,
      personalDetails: this.personalDetails,
      address: this.address,
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

const model = mongoose.model("Contacts", contactsSchema);

export const schema = model.schema;
export default model;
