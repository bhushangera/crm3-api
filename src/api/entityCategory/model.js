import mongoose, { Schema } from 'mongoose'

const entityCategorySchema = new Schema({
  uuid: {type: String, trim: true},
  code: {type: String, trim: true},
  description: {type: String, trim: true},
  entityId: {type: String, trim: true},
  entityCode: {type: String, trim: true},
  groupId: {type: String, trim: true},
  groupCode: {type: String, trim: true},
  hasCategoryCodes: {type: Boolean, default: false},
  image: {type: String, trim: true},
  definition: {type: String, trim: true},
  active: {type: Boolean, default: true}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

entityCategorySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      code: this.code,
      description: this.description,
      entityId: this.entityId,
      entityCode: this.entityCode,
      groupId: this.groupId,
      groupCode: this.groupCode,
      hasCategoryCodes: this.hasCategoryCodes,
      image: this.image,
      active: this.active,
      definition: this.definition,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('EntityCategory', entityCategorySchema)

export const schema = model.schema
export default model
