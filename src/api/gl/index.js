import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Gl, { schema } from './model'

const router = new Router()
const { txDate, debitACId, creditACId, debitAC, creditAC, amount, postedById, postedBy, approvedById, approovedBy, verifiedById, verifiedBy, vDate, aDate, remarks, opdId, ipdId, pInvId, erId, UHID, partyId, patientName, bookingId, partyName, accountType, code, description, txnType, modified } = schema.tree

/**
 * @api {post} /gl Create gl
 * @apiName CreateGl
 * @apiGroup Gl
 * @apiParam txDate Gl's txDate.
 * @apiParam debitACId Gl's debitACId.
 * @apiParam creditACId Gl's creditACId.
 * @apiParam debitAC Gl's debitAC.
 * @apiParam creditAC Gl's creditAC.
 * @apiParam amount Gl's amount.
 * @apiParam postedById Gl's postedById.
 * @apiParam postedBy Gl's postedBy.
 * @apiParam approvedById Gl's approvedById.
 * @apiParam approovedBy Gl's approovedBy.
 * @apiParam verifiedById Gl's verifiedById.
 * @apiParam verifiedBy Gl's verifiedBy.
 * @apiParam vDate Gl's vDate.
 * @apiParam aDate Gl's aDate.
 * @apiParam remarks Gl's remarks.
 * @apiParam opdId Gl's opdId.
 * @apiParam ipdId Gl's ipdId.
 * @apiParam pInvId Gl's pInvId.
 * @apiParam erId Gl's erId.
 * @apiParam UHID Gl's UHID.
 * @apiParam partyId Gl's partyId.
 * @apiParam patientName Gl's patientName.
 * @apiParam bookingId Gl's bookingId.
 * @apiParam partyName Gl's partyName.
 * @apiParam accountType Gl's accountType.
 * @apiParam code Gl's code.
 * @apiParam description Gl's description.
 * @apiParam txnType Gl's txnType.
 * @apiParam modified Gl's modified.
 * @apiSuccess {Object} gl Gl's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gl not found.
 */
router.post('/',
  body({ txDate, debitACId, creditACId, debitAC, creditAC, amount, postedById, postedBy, approvedById, approovedBy, verifiedById, verifiedBy, vDate, aDate, remarks, opdId, ipdId, pInvId, erId, UHID, partyId, patientName, bookingId, partyName, accountType, code, description, txnType, modified }),
  create)

/**
 * @api {get} /gl Retrieve gls
 * @apiName RetrieveGls
 * @apiGroup Gl
 * @apiUse listParams
 * @apiSuccess {Object[]} gls List of gls.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /gl/:id Retrieve gl
 * @apiName RetrieveGl
 * @apiGroup Gl
 * @apiSuccess {Object} gl Gl's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gl not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /gl/:id Update gl
 * @apiName UpdateGl
 * @apiGroup Gl
 * @apiParam txDate Gl's txDate.
 * @apiParam debitACId Gl's debitACId.
 * @apiParam creditACId Gl's creditACId.
 * @apiParam debitAC Gl's debitAC.
 * @apiParam creditAC Gl's creditAC.
 * @apiParam amount Gl's amount.
 * @apiParam postedById Gl's postedById.
 * @apiParam postedBy Gl's postedBy.
 * @apiParam approvedById Gl's approvedById.
 * @apiParam approovedBy Gl's approovedBy.
 * @apiParam verifiedById Gl's verifiedById.
 * @apiParam verifiedBy Gl's verifiedBy.
 * @apiParam vDate Gl's vDate.
 * @apiParam aDate Gl's aDate.
 * @apiParam remarks Gl's remarks.
 * @apiParam opdId Gl's opdId.
 * @apiParam ipdId Gl's ipdId.
 * @apiParam pInvId Gl's pInvId.
 * @apiParam erId Gl's erId.
 * @apiParam UHID Gl's UHID.
 * @apiParam partyId Gl's partyId.
 * @apiParam patientName Gl's patientName.
 * @apiParam bookingId Gl's bookingId.
 * @apiParam partyName Gl's partyName.
 * @apiParam accountType Gl's accountType.
 * @apiParam code Gl's code.
 * @apiParam description Gl's description.
 * @apiParam txnType Gl's txnType.
 * @apiParam modified Gl's modified.
 * @apiSuccess {Object} gl Gl's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Gl not found.
 */
router.put('/:id',
  body({ txDate, debitACId, creditACId, debitAC, creditAC, amount, postedById, postedBy, approvedById, approovedBy, verifiedById, verifiedBy, vDate, aDate, remarks, opdId, ipdId, pInvId, erId, UHID, partyId, patientName, bookingId, partyName, accountType, code, description, txnType, modified }),
  update)

/**
 * @api {delete} /gl/:id Delete gl
 * @apiName DeleteGl
 * @apiGroup Gl
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Gl not found.
 */
router.delete('/:id',
  destroy)

export default router
