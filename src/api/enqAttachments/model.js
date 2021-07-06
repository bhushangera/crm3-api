import mongoose, { Schema } from 'mongoose'

const enqAttachmentsSchema = new Schema({
  piId: {
    type: String
  },
  file: {
    type: String
  },
  fileName: {
    type: String
  },
  fileType: {
    type: String
  },
  fileSize: {
    type: Number
  },
  description: {
    type: String
  },
  uploaded: {
    type: Boolean
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

enqAttachmentsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      piId: this.piId,
      file: this.file,
      description: this.description,
      fileName: this.fileName,
      fileType: this.fileType,
      fileSize: this.fileSize,
      uploaded: this.uploaded,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('EnqAttachments', enqAttachmentsSchema)

export const schema = model.schema
export default model
