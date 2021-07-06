import mongoose, { Schema } from 'mongoose'
const packItemSchema = new Schema({
  itemNo: { type: Number, default: 0 },
  consBy: { type: String, trim: true }, // material, SKU
  consumableId: { type: String, trim: true },
  SKUId: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  makeId: { type: String, trim: true },
  // sku: SKUModel;
  wPercent: { type: Number, default: 0 },
  qty: { type: Number, default: 0 },
  unit: { type: String, trim: true },
  calculateBy: { type: String, trim: true },
  foc: {type: Boolean, default: false},
})
const hwpackSchema = new Schema({
  uuid: { type: String, trim: true },
  entityId: { type: String, trim: true },
  entity: { type: String, trim: true },
  entityDescription: { type: String, trim: true },
  categoryId: { type: String, trim: true },
  category: { type: String, trim: true },
  categoryDescription: { type: String, trim: true },
  categoryCodeId: { type: String, trim: true },
  categoryCode: { type: String, trim: true },
  categoryCodeDescription: { type: String, trim: true },
  code: { type: String, trim: true },
  description: { type: String, trim: true },
  image: { type: String, trim: true },
  makeId: { type: String, trim: true },
  makeCode: { type: String, trim: true },
  logo: { type: String, trim: true },
  active: { type: Boolean, trim: true },
  items: [packItemSchema]

}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

hwpackSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      entityId: this.entityId,
      entity: this.entity,
      entityDescription: this.entityDescription,
      categoryId: this.categoryId,
      category: this.category,
      categoryDescription: this.categoryDescription,
      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,
      categoryCodeDescription: this.categoryCodeDescription,
      code: this.code,
      description: this.description,
      image: this.image,
      makeId: this.makeId,
      makeCode: this.makeCode,
      logo: this.logo,
      active: this.active,
      items: this.items,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Hwpack', hwpackSchema)

export const schema = model.schema
export default model
