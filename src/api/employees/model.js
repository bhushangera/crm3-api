  import mongoose, { Schema } from "mongoose";
// entity related models
import EntityCategory from "../entityCategory/model";
import CategoryCodes from "../CategoryCodes/model";
// loacations related models
import Countries from "../countries/model";
import States from "../states/model";
import Cities from "../cities/model";
import Territories from "../territories/model";
// counters

// hr related moded
// import Employees from '../employees/model'
import Departments from "../departments/model";

export const addressSchema = new Schema({
  addressCategory: EntityCategory.schema,
  building: { type: String, trim: true },
  floor: { type: String, trim: true },
  landmark: { type: String, trim: true },
  address: String,
  country: Countries.schema,
  state: States.schema,
  city: Cities.schema,
  territory: Territories.schema,
  lon: String,
  lat: String,
  // zip code
  pinCode: { type: Number },
  isPrimary: { type: Boolean },
});

export const idProofSchema = new Schema({
  type: { type: String, trim: true }, // id , address
  category: EntityCategory.schema,
  categoryCode: CategoryCodes.schema,
  issueDate: { type: Date },
  hasExpiry: { type: Boolean, default: false },
  expiryDate: { type: Date },
  images: {
    frontSide: { type: String, trim: true },
    backSide: { type: String, trim: true },
  },
});
export const educationSchema = new Schema({
  course: { type: String, trim: true },
  duration: { type: Number, default: 0 },
  fromDate: { type: Date },
  toDate: { type: Date },
  completed: { type: Boolean },
  outcome: { type: String, trim: true },
  images: {
    frontSide: { type: String, trim: true },
    backSide: { type: String, trim: true },
  },
});

export const contactSchema = new Schema({
  primaryEmail: {type: String, trim: true},
  altEmail: {type: String, trim: true},
  primaryContact: {type: String, trim: true},
  altContact: {type: String, trim: true},
  emrContact: {type: String, trim: true},
  emrPerson: {type: String, trim: true},
  emrRelation: {type: String, trim: true},
});
export const personalDetailsSchema = new Schema({
  religion: { type: String }, // hindu, muslim, sikh, cristian, others
  nationality: { type: String }, // indian, others
  dateOfBirth: { type: Date },
  maritalStatus: { type: String }, // married, single , divorced, seperated
  anniversary: { type: Date },
  spouseName: { type: String },
  hasChildren: { type: Boolean, default: false },
  noOfChildren: { type: Number, default: 0 },
  familyDetails: { type: String },
});
export const immegrationSchema = new Schema({
  citizenShip: { type: String }, // permanent, Foreigner, NRI
  passportNo: { type: String },
  passportExpiry: { type: Date },
  visa: { type: String },
  visaExpiry: { type: Date },
  country: Countries.schema,
});
export const employeeDetailsSchema = new Schema({
  uuid: {type: String, trim: true},
  // mendatory fields
  empId: {type: String, trim: true},
  title: {type: String, trim: true},
  avatar: {type: String, trim: true},
  name: {type: String, trim: true},
  lastName: {type: String, trim: true},
  profilePicture: {type: String, trim: true},
  buId: {type: String, trim: true},
  unitName: {type: String, trim: true},
  deptId: {type: String, trim: true},
  department: {type: String, trim: true},
  mailbox: {type: String, trim: true},
  empName: {type: String, trim: true},
  designationId: {type: String, trim: true},
  designation: {type: String, trim: true},
  designationCode: {type: String, trim: true},
  reportsTo: {type: String, trim: true},
  reportsToId: {type: String, trim: true},
  reportsToUUID: {type: String, trim: true},
  territoryId: {type: String, trim: true},
  territory: {type: String, trim: true},
  contact: contactSchema
});
const employeesSchema = new Schema(
  {
    uuid: { type: String, trim: true },
    scrollNo: { type: Number, defaul: 0 }, // 1
    empId: { type: String, trim: true },
    entityId: { type: String, trim: true },
    entity: { type: String, trim: true },
    stateId: { type: String, trim: true },
    stateCode: { type: String, trim: true },
    statusId: { type: String, trim: true },
    statusCode: { type: String, trim: true },
    categoryId: { type: String, trim: true },
    category: { type: String, trim: true },
    categoryCodeId: { type: String, trim: true },
    categoryCode: { type: String, trim: true },
    title: { type: String, trim: true },
    name: { type: String, trim: true },
    lastName: { type: String, trim: true },
    avatar: { type: String, trim: true },
    profilePicture: { type: String, trim: true },
    buId: { type: String, trim: true },
    unitName: { type: String, trim: true },
    deptId: { type: String, trim: true },
    department: { type: String, trim: true },
    reportsToId: { type: String, trim: true },
    reportsTo: { type: String, trim: true },
    reportsToUUID: { type: String, trim: true },
    mailbox: { type: String, trim: true },
    empName: { type: String, trim: true },
    designationId: { type: String, trim: true },
    designation: { type: String, trim: true },
    designationCode: { type: String, trim: true },
    leavePolicy: { type: String, trim: true },
    territoryId: { type: String, trim: true },
    territory: { type: String, trim: true },
    contact: contactSchema,
    address: [addressSchema],
    education: [educationSchema],
    idProofs: [idProofSchema],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      },
    },
  }
);

employeesSchema.methods = {
  view(full) {
    const view = {
      id: this.id,
      uuid: this.uuid,
      scrollNo: this.scrollNo,
      empId: this.empId,
      entityId: this.entityId,
      entity: this.entity,
      stateId: this.stateId,
      stateCode: this.stateCode,
      statusId: this.statusId,
      statusCode: this.statusCode,
      categoryId: this.categoryId,
      category: this.category,
      categoryCodeId: this.categoryCodeId,
      categoryCode: this.categoryCode,
      title: this.title,
      name: this.name,
      lastName: this.lastName,
      avatar: this.avatar,
      profilePicture: this.profilePicture,
      buId: this.buId,
      unitName: this.unitName,
      deptId: this.deptId,
      department: this.department,
      reportsToId: this.reportsToId,
      reportsTo: this.reportsTo,
      reportsToUUID: this.reportsToUUID,
      mailbox: this.mailbox,
      empName: this.empName,
      designationId: this.designationId,
      designationCode: this.designationCode,
      designation: this.designation,
      leavePolicy: this.leavePolicy,
      territoryId: this.territoryId,
      territory: this.territory,
      contact: this.contact,
      address: this.address,
      education: this.education,
      idProofs: this.idProofs,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    return full ? { ...view } : view;
  },
};

const model = mongoose.model("Employees", employeesSchema);

export const schema = model.schema;
export default model;
