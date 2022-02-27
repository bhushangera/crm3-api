import mongoose, { Schema } from 'mongoose'
import { addressSchema } from '../employees/model'
import Entities from '../entities/model'
var autoIncrement = require('mongoose-auto-increment')

// import EntityCategory from '../entityCategory/model'
// import CategoryCodes from '../CategoryCodes/model'

// import BusinessUnits from '../businessunits/model'

export const componentPacksSchema = new Schema({
  itemNo: {type: Number, default: 0},
  packCategoryId: {type: String, trim: true},
  makeId: {type: String, trim: true},
  packId: {type: String, trim: true},
  code: {type: String, trim: true},
  description: {type: String, trim: true},
  qty: {type: Number, default: 0},
  foc: {type: Boolean, default: false},
  image: {type: String, trim: true}
})
export const ralSchema = new Schema({
  RAL: { type: String, trim: true },
  RGB: { type: String, trim: true },
  HEX: { type: String, trim: true },
  German: { type: String, trim: true },
  English: { type: String, trim: true },
  French: { type: String, trim: true },
  Spanish: { type: String, trim: true },
  Italian: { type: String, trim: true },
  Nederlands: { type: String, trim: true }
})
export const additionalSchema = new Schema({
  itemNo: {type: Number, defualt: 0},
  description: {type: String, trim: true},
  brand: {type: String, trim: true},
  unit: {type: String, trim: true},
  listPrice: {type: Number, defualt: 0},
  qty: {type: Number, defualt: 0},
  amount: {type: Number, defualt: 0},
  payType: {type: String, trim: true}
})

export const woodworkingSchema = new Schema({
  discType: { type: String, trim: true },
  discFactor: { type: Number, default: 0 },
  discValue: { type: Number, default: 0 }
})
export const commercialsSchema = new Schema({
  buId: { type: String, trim: true },
  gstin: { type: String, trim: true },
  pan: { type: String, trim: true },
  tan: { type: String, trim: true },
  bankName: { type: String, trim: true },
  bankBranch: { type: String, trim: true },
  branchAddress: { type: String, trim: true },
  bankAccount: { type: String, trim: true },
  bankACTitle: { type: String, trim: true },
  IFSC: { type: String, trim: true },
  MICR: { type: String, trim: true }
})

const piSchema = new Schema({
  uuid: { type: String, trim: true },
  sNo: {type: Number},
  originalSNo: {type: Number},
  // bu: BusinessUnits.schema,
  buId: { type: String, trim: true },
  entityId: { type: String, trim: true },
  entityCode: { type: String, trim: true },
  entityNotes: { type: String, trim: true },

  terms: { type: String, trim: true },
  quotationId: { type: String, trim: true },
  quotDate: { type: Date },
  scrollNo: { type: Number, default: 0 },
  validFor: { type: Number, default: 0 },
  validity: { type: Date },
  createdById: { type: String, trim: true },
  createdBy: { type: String, trim: true },
  type: { type: String, trim: true }, // original, revised
  origRefId: { type: String, trim: true },
  revisionNo: { type: String, trim: true },
  slug: { type: String, trim: true },
  stateId: { type: String, trim: true },
  state: { type: String, trim: true },
  statusId: { type: String, trim: true },
  status: { type: String, trim: true },
  pdNo: { type: String, trim: true },
  refEmpId: { type: String, trim: true },
  // refEmp: employeeDetailsSchema,

  managerId: { type: String, trim: true },
  // manager: employeeDetailsSchema,
  reportsToUUID: { type: String, trim: true },
  reportsTo: { type: String, trim: true },

  designerId: { type: String, trim: true },
  // designer: employeeDetailsSchema,

  generateBy: { type: String, trim: true }, // deal, fresh;
  dealId: { type: String, trim: true },
  leadId: { type: String, trim: true },
  campaignId: { type: String, trim: true },

  itemId: { type: String, trim: true },
  item: Entities.schema,
  remarks: { type: String, trim: true },
  archive: { type: Boolean, default: false },

  partyId: { type: String, trim: true },
  partyDetails: {type: String, trim: true},
  // partyDetails: Parties.schema,
  GSTIN: { type: String, trim: true },
  isDealer: { type: Boolean, default: false },

  cartage: { type: Number, default: 0 },
  packing: { type: Number, default: 0 },
  installation: { type: Number, default: 0 },
  splDiscount: { type: Number, default: 0 },

  address: addressSchema,

  verifiedById: { type: String, trim: true },
  verifiedByUserId: { type: String, trim: true },
  verifiedAt: { type: Date },

  approvedById: { type: String, trim: true },
  approvedBy: { type: String, trim: true },
  approovedAt: { type: String, trim: true },

  includeTax: { type: Boolean, default: false },
  wwDiscount: { type: Boolean, default: false },
  // widths
  bcDepth: { type: Number, default: 0 },
  wcDepth: { type: Number, default: 0 },
  bcHeight: { type: Number, default: 0 },
  wcHeight: { type: Number, default: 0 },

  woodworking: woodworkingSchema,

  commercials: commercialsSchema,
  // carcass
  wallPackId: { type: String, trim: true },
  basePackId: { type: String, trim: true },
  additional: [additionalSchema]

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})
piSchema.plugin(autoIncrement.plugin, {
  model: 'Pis',
  field: 'sNo',
  startAt: 101
})
piSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      sNo: this.sNo,
      originalSNo: this.originalSNo,
      buId: this.buId,
      // bu: this.bu,
      entityId: this.entityId,
      entityCode: this.entityCode,
      entityNotes: this.entityNotes,
      terms: this.terms,
      quotationId: this.quotationId,
      quotDate: this.quotDate,
      scrollNo: this.scrollNo,
      validFor: this.validFor,
      validity: this.validity,
      createdById: this.createdById,
      createdBy: this.createdBy,
      type: this.type,
      origRefId: this.origRefId,
      revisionNo: this.revisionNo,
      slug: this.slug,
      stateId: this.stateId,
      state: this.state,
      statusId: this.statusId,
      status: this.status,
      pdNo: this.pdNo,
      refEmpId: this.refEmpId,
      // refEmp: this.refEmp,
      managerId: this.managerId,
      // manager: this.manager,
      reportsToUUID: this.reportsToUUID,
      reportsTo: this.reportsTo,
      designerId: this.designerId,
      // designer: this.designer,
      generateBy: this.generateBy,
      dealId: this.dealId,
      leadId: this.leadId,
      campaignId: this.campaignId,
      itemId: this.itemId,
      item: this.item,
      remarks: this.remarks,
      archive: this.archive,
      partyId: this.partyId,
      partyDetails: this.partyDetails,
      isDealer: this.isDealer,
      GSTIN: this.GSTIN,
      cartage: this.cartage,
      packing: this.packing,
      installation: this.installation,
      splDiscount: this.splDiscount,
      address: this.address,
      verifiedById: this.verifiedById,
      verifiedByUserId: this.verifiedByUserId,
      verifiedAt: this.verifiedAt,
      approvedById: this.approvedById,
      approvedBy: this.approvedBy,
      approovedAt: this.approovedAt,
      includeTax: this.includeTax,
      wwDiscount: this.wwDiscount,
      bcDepth: this.bcDepth,
      wcDepth: this.wcDepth,
      bcHeight: this.bcHeight,
      wcHeight: this.wcHeight,
      woodworking: this.woodworking,
      commercials: this.commercials,
      wallPackId: this.wallPackId,
      basePackId: this.basePackId,
      components: this.components,
      additional: this.additional,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Pi', piSchema)

export const schema = model.schema
export default model
