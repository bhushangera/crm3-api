import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export HrPositions, { schema } from './model'

const router = new Router()
const { 
  partyId, 
  partyRoleId, 
  jdId, 
  jd, 
  level, 
  reportingDate, 
  joiningDate, 
  relevingDate, 
  payGradeId, 
  payGrade, 
  status, 
  positionType 
} = schema.tree

/**
 * @api {post} /hrPositions Create hr positions
 * @apiName CreateHrPositions
 * @apiGroup HrPositions
 * @apiParam partyId Hr positions's partyId.
 * @apiParam partyRoleId Hr positions's partyRoleId.
 * @apiParam jdId Hr positions's jdId.
 * @apiParam jd Hr positions's jd.
 * @apiParam level Hr positions's level.
 * @apiParam reportingDate Hr positions's reportingDate.
 * @apiParam joiningDate Hr positions's joiningDate.
 * @apiParam relevingDate Hr positions's relevingDate.
 * @apiParam payGradeId Hr positions's payGradeId.
 * @apiParam payGrade Hr positions's payGrade.
 * @apiParam status Hr positions's status.
 * @apiParam temporary Hr positions's temporary.
 * @apiParam permanent Hr positions's permanent.
 * @apiSuccess {Object} hrPositions Hr positions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Hr positions not found.
 */
router.post('/',
  body({ 
    partyId, 
    partyRoleId, 
    jdId, 
    jd, 
    level, 
    reportingDate, 
    joiningDate, 
    relevingDate, 
    payGradeId, 
    payGrade, 
    status, 
    positionType 
   }),
  create)

/**
 * @api {get} /hrPositions Retrieve hr positions
 * @apiName RetrieveHrPositions
 * @apiGroup HrPositions
 * @apiUse listParams
 * @apiSuccess {Object[]} hrPositions List of hr positions.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /hrPositions/:id Retrieve hr positions
 * @apiName RetrieveHrPositions
 * @apiGroup HrPositions
 * @apiSuccess {Object} hrPositions Hr positions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Hr positions not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /hrPositions/:id Update hr positions
 * @apiName UpdateHrPositions
 * @apiGroup HrPositions
 * @apiParam partyId Hr positions's partyId.
 * @apiParam partyRoleId Hr positions's partyRoleId.
 * @apiParam jdId Hr positions's jdId.
 * @apiParam jd Hr positions's jd.
 * @apiParam level Hr positions's level.
 * @apiParam reportingDate Hr positions's reportingDate.
 * @apiParam joiningDate Hr positions's joiningDate.
 * @apiParam relevingDate Hr positions's relevingDate.
 * @apiParam payGradeId Hr positions's payGradeId.
 * @apiParam payGrade Hr positions's payGrade.
 * @apiParam status Hr positions's status.
 * @apiParam temporary Hr positions's temporary.
 * @apiParam permanent Hr positions's permanent.
 * @apiSuccess {Object} hrPositions Hr positions's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Hr positions not found.
 */
router.put('/:id',
  body({ 
    partyId, 
  partyRoleId, 
  jdId, 
  jd, 
  level, 
  reportingDate, 
  joiningDate, 
  relevingDate, 
  payGradeId, 
  payGrade, 
  status, 
  positionType 
  }),
  update)

/**
 * @api {delete} /hrPositions/:id Delete hr positions
 * @apiName DeleteHrPositions
 * @apiGroup HrPositions
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Hr positions not found.
 */
router.delete('/:id',
  destroy)

export default router
