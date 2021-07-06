import mongoose, { Schema } from 'mongoose'

const statusCodesSchema = new Schema(
  {
    sortOrder: { type: Number },
    groupId: {type: String, trim: true},
    groupCode: {type: String, trim: true},
    entityId: {type: String, trim: true},
    entityCode: {type: String, trim: true},

    entityStateId: { type: String, trim: true },
    entityState: { type: String, trim: true },
    entityStateCode: { type: String, trim: true },
    code: { type: String, trim: true },
    description: { type: String, trim: true },
    active: { type: Boolean }
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

statusCodesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      sortOrder: this.sortOrder,
      groupId: this.groupId,
      groupCode: this.groupCode,
      entityId: this.entityId,
      entityCode: this.entityCode,

      entityStateId: this.entityStateId,
      entityState: this.entityState,
      entityStateCode: this.entityStateCode,
      code: this.code,
      description: this.description,
      active: this.active,
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

const model = mongoose.model('StatusCodes', statusCodesSchema)

export const schema = model.schema
export default model
