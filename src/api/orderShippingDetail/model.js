import mongoose, { Schema } from 'mongoose'

const orderShippingDetailSchema = new Schema({
  OrderId: {
    type: String
  },
  status: {
    type: String
  },
  ShippedDate: {
    type: String
  },
  ShippedTime: {
    type: String
  },
  ShippingPartyId: {
    type: String
  },
  ShippingPartyDetails: {
    type: String
  },
  GRNo: {
    type: String
  },
  GRImage: {
    type: String
  },
  VehicleNo: {
    type: String
  },
  EWayBillNo: {
    type: String
  },
  EWayImage: {
    type: String
  },
  EWayBillDate: {
    type: String
  },
  EWayBilltime: {
    type: String
  },
  DriverName: {
    type: String
  },
  DriverMobile: {
    type: String
  },
  Delivered: {
    type: String
  },
  DeliveredDate: {
    type: String
  },
  DeliveredTime: {
    type: String
  },
  DeliveryReport: {
    type: String
  },
  RecivedBy: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

orderShippingDetailSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      OrderId: this.OrderId,
      status: this.status,
      ShippedDate: this.ShippedDate,
      ShippedTime: this.ShippedTime,
      ShippingPartyId: this.ShippingPartyId,
      ShippingPartyDetails: this.ShippingPartyDetails,
      GRNo: this.GRNo,
      GRImage: this.GRImage,
      VehicleNo: this.VehicleNo,
      EWayBillNo: this.EWayBillNo,
      EWayImage: this.EWayImage,
      EWayBillDate: this.EWayBillDate,
      EWayBilltime: this.EWayBilltime,
      DriverName: this.DriverName,
      DriverMobile: this.DriverMobile,
      Delivered: this.Delivered,
      DeliveredDate: this.DeliveredDate,
      DeliveredTime: this.DeliveredTime,
      DeliveryReport: this.DeliveryReport,
      RecivedBy: this.RecivedBy,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('OrderShippingDetail', orderShippingDetailSchema)

export const schema = model.schema
export default model
