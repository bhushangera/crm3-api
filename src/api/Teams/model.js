import mongoose, { Schema } from 'mongoose'
import {employeeDetailsSchema} from '../employees/model'

const teamsSchema = new Schema({
  uuid: {type: String, trim: true},
  teamId: {type: String, trim: true},
  scrollNo: {type: String, trim: true},
  code: {type: String, trim: true},
  description: {type: String, trim: true},
  buId: {type: String, trim: true},
  unitName: {type: String, trim: true},
  companyId: {type: String, trim: true},
  companyName: {type: String, trim: true},
  entityId: {type: String, trim: true},
  entityCode: {type: String, trim: true},
  categoryId: {type: String, trim: true},
  category: {type: String, trim: true},
  teamLeaderId: {type: String, trim: true},
  reportsToId: {type: String, trim: true},
  teamLeader: employeeDetailsSchema,
  // teamMembers: [employeeDetailsSchema],
  reportsTo: employeeDetailsSchema,
  active: {type: Boolean, default: false},
  isSubTeam: {type: Boolean, default: false},
  parentTeam: {type: String, trim: true},
  territoryId: {type: String, trim: true},
  territoryCode: {type: String, trim: true}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

teamsSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      uuid: this.uuid,
      teamId: this.teamId,
      scrollNo: this.scrollNo,
      code: this.code,
      description: this.description,
      buId: this.buId,
      unitName: this.unitName,
      companyId: this.companyId,
      companyName: this.companyName,
      entityId: this.entityId,
      entityCode: this.entityCode,
      reportsToId: this.reportsToId,
      teamLeaderId: this.teamLeaderId,
      categoryId: this.categoryId,
      category: this.category,
      teamLeader: this.teamLeader,
      // teamMembers: this.teamMembers,
      reportsTo: this.reportsTo,
      active: this.active,
      isSubTeam: this.isSubTeam,
      parentTeam: this.parentTeam,
      territoryId: this.territoryId,
      territoryCode: this.territoryCode,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Teams', teamsSchema)

export const schema = model.schema
export default model
