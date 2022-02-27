import mongoose, { Schema } from 'mongoose'
import EntityCategory from '../entityCategory/model'
// loacations related models
import Countries from '../countries/model'
import States from '../states/model'
import Cities from '../cities/model'
import Territories from '../territories/model'
import {employeeDetailsSchema} from '../employees/model'
import Teams from '../Teams/model'

const addressSchema = new Schema({
  addressCategory: EntityCategory.schema,
  // address
  building: { type: String, trim: true },
  floor: { type: String, trim: true },
  landmark: { type: String, trim: true },
  address: { type: String, trim: true },
  // country
  country: Countries.schema,
  state: States.schema,
  city: Cities.schema,
  lon: { type: Number, default: 0 },
  lat: { type: Number, default: 0 },
  // zip code
  pinCode: { type: Number, default: 0 },
  isPrimary: { type: Boolean, default: false },
  territory: Territories.schema

})
const commercialSchema = new Schema({
  GSTIN: { type: String, trim: true },
  PAN: { type: String, trim: true },
  TAN: { type: String, trim: true },
  // banking details
  bankAccount: { type: String, trim: true },
  bankName: { type: String, trim: true },
  IFSC: { type: String, trim: true },
  bankBranch: { type: String, trim: true },
  MICR: { type: String, trim: true },
  branchAddress: { type: String, trim: true }
})
const creditLimitSchema = new Schema({
  creditLimit: { type: Number, default: 0 },
  creditDays: { type: Number, default: 0 }
})
// main schema
const partiesSchema = new Schema(
  {
    uuid: {type: String, trim: true},
    custId: {type: String, trim: true},
    scrollNo: {type: Number, default: 0},
    leadId: { type: String, trim: true },
    generateFrom: { type: String, trim: true },
    buId: { type: String, trim: true },
    businessUnit: { type: String, trim: true },
    title: { type: String, trim: true },
    avatar: { type: String, trim: true },
    name: { type: String, trim: true },
    lastName: { type: String, trim: true },
    mobile: { type: String, trim: true },
    managerId: { type: String, trim: true },
    manager: employeeDetailsSchema,
    reportsToUUID: { type: String, trim: true },
    reportsTo: { type: String, trim: true },
    teamId: { type: String, trim: true },
    team: Teams.schema,
    email: { type: String, trim: true },
    custType: { type: String, trim: true },
    categoryId: { type: String, trim: true },
    categoryCode: { type: String, trim: true },
    companyName: { type: String, trim: true },
    legalName: { type: String, trim: true },
    sectorCategoryId: { type: String, trim: true },
    sectorCategoryCode: { type: String, trim: true },
    campiagnId: { type: String, trim: true },
    campaignCode: { type: String, trim: true },
    refPartyId: { type: String, trim: true },
    // party specific
    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },
    stateId: { type: String, trim: true },
    stateCode: { type: String, trim: true },
    statusId: { type: String, trim: true },
    statusCode: { type: String, trim: true },
    // end from lead table
    segmentCategoryId: { type: String, trim: true },
    segmentCategory: { type: String, trim: true },
    territoryId: { type: String, trim: true },
    logo: { type: String, trim: true },
    slug: { type: String, trim: true },
    fullName: { type: String, trim: true },
    bio: { type: String, trim: true },
    hasCreditLimit: { type: Boolean, default: false },
    billingAddress: addressSchema,
    shippingAddress: addressSchema,
    sameAddress: {type: Boolean, default: false},
    commercials: commercialSchema,
    creditLimit: creditLimitSchema,
    address: [addressSchema],
    isDealer: {type: Boolean, default: false}
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id
      }
    }
  }
)

partiesSchema.methods = {
  view (full) {
    const view = {
      id: this.id,
      uuid: this.uuid,
      custId: this.custId,
      scrollNo: this.scrollNo,
      leadId: this.leadId,
      generateFrom: this.generateFrom,
      buId: this.buId,
      businessUnit: this.businessUnit,
      title: this.title,
      avatar: this.avatar,
      name: this.name,
      lastName: this.lastName,
      mobile: this.mobile,
      managerId: this.managerId,
      manager: this.manager,
      reportsTo: this.reportsTo,
      reportsToUUID: this.reportsToUUID,
      teamId: this.teamId,
      team: this.team,
      email: this.email,
      custType: this.custType,
      categoryId: this.categoryId,
      categoryCode: this.categoryCode,
      companyName: this.companyName,
      legalName: this.legalName,
      sectorCategoryId: this.sectorCategoryId,
      sectorCategoryCode: this.sectorCategoryCode,
      campiagnId: this.campiagnId,
      campaignCode: this.campaignCode,
      refPartyId: this.refPartyId,
      // party specific
      entityId: this.entityId,
      entityCode: this.entityCode,
      stateId: this.stateId,
      stateCode: this.stateCode,
      statusId: this.statusId,
      statusCode: this.statusCode,
      // end from lead table
      segmentCategoryId: this.segmentCategoryId,
      segmentCategory: this.segmentCategory,
      territoryId: this.territoryId,
      logo: this.logo,
      slug: this.slug,
      fullName: this.fullName,
      bio: this.bio,
      address: this.address,
      hasCreditLimit: this.hasCreditLimit,
      billingAddress: this.billingAddress,
      shippingAddress: this.shippingAddress,
      sameAddress: this.sameAddress,
      commercials: this.commercials,
      creditLimit: this.creditLimit,
      isDealer: this.isDealer,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full
      ? {
        ...view
        // add properties for a full view
      }
      : view
  }
}

const model = mongoose.model('Parties', partiesSchema)

export const schema = model.schema
export default model
