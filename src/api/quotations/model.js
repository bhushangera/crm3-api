import mongoose, { Schema } from 'mongoose'
import { addressSchema } from '../employees/model'
// eslint-disable-next-line no-unused-vars
import TaxRates from '../taxRates/model'

var autoIncrement = require('mongoose-auto-increment')

export const additionalSchema = new Schema({
  itemNo: {type: Number, defualt: 0},
  description: {type: String, trim: true},
  brand: {type: String, trim: true},
  unit: {type: String, trim: true},
  listPrice: {type: Number, defualt: 0},
  gst: {type: Number, default: 0},
  gstAmt: {type: Number, default: 0},
  qty: {type: Number, defualt: 0},
  amount: {type: Number, defualt: 0},
  gross: {type: Number, defualt: 0},
  payType: {type: String, trim: true}
})

export const BlockItemHardwareSchema = new Schema({
  blockNo: { type: Number, default: 0 },
  blockItemNo: { type: Number, default: 0 },
  itemNo: { type: Number, default: 0 },
  makeId: { type: String, trim: true },
  makeCode: {type: String, trim: true},
  skuId: { type: String, trim: true },
  skuCode: { type: String, trim: true },
  payType: { type: String, trim: true },
  description: { type: String, trim: true },
  unit: { type: String, trim: true },
  listPrice: { type: Number, default: 0 },
  qty: { type: Number, default: 0 },
  amount: { type: Number, default: 0 },
  image: { type: String, trim: true }
})
export const AddonBlockItemSchema = new Schema({
  blockNo: { type: Number, default: 0 },
  blockItemNo: {type: Number, default: 0},
  itemNo: { type: Number, default: 0 },
  description: { type: String, trim: true },
  finish: { type: String, trim: true },
  image: { type: String, trim: true },
  payType: { type: String, trim: true },
  height: { type: Number, default: 0 },
  width: { type: Number, default: 0 },
  depth: { type: Number, default: 0 },
  unit: { type: String, trim: true }, // sqft, rft, each, set, seater
  area: { type: Number, default: 0 },
  areaRemarks: { type: String, trim: true },
  rate: { type: Number, default: 0 },
  qty: { type: Number, default: 0 },
  amount: { type: Number, default: 0 }
})
export const BlockItemSchema = new Schema({
  blockNo: {type: Number, default: 0},
  itemNo: { type: Number, default: 0 },

  description: { type: String, trim: true },
  finish: { type: String, trim: true },
  image: { type: String, trim: true },
  payType: { type: String, trim: true },
  height: { type: Number, default: 0 },
  width: { type: Number, default: 0 },
  depth: { type: Number, default: 0 },
  unit: { type: String, trim: true }, // sqft, rft, each, set, seater
  area: { type: Number, default: 0 },
  areaRemarks: { type: String, trim: true },
  rate: { type: Number, default: 0 },
  qty: { type: Number, default: 0 },
  amount: { type: Number, default: 0 },
  hw: [BlockItemHardwareSchema],
  addons: [AddonBlockItemSchema],
  // new items
  fHeight: { type: Number, default: 0 },
  fWidht: { type: Number, default: 0 },
  fUnit: { type: String, trim: true },
  fArea: { type: Number, default: 0 },
  fPayType: { type: String, trim: true, default: 'paid' },
  fAmount: { type: Number, default: 0 },
  fRate: { type: Number, default: 0 },
  // architrave
  aHeight: { type: Number, default: 0 },
  aWidht: { type: Number, default: 0 },
  aUnit: { type: String, trim: true },
  aArea: { type: Number, default: 0 },
  aPayType: { type: String, trim: true, default: 'paid' },
  aRate: { type: Number, default: 0 },
  aAmount: { type: Number, default: 0 }
})
export const BlocksSchema = new Schema({
  blockNo: { type: Number, default: 0 },
  blockCode: { type: String, trim: true },
  blockItems: [BlockItemSchema]
})
const quotationsSchema = new Schema(
  {
    sNo: {type: Number},
    counterId: { type: String, trim: true },
    uuid: { type: String, trim: true },
    buId: { type: String, trim: true },
    entityId: { type: String, trim: true },
    entityCode: { type: String, trim: true },
    quotDate: { type: Date },
    validFor: { type: Number, default: 0 },
    validity: { type: Date },
    createdById: { type: String, trim: true },
    createdBy: { type: String, trim: true },
    type: { type: String, trim: true }, // original, revised
    origRefId: { type: String, trim: true },
    revisionNo: { type: Number, default: 0 },
    slug: { type: String, trim: true },
    stateId: { type: String, trim: true },
    state: { type: String, trim: true },
    statusId: { type: String, trim: true },
    status: { type: String, trim: true },

    pdNo: { type: String, trim: true },
    refEmpId: { type: String, trim: true },
    refEmpName: { type: String, trim: true },

    managerId: { type: String, trim: true },
    managerName: {type: String, trim: true},

    reportsToUUID: { type: String, trim: true },
    reportsToName: { type: String, trim: true },

    designerId: { type: String, trim: true },
    designerName: { type: String, trim: true },

    generateBy: { type: String, trim: true }, // deal, fresh;

    dealId: { type: String, trim: true },
    leadId: { type: String, trim: true },
    campaignId: { type: String, trim: true },

    itemId: { type: String, trim: true },
    itemCode: { type: String, trim: true },
    reasonId: { type: String, trim: true },
    reasonCode: { type: String, trim: true },
    reason: { type: String, trim: true },

    partyId: { type: String, trim: true },
    partyName: { type: String, trim: true },
    GSTIN: { type: String, trim: true },
    address: addressSchema,
    verifiedById: { type: String, trim: true },
    verifiedByUser: { type: String, trim: true },
    verifiedAt: { type: Date },

    approvedById: { type: String, trim: true },
    approvedByName: { type: String, trim: true },
    approovedAt: { type: String, trim: true },

    lostPartyId: { type: String, trim: true },
    lostPartyName: { type: String, trim: true },

    refPartyId: { type: String, trim: true },
    refPartyName: { type: String, trim: true },

    remarks: { type: String, trim: true },

    blocks: [BlocksSchema],
    additional: [additionalSchema],
    addAppliances: { type: Boolean, default: false },
    appliances: [BlockItemHardwareSchema],
    apDiscount: { type: Boolean, default: false },
    appliance: {
      discType: {type: String, trim: true},
      discFactor: {type: Number, default: 0}
    },
    wwDiscount: { type: Boolean, default: false },
    woodworking: {
      discType: {type: String, trim: true},
      discFactor: {type: Number, default: 0}
    },
    additionDiscount: {type: Boolean, default: false},
    addition: {
      discType: {type: String, trim: true},
      discFactor: {type: Number, default: 0}
    },
    hwDiscount: { type: Boolean, default: false },
    fittings: {
      discType: {type: String, trim: true},
      discFactor: {type: Number, default: 0}
    },
    includePacking: {type: Boolean, defaukt: false},
    packingBy: {type: String, trim: true, default: 'value'},
    packingFactor: {type: Number, default: 0},
    packing: { type: Number, default: 0 },

    cartage: { type: Number, default: 0 },
    installation: { type: Number, default: 0 },
    splDiscount: {type: Number, default: 0},

    includeTax: { type: Boolean, default: false }
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
quotationsSchema.plugin(autoIncrement.plugin, {
  model: 'Quotations',
  field: 'sNo',
  startAt: 1
})
quotationsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      sNo: this.sNo,
      counterId: this.counterId,
      uuid: this.uuid,
      buId: this.buId,
      entityId: this.entityId,
      entityCode: this.entityCode,
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
      refEmpName: this.refEmpName,
      managerId: this.managerId,
      managerName: this.managerName,
      reportsToUUID: this.reportsToUUID,
      reportsToName: this.reportsToName,
      designerId: this.designerId,
      designerName: this.designerName,
      generateBy: this.generateBy,
      dealId: this.dealId,
      leadId: this.leadId,
      campaignId: this.campaignId,
      itemId: this.itemId,
      itemCode: this.itemCode,
      reasonId: this.reasonId,
      reasonCode: this.reasonCode,
      reason: this.reason,
      partyId: this.partyId,
      partyName: this.partyName,
      GSTIN: this.GSTIN,
      address: this.address,
      verifiedById: this.verifiedById,
      verifiedAt: this.verifiedAt,
      approvedById: this.approvedById,
      approvedByName: this.approvedByName,
      approovedAt: this.approvedAt,
      lostPartyId: this.lostPartyId,
      lostPartyName: this.lostPartyName,
      refPartyId: this.refPartyId,
      refPartyName: this.refPartyName,
      remarks: this.remarks,
      blocks: this.blocks,
      additional: this.additional,
      addAppliances: this.addAppliances,
      appliances: this.appliances,
      apDiscount: this.apDiscount,
      appliance: this.appliance,
      wwDiscount: this.wwDiscount,
      woodworking: this.woodworking,
      additionDiscount: this.additioniscount,
      addition: this.addition,
      hwDiscount: this.hwDiscount,
      fittings: this.fittings,
      includePacking: this.includePacking,
      packingBy: this.packingBy,
      packingFactor: this.packingFactor,
      packing: this.packing,
      cartage: this.cartage,
      installation: this.installation,
      splDiscount: this.splDiscount,
      includeTax: this.includeTax,

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

const model = mongoose.model('Quotations', quotationsSchema)

export const schema = model.schema
export default model
