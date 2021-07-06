import mongoose, { Schema } from 'mongoose'

const healthExamSchema = new Schema({
  empId: {
    type: String
  },
  userId: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

healthExamSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      empId: this.empId,
      userId: this.userId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('HealthExam', healthExamSchema)

export const schema = model.schema
export default model
