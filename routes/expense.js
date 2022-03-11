const router = require('express').Router();



const expenseCtrl = require('../controllers/expenseController')
const authCtrl = require('../controllers/authController')


router.route('/plot')
  .get(authCtrl.requireSignin, expenseCtrl.plotExpenses)

router.route('/')
  .post(authCtrl.requireSignin, expenseCtrl.create)
  .get(authCtrl.requireSignin, expenseCtrl.listByUser)

router.route('/:expenseId')
  .get(authCtrl.requireSignin, expenseCtrl.read)
  .put(authCtrl.requireSignin, expenseCtrl.hasAuthorization, expenseCtrl.update)
  .delete(authCtrl.requireSignin, expenseCtrl.hasAuthorization, expenseCtrl.remove)

router.param('expenseId', expenseCtrl.expenseByID)



module.exports = router;