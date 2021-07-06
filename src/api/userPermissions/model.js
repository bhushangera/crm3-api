import mongoose, { Schema } from 'mongoose'

const userPermissionsSchema = new Schema({
  userId: {type: String},
  roleId: {type: String},
  permission: {type: String},
  permissionName: {type: String}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

userPermissionsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      roleId: this.roleId,
      permission: this.permission,
      permissionName: this.permissionName,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('UserPermissions', userPermissionsSchema)

export const schema = model.schema
export default model
