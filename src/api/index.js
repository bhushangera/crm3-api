import { Router } from 'express'
import user from './user'
import auth from './auth'
import passwordReset from './password-reset'
import make from './make'
import company from './company'
import product from './product'
import productCatergory from './productCatergory'
import materialBrands from './materialBrands'
import brandSeries from './brandSeries'
import materials from './materials'
import articleCodes from './articleCodes'
import banner from './banner'
import productImages from './productImages'
import userAddress from './userAddress'
import dealerProfile from './dealerProfile'
import leads from './leads'
import leadTrack from './leadTrack'
import sendMail from './sendMail'
import dummy from './dummy'
import enquiries from './enquiries'
import enqAttachments from './enqAttachments'
import dpCategories from './dpCategories'
import dlrProducts from './dlrProducts'
import channelTypes from './channelTypes'
import channels from './channels'
import carcaseConfigs from './carcaseConfigs'
import partCategories from './partCategories'
import partCodes from './partCodes'
import pi from './pi'
// import piArticles from './piArticles'
import piCarcase from './piCarcase'
import piShutter from './piShutter'
// import piVisibleSide from './piVisibleSide'
// import piAccessory from './piAccessory'
// import piCuttingList from './piCuttingList'
// import shutterConfigs from './shutterConfigs'
// import enqUploads from './enqUploads'
import profileUploads from './profileUploads'
import wastage from './wastage'
// import seriesArticles from './seriesArticles'

// parties module 01-20
import parties from './parties' // 01
import partyDiscountStructures from './partyDiscountStructures' // 08

// hr
import employeePerformance from './employeePerformance'
import hrPositions from './hrPositions'
import jd from './jd'
import payGrades from './payGrades'
import payroll from './payroll'
import payrollScroll from './payrollScroll'
import timeSheets from './timeSheets'

// factors
import performanceRating from './performanceRating'

import fixedAssetAssignments from './fixedAssetAssignments'
import tickets from './tickets'
import ticketGroups from './ticketGroups'
import ticketTypes from './ticketTypes'
import workEfforts from './workEfforts'
import workEffortsScroll from './workEffortsScroll'
import workEffortTypes from './workEffortTypes'
import regions from './regions'
import countries from './countries'
import states from './states'
import locations from './locations'
import territories from './territories'

import calenderDays from './calenderDays'
import calenderMonths from './calenderMonths'
import calenderWeeks from './calenderWeeks'
import uom from './uom'
// import assetServiceParties from './assetServiceParties'
import fixedAssets from './fixedAssets'
import fixedAssetMaintenance from './fixedAssetMaintenance'
import fixedAssetTypes from './fixedAssetTypes'

import ag from './ag'
import ar from './ar'
import articles from './articles'
import sku from './sku'
import skuLocations from './skuLocations'
import skuSuppliers from './skuSuppliers'
import units from './units'
import ars from './ARS'
// import moq from './MOQ'
import shoppingCart from './shoppingCart'
import orderTracking from './orderTracking'
// import orderShippingDetail from './orderShippingDetail'
import orderScroll from './orderScroll'
import orderPayment from './orderPayment'

// import orderInvoice from './orderInvoice'
// import orderFeedback from './orderFeedback'
import userTokens from './userTokens'

import pars from './pars'
import counters from './counters'
import contactus from './contactus'

import tapeDecor from './tapeDecor'
import consumables from './consumables'
import recipe from './recipe'

import hwpack from './hwpack'
import hwpackdetail from './hwpackdetail'

import accounttype from './accounttype'
import account from './account'
import gl from './gl'

import cities from './cities'
import salutations from './salutations'

import tcities from './tcities'
import departments from './departments'
import businessunits from './businessunits'
import dashboards from './dashboards'
import customersegments from './customersegments'
// import shippingmethods from './shippingmethods'
import paymentmodes from './paymentmodes'
import fiscalYears from './fiscal-years'
import accountingdimensions from './accountingdimensions'
import vouchers from './vouchers'

import purchaseOrders from './purchaseOrders'
import materialrequests from './materialrequests'
import quotationRequest from './QuotationRequest'
import supplierQuotations from './SupplierQuotations'
import salesOrders from './SalesOrders'
import stockEntry from './StockEntry'
import deliveryNote from './DeliveryNote'
import warehouse from './Warehouse'
import serialNumbers from './SerialNumbers'
import batchNumbers from './BatchNumbers'
import assets from './Assets'
import assetCategories from './AssetCategories'
import assetStatusCodes from './AssetStatusCodes'
import assetLocations from './AssetLocations'
import awards from './Awards'
import attendance from './Attendance'
import attendanceRequest from './AttendanceRequest'
import transfers from './Transfers'
import resignations from './Resignations'
import travels from './Travels'
import promotions from './Promotions'
import complaints from './Complaints'
import warnings from './Warnings'
import terminations from './Terminations'
import jobOpenings from './JobOpenings'
import jobApplications from './JobApplications'
import trainings from './Trainings'
import trainers from './Trainers'
import trainingTypes from './TrainingTypes'
import performanceIndicators from './PerformanceIndicators'
import goals from './Goals'
import goalTypes from './GoalTypes'
import appraisals from './Appraisals'
import holidays from './Holidays'
import leavePolicies from './LeavePolicies'
import teams from './Teams'
import teamMembers from './TeamMembers'
import overTimeTypes from './OverTimeTypes'
import allowanceTypes from './AllowanceTypes'
import workOrders from './WorkOrders'
import productionPlan from './ProductionPlan'
import jobCards from './JobCards'
import workStations from './WorkStations'
import operations from './Operations'
import routing from './Routing'
import projects from './Projects'
import projectCategories from './ProjectCategories'
import projectStatusCodes from './ProjectStatusCodes'
import projectMilestomes from './ProjectMilestomes'
import issues from './Issues'
import issueTypes from './IssueTypes'
import todo from './todo'
import sms from './sms'
import notifications from './Notifications'
import activityLog from './ActivityLog'
import paymentTerms from './PaymentTerms'
import smsTransactions from './SMSTransactions'
import subscription from './Subscription'
import promoEmails from './PromoEmails'
import integrations from './Integrations'
import smsCounter from './SMSCounter'
import messaging from './Messaging'
import timeshifts from './timeshifts'
import visitors from './Visitors'
import postal from './Postal'
import gatePass from './GatePass'
import visitorTypes from './VisitorTypes'
import gatePassTypes from './GatePassTypes'
import postalTypes from './PostalTypes'
import icons from './icons'
import colors from './colors'
import permissions from './permissions'
import roles from './roles'
import featureModules from './featureModules'
import license from './license'
import plans from './plans'
import saas from './saas'
import licenseFeatures from './licenseFeatures'
import userPermissions from './userPermissions'
import employees from './employees'
import healthExam from './healthExam'
import contacts from './contacts'
import officialDocs from './officialDocs'
import designations from './designations'
import campaignTypes from './campaignTypes'
import leadStatusCodes from './leadStatusCodes'
import dealStatusTypes from './dealStatusTypes'
import quotationStatusCodes from './quotationStatusCodes'
import tenderTypes from './tenderTypes'
import piStatusCodes from './piStatusCodes'
import campaigns from './campaigns'
import quotations from './quotations'
import tenders from './tenders'
import deals from './deals'
import leadCategories from './leadCategories'
import quotationScroll from './quotationScroll'
import dealStatusCodes from './dealStatusCodes'
import sectors from './sectors'
import campaignStatusCodes from './CampaignStatusCodes'
import statusEntities from './statusEntities'
import statusCodes from './statusCodes'
import statusReasons from './statusReasons'
import categoryEntities from './CategoryEntities'
import categoryCodes from './CategoryCodes'
import categoryReasons from './categoryReasons'
import entityGroups from './entityGroups'
import webpages from './webpages'
import websiteSettings from './websiteSettings'
import pageTags from './pageTags'
import docUploads from './docUploads'
import ifsc from './ifsc'
import loginTracker from './loginTracker'
import entityState from './entityState'
import entityCategory from './entityCategory'
import entities from './entities'
import activities from './activities'
import salesEnquiries from './salesEnquiries'
import marketingLists from './marketingLists'
import cloudPlans from './cloudPlans'
import planRenewals from './planRenewals'
import razorpay from './razorpay'
import crmsettings from './crmsettings'
import companyPolicies from './companyPolicies'
import shadeSwatches from './shadeSwatches'
import awsUpload from './awsUpload'
import scaleCharts from './scaleCharts'
import priceVariants from './priceVariants'
import taxRates from './taxRates'
import currency from './currency'
// import shippingTerms from './shippingTerms'
import panelSize from './panelSize'
import priceBook from './priceBook'
import moduleVariant from './moduleVariant'
import componentModule from './componentModule'
import piModular from './piModular'
import piFurniture from './piFurniture'
import piDoor from './piDoor'
import piPanel from './piPanel'
import piCivil from './piCivil'
import piInterior from './piInterior'
import operativeFactors from './operativeFactors'
import awsBucket from './awsBucket'
import piModularComponents from './piModularComponents'

const router = new Router()
router.use('/users', user)
router.use('/auth', auth)
router.use('/password-resets', passwordReset)
router.use('/makes', make)
router.use('/company', company)
router.use('/products', product)
router.use('/productCatergories', productCatergory)
router.use('/materialBrands', materialBrands)
router.use('/brandSeries', brandSeries)
router.use('/materials', materials)
router.use('/articleCodes', articleCodes)
router.use('/productImages', productImages)
router.use('/userAddress', userAddress)
router.use('/dealerProfile', dealerProfile)
router.use('/leads', leads)
router.use('/leadTrack', leadTrack)
router.use('/sendMail', sendMail)
router.use('/dummy', dummy)
router.use('/enquiries', enquiries)
router.use('/enqAttachments', enqAttachments)
router.use('/dpCategories', dpCategories)
router.use('/dlrProducts', dlrProducts)
router.use('/channelTypes', channelTypes)
router.use('/channels', channels)
router.use('/carcaseConfigs', carcaseConfigs)
router.use('/partCategories', partCategories)
router.use('/partCodes', partCodes)
router.use('/pi', pi)
router.use('/piCarcase', piCarcase)
router.use('/PIShutter', piShutter)
router.use('/profileUploads', profileUploads)
router.use('/wastage', wastage)
// parties
router.use('/parties', parties) // 01

router.use('/partyDiscountStructures', partyDiscountStructures) // 08
// hr
router.use('/employeePerformance', employeePerformance) // 01
router.use('/hrPositions', hrPositions) // 02
router.use('/jd', jd) // 03
router.use('/payGrades', payGrades) // 04
router.use('/payroll', payroll) // 05
router.use('/payrollScroll', payrollScroll) // 06
router.use('/timeSheets', timeSheets) // 07

// common
router.use('/rating', performanceRating) // 01

router.use('/fixedAssetAssignments', fixedAssetAssignments)
router.use('/tickets', tickets)
router.use('/ticketGroups', ticketGroups)
router.use('/ticketTypes', ticketTypes)
router.use('/workEfforts', workEfforts)
router.use('/workEffortsScroll', workEffortsScroll)
router.use('/workEffortTypes', workEffortTypes)
router.use('/regions', regions)
router.use('/countries', countries)
router.use('/states', states)
router.use('/locations', locations)
router.use('/territories', territories)

router.use('/calenderDays', calenderDays)
router.use('/calenderMonths', calenderMonths)
router.use('/calenderWeeks', calenderWeeks)
router.use('/uom', uom)
// router.use('/assetServiceParties', assetServiceParties)
router.use('/fixedAssets', fixedAssets)
router.use('/fixedAssetMaintenance', fixedAssetMaintenance)
router.use('/fixedAssetTypes', fixedAssetTypes)

router.use('/ag', ag)
router.use('/ar', ar)
router.use('/articles', articles)
router.use('/sku', sku)
// router.use('/skuPager', skuPager)
router.use('/skuLocations', skuLocations)
router.use('/skuSuppliers', skuSuppliers)
router.use('/units', units)
router.use('/ARS', ars)
// router.use('/MOQ', moq)
router.use('/shoppingCart', shoppingCart)
router.use('/orderTracking', orderTracking)
// router.use('/orderShippingDetail', orderShippingDetail)
router.use('/orderScroll', orderScroll)
router.use('/orderPayment', orderPayment)
// router.use('/order', order)
// router.use('/orderInvoice', orderInvoice)
// router.use('/orderFeedback', orderFeedback)
router.use('/userTokens', userTokens)
router.use('/pars', pars)
router.use('/banner', banner)
router.use('/counters', counters)
router.use('/contactus', contactus)
router.use('/tapeDecors', tapeDecor)
router.use('/consumables', consumables)
router.use('/recipe', recipe)
router.use('/hwpack', hwpack)
router.use('/hwpackdetail', hwpackdetail)
// accounts
router.use('/accounttype', accounttype)
router.use('/account', account)
router.use('/gl', gl)
router.use('/cities', cities)
router.use('/salutations', salutations)
router.use('/tcities', tcities)
router.use('/departments', departments)
router.use('/businessunits', businessunits)
router.use('/dashboards', dashboards)
router.use('/dashboards', dashboards)
router.use('/customersegments', customersegments)
// router.use('/shippingmethods', shippingmethods)
router.use('/paymentmodes', paymentmodes)
router.use('/tax-rates', taxRates)
router.use('/fiscal-years', fiscalYears)
router.use('/accountingdimensions', accountingdimensions)
router.use('/vouchers', vouchers)
// router.use('/accountingquarters', accountingquarters)
router.use('/purchaseOrders', purchaseOrders)
router.use('/materialrequests', materialrequests)
router.use('/QuotationRequest', quotationRequest)
router.use('/SupplierQuotations', supplierQuotations)
router.use('/SalesOrders', salesOrders)
router.use('/StockEntry', stockEntry)
router.use('/DeliveryNote', deliveryNote)
router.use('/Warehouse', warehouse)
router.use('/SerialNumbers', serialNumbers)
router.use('/BatchNumbers', batchNumbers)
router.use('/Assets', assets)
router.use('/AssetCategories', assetCategories)
router.use('/AssetStatusCodes', assetStatusCodes)
router.use('/AssetLocations', assetLocations)
router.use('/Awards', awards)
router.use('/Attendance', attendance)
router.use('/AttendanceRequest', attendanceRequest)
router.use('/Transfers', transfers)
router.use('/Resignations', resignations)
router.use('/Travels', travels)
router.use('/Promotions', promotions)
router.use('/Complaints', complaints)
router.use('/Warnings', warnings)
router.use('/Terminations', terminations)
router.use('/JobOpenings', jobOpenings)
router.use('/JobApplications', jobApplications)
router.use('/Trainings', trainings)
router.use('/Trainers', trainers)
router.use('/TrainingTypes', trainingTypes)
router.use('/PerformanceIndicators', performanceIndicators)
router.use('/Goals', goals)
router.use('/GoalTypes', goalTypes)
router.use('/Appraisals', appraisals)
router.use('/Holidays', holidays)
router.use('/LeavePolicies', leavePolicies)
router.use('/Teams', teams)
router.use('/TeamMembers', teamMembers)
router.use('/OverTimeTypes', overTimeTypes)
router.use('/AllowanceTypes', allowanceTypes)
router.use('/WorkOrders', workOrders)
router.use('/ProductionPlan', productionPlan)
router.use('/JobCards', jobCards)
router.use('/WorkStations', workStations)
router.use('/Operations', operations)
router.use('/Routing', routing)
router.use('/Projects', projects)
router.use('/ProjectCategories', projectCategories)
router.use('/ProjectStatusCodes', projectStatusCodes)
router.use('/ProjectMilestomes', projectMilestomes)
router.use('/Issues', issues)
router.use('/IssueTypes', issueTypes)
router.use('/todo', todo)
router.use('/sms', sms)
router.use('/Notifications', notifications)
router.use('/ActivityLog', activityLog)
router.use('/PaymentTerms', paymentTerms)
router.use('/SMSTransactions', smsTransactions)
router.use('/Subscription', subscription)
router.use('/PromoEmails', promoEmails)
router.use('/Integrations', integrations)
router.use('/SMSCounter', smsCounter)
router.use('/Messaging', messaging)
router.use('/timeshifts', timeshifts)
router.use('/Visitors', visitors)
router.use('/Postal', postal)
router.use('/GatePass', gatePass)
router.use('/VisitorTypes', visitorTypes)
router.use('/GatePassTypes', gatePassTypes)
router.use('/PostalTypes', postalTypes)
router.use('/icons', icons)
router.use('/colors', colors)
router.use('/permissions', permissions)
router.use('/roles', roles)
router.use('/featureModules', featureModules)
router.use('/license', license)
router.use('/plans', plans)
router.use('/saas', saas)
router.use('/licenseFeatures', licenseFeatures)
router.use('/userPermissions', userPermissions)
router.use('/employees', employees)
router.use('/healthExam', healthExam)
router.use('/contacts', contacts)
router.use('/officialDocs', officialDocs)
router.use('/designations', designations)
router.use('/campaignTypes', campaignTypes)
router.use('/leadStatusCodes', leadStatusCodes)
router.use('/dealStatusTypes', dealStatusTypes)
router.use('/quotationStatusCodes', quotationStatusCodes)
router.use('/tenderTypes', tenderTypes)
router.use('/piStatusCodes', piStatusCodes)
router.use('/campaigns', campaigns)
router.use('/quotations', quotations)
router.use('/tenders', tenders)
router.use('/deals', deals)
router.use('/leadCategories', leadCategories)
router.use('/quotationScroll', quotationScroll)
router.use('/dealStatusCodes', dealStatusCodes)
router.use('/sectors', sectors)
router.use('/CampaignStatusCodes', campaignStatusCodes)
router.use('/statusEntities', statusEntities)
router.use('/statusCodes', statusCodes)
router.use('/statusReasons', statusReasons)
router.use('/CategoryEntities', categoryEntities)
router.use('/CategoryCodes', categoryCodes)
router.use('/categoryReasons', categoryReasons)
router.use('/entityGroups', entityGroups)
router.use('/webpages', webpages)
router.use('/websiteSettings', websiteSettings)
router.use('/pageTags', pageTags)
router.use('/docUploads', docUploads)
router.use('/ifsc', ifsc)
router.use('/loginTracker', loginTracker)
router.use('/entityStates', entityState)
router.use('/entityCategory', entityCategory)
router.use('/entities', entities)
router.use('/activities', activities)
router.use('/salesEnquiries', salesEnquiries)
router.use('/marketingLists', marketingLists)
router.use('/cloudPlans', cloudPlans)
router.use('/planRenewals', planRenewals)
router.use('/razorpay', razorpay)
router.use('/crmsettings', crmsettings)
router.use('/companyPolicies', companyPolicies)
router.use('/shadeSwatches', shadeSwatches)
router.use('/awsUpload', awsUpload)
router.use('/scaleCharts', scaleCharts)
router.use('/priceVariants', priceVariants)
router.use('/taxRates', taxRates)
router.use('/currency', currency)
// router.use('/shippingTerms', shippingTerms)
router.use('/panelSize', panelSize)
router.use('/priceBook', priceBook)
router.use('/moduleVariant', moduleVariant)
router.use('/componentModule', componentModule)
router.use('/piModular', piModular)
router.use('/piFurniture', piFurniture)
router.use('/piDoor', piDoor)
router.use('/piPanel', piPanel)
router.use('/piCivil', piCivil)
router.use('/piInterior', piInterior)
router.use('/operativeFactors', operativeFactors)
router.use('/awsBucket', awsBucket)
router.use('/piModularComponents', piModularComponents)

// 02 regions
// 03 countries
// 04 territories
// 05 geoLocations

export default router
