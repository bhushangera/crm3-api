import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'
import { env } from '../../config'
// const roles = ["user", "admin"];
import FeatureModules from '../featureModules/model'

const crudSchema = new Schema({
  create: {type: Boolean, default: false},
  read: {type: Boolean, default: true},
  edit: {type: Boolean, default: false},
  update: {type: Boolean, default: false},
  delete: {type: Boolean, default: false},
  import: {type: Boolean, default: false},
  export: {type: Boolean, default: false}
})
// const dashSchema = new Schema({
//   id: {type: String, trim: true},
//   code: {type: String, trim: true},
//   description: {type: String, trim: true},
//   path: {type: String, trim: true}
// })
// const entitySchema = new Schema({
//   id: {type: String, trim: true},
//   code: {type: String},
//   description: {type: String},
//   sortOrder: {type: Number},
//   icon: {type: String},
//   colorId: {type: String},
//   background: {type: String},
//   foreground: {type: String},
//   prefix: {type: String},
//   group: {type: String},
//   active: {type: Boolean, default: true},
//   hasState: {type: Boolean, default: false},
//   hasCategories: {type: Boolean, default: false}
// })
// const entityStateShema = new Schema({
//   id: {type: String, trim: true},
//   entityId: { type: String, trim: true },
//   entityCode: { type: String, trim: true },
//   entityDescription: { type: String, trim: true },
//   code: { type: String, trim: true },
//   description: { type: String, trim: true },
//   active: { type: Boolean, default: true },
//   hasStatusCodes: {type: Boolean, default: false}
// })
// const entityCategorySchema = new Schema({
//   id: {type: String, trim: true},
//   entityId: {type: String, trim: true},
//   entityCode: {type: String, trim: true},
//   entityDescription: {type: String, trim: true},
//   code: {type: String, trim: true},
//   description: {type: String, trim: true},
//   active: {type: Boolean, default: true},
//   hasCategoryCodes: {type: Boolean, default: false}
// })
// const statusCodeSchema = new Schema({
//   id: { type: String, trim: true },
//   sortOrder: { type: Number },
//   entityStateId: { type: String, trim: true },
//   entityState: { type: String, trim: true },
//   code: { type: String, trim: true },
//   description: { type: String, trim: true },
//   active: { type: Boolean }
// })
const featuresSchema = new Schema({
  id: {type: String, trim: true},
  code: {type: String, trim: true},
  label: {type: String, trim: true}
})
const roleSchema = new Schema({
  id: {type: String, trim: true},
  code: { type: String },
  description: { type: String },
  crud: crudSchema,
  features: [featuresSchema]
})
// const categoryCodeSchema = new Schema({
//   id: { type: String, trim: true },
//   sortOrder: { type: Number },
//   entityCategoryId: { type: String, trim: true },
//   entityCategory: { type: String, trim: true },
//   code: { type: String, trim: true },
//   description: { type: String, trim: true },
//   active: { type: Boolean }
// })
const userSchema = new Schema(
  {
    email: {
      // ok
      type: String,
      match: /^\S+@\S+\.\S+$/,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: { type: String, required: true, minlength: 6 }, // ok
    // role: { type: String, trim: true }, // ok
    name: { type: String, index: true, trim: true }, // ok
    picture: { type: String, trim: true }, // ok
    // extra columns
    salutationId: { type: String, trim: true }, // ok
    title: { type: String, trim: true }, // ok
    lastName: { type: String, trim: true }, // ok
    mobile: { type: String, trim: true }, // ok
    locked: { type: Boolean, default: true }, // ok
    isInternal: { type: Boolean, default: false }, // ok
    verified: { type: Boolean, default: false }, // ok
    phoneVerified: { type: Boolean, default: false }, // ok
    phoneVerifiedDate: { type: Date }, // ok
    role: roleSchema,

    portalAccess: {type: Boolean, default: true},
    dashboardId: {type: String, trim: true},
    dashboard: {type: String, trim: true},
    dashboardURL: {type: String, trim: true},
    entityId: {type: String, trim: true},
    entityCode: {type: String, trim: true},
    stateId: {type: String, trim: true},
    stateCode: {type: String, trim: true},
    statusId: {type: String, trim: true},
    status: {type: String, trim: true},
    categoryId: {type: String, trim: true},
    category: {type: String, trim: true},
    categoryCodeId: {type: String, trim: true},
    categoryCode: {type: String, trim: true},
    employeeId: {type: String, trim: true},
    partyId: {type: String, trim: true},
    isTeamLeader: {type: Boolean, default: false},
    featureModules: [FeatureModules.schema],
    additionalModules: [FeatureModules.schema],
    buId: {type: String, trim: true},
    unitName: {type: String, trim: true},
    reportsToUUID: {type: String, trim: true},
    reportsTo: {type: String, trim: true}
  },
  {
    timestamps: true
  }
)

userSchema.path('email').set(function (email) {
  if (!this.picture || this.picture.indexOf('https://gravatar.com') === 0) {
    const hash = crypto.createHash('md5').update(email).digest('hex')
    this.picture = `https://gravatar.com/avatar/${hash}?d=identicon`
  }

  if (!this.name) {
    this.name = email.replace(/^(.+)@.+$/, '$1')
  }

  return email
})

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()

  /* istanbul ignore next */
  const rounds = env === 'test' ? 1 : 9

  bcrypt
    .hash(this.password, rounds)
    .then((hash) => {
      this.password = hash
      next()
    })
    .catch(next)
})

userSchema.methods = {
  view (full) {
    let view = {}
    let fields = [
      'id',
      'name',
      'email',
      'picture',
      'salutationId',
      'title',
      'lastName',
      'mobile',
      'locked',
      'isInternal',
      'verified',
      'phoneVerified',
      'phoneVerifiedDate',
      'portalAccess',
      'role',
      'portalAccess',
      'dashboardId',
      'dashboard',
      'dashboardURL',
      'entityId',
      'entityCode',
      'stateId',
      'stateCode',
      'statusId',
      'status',
      'categoryId',
      'category',
      'categoryCodeId',
      'categoryCode',
      'employeeId',
      'partyId',
      'isTeamLeader',
      'featureModules',
      'additionalModules',
      'buId',
      'unitName',
      'reportsToUUID',
      'reportsTo'
    ]

    if (full) {
      fields = [...fields, 'email', 'createdAt']
    }

    fields.forEach((field) => {
      view[field] = this[field]
    })

    return view
  },

  authenticate (password) {
    return bcrypt
      .compare(password, this.password)
      .then((valid) => (valid ? this : false))
  }
}

// userSchema.statics = {
//   roles,
// };

userSchema.plugin(mongooseKeywords, { paths: ['email', 'name'] })

const model = mongoose.model('User', userSchema)

export const schema = model.schema
export default model
