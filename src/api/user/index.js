import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import {
  password as passwordAuth,
  // eslint-disable-next-line no-unused-vars
  master,
  // eslint-disable-next-line no-unused-vars
  token
} from '../../services/passport'
import {
  index,
  showMe,
  show,
  create,
  update,
  updatePassword,
  destroy
} from './controller'
import { schema } from './model'
export User, { schema } from './model'

const router = new Router()
const {
  email,
  password,
  name,
  picture,
  salutationId,
  lastName,
  mobile,
  title,
  locked,
  isInternal,
  verified,
  phoneVerified,
  phoneVerifiedDate,
  portalAccess,
  role,

  dashboardId,
  dashboard,
  dashboardURL,
  entityId,
  entityCode,
  stateId,
  stateCode,
  statusId,
  status,
  categoryId,
  category,
  categoryCodeId,
  categoryCode,
  employeeId,
  partyId,
  isTeamLeader, featureModules, additionalModules, buId, unitName, reportsToUUID, reportsTo
} = schema.tree

router.get(
  '/',
  // token({ required: true}),
  query(),
  index
)

router.get(
  '/me',
  // token({ required: true }),
  showMe
)

router.get('/:id', show)

router.post(
  '/',
  // master(),
  body({
    email,
    password,
    name,
    picture,
    salutationId,
    lastName,
    mobile,
    title,
    locked,
    isInternal,
    verified,
    phoneVerified,
    phoneVerifiedDate,
    portalAccess,
    role,
    dashboardId,
    dashboard,
    dashboardURL,
    entityId,
    entityCode,
    stateId,
    stateCode,
    statusId,
    status,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    employeeId,
    partyId,
    isTeamLeader,
    featureModules,
    additionalModules,
    buId,
    unitName,
    reportsToUUID,
    reportsTo
  }),
  create
)

router.put(
  '/:id',
  // token({ required: true }),
  body({
    name,
    picture,
    salutationId,
    lastName,
    mobile,
    title,
    locked,
    isInternal,
    verified,
    phoneVerified,
    phoneVerifiedDate,
    portalAccess,
    role,
    dashboardId,
    dashboard,
    dashboardURL,
    entityId,
    entityCode,
    stateId,
    stateCode,
    statusId,
    status,
    categoryId,
    category,
    categoryCodeId,
    categoryCode,
    employeeId,
    partyId,
    isTeamLeader,
    featureModules,
    additionalModules,
    buId,
    unitName,
    reportsToUUID,
    reportsTo
  }),
  update
)

/**
 * @api {put} /users/:id/password Update password
 * @apiName UpdatePassword
 * @apiGroup User
 * @apiHeader {String} Authorization Basic authorization with email and password.
 * @apiParam {String{6..}} password Users new password.
 * @apiSuccess (Success 201) {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Current user access only.
 * @apiError 404 User not found.
 */
router.put('/:id/password', passwordAuth(), body({ password }), updatePassword)

/**
 * @api {delete} /users/:id Delete user
 * @apiName DeleteUser
 * @apiGroup User
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 401 Admin access only.
 * @apiError 404 User not found.
 */
router.delete(
  '/:id',
  // token({ required: true }),
  destroy
)

export default router
