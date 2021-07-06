import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema(
  {
    datePlaced: {type: Date}, // new Date()
    scrollNo: {type: String},
    fromPartyId: {type: String},
    toPartyId: {type: String},
    OrderAmount: {type: Number, default: 0},
    GSTAmount: {type: Number, default: 0},
    TotalValue: {type: Number, default: 0},
    billingAddressId: {type: String},
    billingAddress: {type: String},
    shippingAddressId: {type: String},
    shippingAddress: {type: String},
    paymentTerms: {type: String}, // cash / cheque / bankTransfer / online
    advanceAmount: {type: Number, default: 0},
    PaidByParty: {type: Number, default: 0},
    OrderRemarks: {type: String},
    managerId: {type: String},
    status: {type: String},
    phase: {type: String},
    otherAddress: {type: Boolean, default: false},
    building: {type: String},
    floor: {type: String},
    street: {type: String},
    landmark: {type: String},
    address: {type: String},
    countryId: {type: String},
    country: {type: String},
    stateId: {type: String},
    state: {type: String},
    territoryId: {type: String},
    territory: {type: String},
    cityId: {type: String},
    locationId: {type: String},
    locationCode: {type: String},
    city: {type: String},
    pinCode: {type: String},

    trackingRemarks: {type: String},
    notify: {type: Boolean},
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

orderSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      datePlaced: this.datePlaced,
      scrollNo: this.scrollNo,
      fromPartyId: this.fromPartyId,
      toPartyId: this.toPartyId,
      OrderAmount: this.OrderAmount,
      GSTAmount: this.GSTAmount,
      TotalValue: this.TotalValue,
      billingAddressId: this.billingAddressId,
      billingAddress: this.billingAddress,
      shippingAddressId: this.shippingAddressId,
      shippingAddress: this.shippingAddress,
      paymentTerms: this.paymentTerms,
      advanceAmount: this.advanceAmount,
      PaidByParty: this.PaidByParty,
      OrderRemarks: this.OrderRemarks,
      managerId: this.managerId,
      status: this.status,
      phase: this.phase,
      otherAddress: this.otherAddress,
      building: this.building,
      floor: this.floor,
      street: this.street,
      landmark: this.landmark,
      address: this.address,
      countryId: this.countryId,
      country: this.country,
      stateId: this.stateId,
      state: this.state,
      territoryId: this.territoryId,
      territory: this.territory,
      cityId: this.cityId,
      locationId: this.locationId,
      locationCode: this.locationCode,
      city: this.city,
      pinCode: this.pinCode,

      trackingRemarks: this.trackingRemarks,
      notify: this.notify,
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

const model = mongoose.model('Order', orderSchema)

export const schema = model.schema
export default model
