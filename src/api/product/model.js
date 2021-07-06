import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
  productCategoryId: { type: String},
  genericName: { type: String },
  SKU: { type: String },
  height: { type: String },
  width: { type: String },
  depth: { type: String },
  weight: { type: String },
  assembly: { type: String },
  primaryMaterial: { type: String },
  noOfPackages: { type: String },
  packageDetails: { type: String },
  packerName: { type: String },
  packerAddress: { type: String },
 
}, { timestamps: true })

productSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      productCategoryId: this.productCategoryId,
      genericName: this.genericName,
      SKU: this.sku,
      height: this.height,
      width: this.width,
      depth: this.depth,
      weight: this.weight,
      assembly: this.assembly,
      primaryMaterial: this.primaryMaterial,
      noOfPackages: this.noOfPackages,
      packageDetails: this.packageDetails,
      packerName: this.packerName,
      packerAddress: this.packerAddress,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Product', productSchema)

export const schema = model.schema
export default model
