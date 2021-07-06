import mongoose, { Schema } from 'mongoose'

const userTokensSchema = new Schema({
  userId: {
    type: String
  },
  token: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

userTokensSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      token: this.token,
      password: this.password,
      email: this.email,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('UserTokens', userTokensSchema)

export const schema = model.schema
export default model
