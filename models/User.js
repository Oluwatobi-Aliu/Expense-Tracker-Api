const { model , Schema } = require('mongoose')

const UserSchema = new Schema({
    name: {
      type: String,
      trim: true,
      required: 'Name is required'
    },
    email: {
      type: String,
      trim: true,
      unique: 'Email already exists',
      required: 'Email is required'
    },
    password: {
      type: String,
      required: "Password is required"
    },
    created: {
      type: Date,
      default: Date.now
    }
  })
module.exports = model('User', UserSchema)