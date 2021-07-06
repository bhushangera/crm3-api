import mongoose, { Schema } from 'mongoose'
import Entities from '../entities/model'
import EntityState from '../entityState/model'
import EntityCategory from '../entityCategory/model'
import CategoryCodes from '../CategoryCodes/model'
import StatusCodes from '../statusCodes/model'
const activitiesSchema = new Schema(
  {
    userId: String,
    userName: String,
    manager: String,
    relativeId: String,
    relEntity: Entities.schema,
    entity: Entities.schema,
    entityState: EntityState.schema,
    entityCategory: EntityCategory.schema,
    statusCode: StatusCodes.schema,
    categoryCode: CategoryCodes.schema,
    activityDate: String,
    description: String,
    setReminder: Boolean,
    reminderDate: Date,
    reminderNotificationDate: Date,
    reminderMessage: String,
    from: String, // "sender@server.com",
    to: String, // "receiver@sender.com",
    subject: String, // "Message title",
    html: String, //  "<p>HTML version of the message</p>"
    attachments: [
      {
        filename: String, //  'text1.txt',
        path: String // 'hello world!'
      }
    ]
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id
      }
    }
  }
)

activitiesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      userName: this.userName,
      manager: this.manager,
      relativeId: this.relativeId,
      relEntity: this.relEntity,
      entity: this.entity,
      entityState: this.entityState,
      entityCategory: this.entityCategory,
      statusCode: this.statusCode,
      categoryCode: this.categoryCode,
      activityDate: this.activityDate,
      description: this.description,
      setReminder: this.setReminder,
      reminderDate: this.reminderDate,
      reminderNotificationDate: this.reminderNotificationDate,
      reminderMessage: this.reminderMessage,
      from: this.from,
      to: this.to,
      subject: this.subject,
      html: this.html,
      attachments: this.attachments,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full
      ? {
        ...view
        // add properties for a full view
      }
      : view
  }
}

const model = mongoose.model('Activities', activitiesSchema)

export const schema = model.schema
export default model
