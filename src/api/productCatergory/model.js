import mongoose, { Schema } from 'mongoose'

const productCatergorySchema = new Schema({
category: {
  type: String
},
overview: {
  type: String
},
care: {
  type: String
},
terms: {
  type: String
},
image: {
  type: String
},
isActive: {
  type: Boolean
},


}, { timestamps: true })

productCatergorySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      category:this.category,
      overview:this.overview,
      care:this.care,
      terms:this.terms,
      image: this.image,
      isActive: this.isActive,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('ProductCatergory', productCatergorySchema)

export const schema = model.schema
export default model
