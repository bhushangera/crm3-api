import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export HealthExam, { schema } from './model'

const router = new Router()
const { empId, userId } = schema.tree

/**
 * @api {post} /healthExam Create health exam
 * @apiName CreateHealthExam
 * @apiGroup HealthExam
 * @apiParam empId Health exam's empId.
 * @apiParam userId Health exam's userId.
 * @apiSuccess {Object} healthExam Health exam's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Health exam not found.
 */
router.post('/',
  body({ empId, userId }),
  create)

/**
 * @api {get} /healthExam Retrieve health exams
 * @apiName RetrieveHealthExams
 * @apiGroup HealthExam
 * @apiUse listParams
 * @apiSuccess {Object[]} healthExams List of health exams.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /healthExam/:id Retrieve health exam
 * @apiName RetrieveHealthExam
 * @apiGroup HealthExam
 * @apiSuccess {Object} healthExam Health exam's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Health exam not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /healthExam/:id Update health exam
 * @apiName UpdateHealthExam
 * @apiGroup HealthExam
 * @apiParam empId Health exam's empId.
 * @apiParam userId Health exam's userId.
 * @apiSuccess {Object} healthExam Health exam's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Health exam not found.
 */
router.put('/:id',
  body({ empId, userId }),
  update)

/**
 * @api {delete} /healthExam/:id Delete health exam
 * @apiName DeleteHealthExam
 * @apiGroup HealthExam
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Health exam not found.
 */
router.delete('/:id',
  destroy)

export default router
