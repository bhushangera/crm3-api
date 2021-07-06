import mongoose, { Schema } from 'mongoose'

const userAddressSchema = new Schema({
  userId: {
    type: String
  },
  addressType: {
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
  pinCode: {
    type: String
  },
  contact: {
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
  contactPerson: {
    type: String
  },
  isPrimary: {
    type: Boolean, default: false
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

userAddressSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      addressType: this.addressType,
      building: this.building,
      street: this.street,
      address: this.address,
      pinCode: this.pinCode,
      contact: this.contact,
      city: this.city,
      state: this.state,
      country: this.country,
      contactPerson: this.contactPerson,
      isPrimary: this.isPrimary,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('UserAddress', userAddressSchema)

export const schema = model.schema
export default model
