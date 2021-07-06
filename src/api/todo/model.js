import mongoose, { Schema } from 'mongoose'

const assigneeSchema = new Schema ({
  fullName: {type: String, trim: true},
  avatar: {type: String, trim: true},
})
const todoSchema = new Schema({
  title: { type: String, trim: true },
  dueDate: { type: String, trim: true },
  description: { type: String, trim: true },
  assignee: assigneeSchema,
  tags: [{type: String, trim: true}],
  completed: {type: Boolean, default: false},
  delted: {type: Boolean, default: false},
  important: {type: Boolean, default: false}
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

todoSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      dueDate: this.dueDate,
      description: this.description,
      assignee: assigneeSchema,
      tags: this.tags,
      completed: this.completed,
      delted: this.delted,
      important: this.important,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Todo', todoSchema)

export const schema = model.schema
export default model
