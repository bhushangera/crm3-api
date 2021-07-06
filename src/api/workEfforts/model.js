import mongoose, { Schema } from 'mongoose'

const workEffortsSchema = new Schema({
  WorkEffortId: {type: String },
  scrollNo: {type: String },
  ticketId: { type: String },
  workEffectTypeId: { type: String },
  wordEffectType: { type: String },
  description: {type: String },
  sheduledStartDate: { type: Date},
  sheduledEndDate: { type: Date },
  actualStartDate: { type: Date },
  actualEndDate: { type: Date },
  totalBudget: { type: Number },
  totalHours: { type: Number },
  actualHours: { type: Number },
  specialTerms: {  type: String },
  productionRun: { type: Boolean, default: false },
  qtyToProduce: { type: Number },
  qtyProduced: { type: Number },
  qtyRejected: { type: Number },
  runType: { type: String },
  complete: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

workEffortsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      WorkEffortId: this.WorkEffortId,
      scrollNo: this.scrollNo,
      ticketId: this.ticketId,
      workEffectTypeId: this.workEffectTypeId,
      wordEffectType: this.wordEffectType,
      description: this.description,
      sheduledStartDate: this.sheduledStartDate,
      sheduledEndDate: this.sheduledEndDate,
      actualStartDate: this.actualStartDate,
      actualEndDate: this.actualEndDate,
      totalBudget: this.totalBudget,
      totalHours: this.totalHours,
      actualHours: this.actualHours,
      specialTerms: this.specialTerms,
      productionRun: this.productionRun,
      qtyToProduce: this.qtyToProduce,
      qtyProduced: this.qtyProduced,
      qtyRejected: this.qtyRejected,
      runType: this.runType,
      complete: this.complete,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('WorkEfforts', workEffortsSchema)

export const schema = model.schema
export default model
