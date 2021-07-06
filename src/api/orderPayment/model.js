import mongoose, { Schema } from 'mongoose'

const orderPaymentSchema = new Schema({
  orderId: {type: String},
  orderAmount: { type: String },
  paymentDate: { type: String },
  paymentMode: { type: String },
  ChequeNo: { type: String },
  ChequeDate: {type: String },
  ChequeDetails: { type: String },
  OnlineTransactionId: {type: String },
  amount: {type: String },
  remarks: { type: String },
  postedById: { type: String },
  postedBy: {type: String },
 
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

orderPaymentSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      orderId: this.orderId,
      orderAmount: this.orderAmount,
      paymentDate: this.paymentDate,
      paymentMode: this.paymentMode,
      ChequeNo: this.ChequeNo,
      ChequeDate: this.ChequeDate,
      ChequeDetails: this.ChequeDetails,
      OnlineTransactionId: this.OnlineTransactionId,
      amount: this.amount,
      remarks: this.remarks,
      postedById: this.postedById,
      postedBy: this.postedBy,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('OrderPayment', orderPaymentSchema)

export const schema = model.schema
export default model
