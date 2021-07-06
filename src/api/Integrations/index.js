import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Integrations, { schema } from './model'

const router = new Router()
const { code, description } = schema.tree

/**
 * @api {post} /Integrations Create integrations
 * @apiName CreateIntegrations
 * @apiGroup Integrations
 * @apiParam code Integrations's code.
 * @apiParam description Integrations's description.
 * @apiSuccess {Object} integrations Integrations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Integrations not found.
 */
router.post('/',
  body({ code, description }),
  create)

/**
 * @api {get} /Integrations Retrieve integrations
 * @apiName RetrieveIntegrations
 * @apiGroup Integrations
 * @apiUse listParams
 * @apiSuccess {Object[]} integrations List of integrations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Integrations/:id Retrieve integrations
 * @apiName RetrieveIntegrations
 * @apiGroup Integrations
 * @apiSuccess {Object} integrations Integrations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Integrations not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Integrations/:id Update integrations
 * @apiName UpdateIntegrations
 * @apiGroup Integrations
 * @apiParam code Integrations's code.
 * @apiParam description Integrations's description.
 * @apiSuccess {Object} integrations Integrations's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Integrations not found.
 */
router.put('/:id',
  body({ code, description }),
  update)

/**
 * @api {delete} /Integrations/:id Delete integrations
 * @apiName DeleteIntegrations
 * @apiGroup Integrations
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Integrations not found.
 */
router.delete('/:id',
  destroy)

export default router
