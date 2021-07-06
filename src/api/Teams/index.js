import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Teams, { schema } from './model'

const router = new Router()
const {
  code,
  description,
  uuid,
  teamId,
  scrollNo,
  buId,
  unitName,
  companyId,
  companyName,
  entityId,
  entityCode,
  categoryId,
  category,
  teamLeader,
  reportsToId,
  teamLeaderId,
  territoryId,
  territoryCode,
  reportsTo,
  active,
  isSubTeam,
  parentTeam
} = schema.tree

/**
 * @api {post} /Teams Create teams
 * @apiName CreateTeams
 * @apiGroup Teams
 * @apiParam code Teams's code.
 * @apiParam description Teams's description.
 * @apiSuccess {Object} teams Teams's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Teams not found.
 */
router.post(
  '/',
  body({
    code,
    description,
    uuid,
    teamId,
    scrollNo,
    buId,
    unitName,
    companyId,
    companyName,
    entityId,
    entityCode,
    categoryId,
    category,
    teamLeader,
    reportsToId,
    teamLeaderId,
    territoryId,
    territoryCode,
    reportsTo,
    active,
    isSubTeam,
    parentTeam
  }),
  create
)

/**
 * @api {get} /Teams Retrieve teams
 * @apiName RetrieveTeams
 * @apiGroup Teams
 * @apiUse listParams
 * @apiSuccess {Object[]} teams List of teams.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

/**
 * @api {get} /Teams/:id Retrieve teams
 * @apiName RetrieveTeams
 * @apiGroup Teams
 * @apiSuccess {Object} teams Teams's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Teams not found.
 */
router.get('/:id', show)

/**
 * @api {put} /Teams/:id Update teams
 * @apiName UpdateTeams
 * @apiGroup Teams
 * @apiParam code Teams's code.
 * @apiParam description Teams's description.
 * @apiSuccess {Object} teams Teams's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Teams not found.
 */
router.put(
  '/:id',
  body({
    code,
    description,
    uuid,
    teamId,
    scrollNo,
    buId,
    unitName,
    companyId,
    companyName,
    entityId,
    entityCode,
    categoryId,
    category,
    teamLeader,
    reportsToId,
    teamLeaderId,
    territoryId,
    territoryCode,
    reportsTo,
    active,
    isSubTeam,
    parentTeam
  }),
  update
)

/**
 * @api {delete} /Teams/:id Delete teams
 * @apiName DeleteTeams
 * @apiGroup Teams
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Teams not found.
 */
router.delete('/:id', destroy)

export default router
