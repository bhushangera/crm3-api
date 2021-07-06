import mongoose, { Schema } from 'mongoose'

const dealerProfileSchema = new Schema({
  userId: {
    type: String
  },
  firmName: {
    type: String
  },
  firmType: {
    type: String
  },
  contactPerson: {
    type: String
  },
  designation: {
    type: String
  },
  mobile: {
    type: String
  },
  landline: {
    type: String
  },
  website: {
    type: String
  },
  businessEmail: {
    type: String
  },
  building: {
    type: String
  },
  street: {
    type: String
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  GSTIN: {
    type: String
  },
  bank: {
    type: String
  },
  account: {
    type: String
  },
  branch: {
    type: String
  },
  branchAddress: {
    type: String
  },
  IFSC: {
    type: String
  },
  MICR: {
    type: String
  },
  pinCode: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

dealerProfileSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      firmName: this.firmName,
      firmType: this.firmType,
      contactPerson: this.contactPerson,
      designation: this.designation,
      mobile: this.mobile,
      landline: this.landline,
      website: this.website,
      businessEmail: this.businessEmail,
      building: this.building,
      street: this.street,
      address: this.address,
      city: this.city,
      state: this.state,
      country: this.country,
      GSTIN: this.GSTIN,
      bank: this.bank,
      account: this.account,
      branch: this.branch,
      branchAddress: this.branchAddress,
      IFSC: this.IFSC,
      MICR: this.MICR,
      pinCode: this.pinCode,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('DealerProfile', dealerProfileSchema)

export const schema = model.schema
export default model
