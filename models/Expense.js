const { model , Schema } = require('mongoose')

  const ExpenseSchema = Schema({
    title: {
    type: String,
    trim: true,
    required: 'Title is required'
  },
  category: {
    type: String,
    trim: true,
    required: 'Category is required'
  },
  amount: {
      type: Number,
      min: 0,
      required: 'Amount is required'
  },
  incurred_on: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    trim: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  recorded_by: {type: Schema.ObjectId, ref: 'User'}
  })
    

module.exports = model('Expense', ExpenseSchema)