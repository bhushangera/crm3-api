import { success, notFound } from '../../services/response/'
import { Company } from '.'

export const create = ({ body }, res, next) =>
  Company.create(body)
    .then((company) => company.view(true))
    .then(success(res, 201))
    .catch(next)

// export const index = ({ querymen: { query, select } }, res, next) =>
//   Company.count(query)
//     .then(count => Company.find(query, select)
//       .then((companies) => ({
//         count,
//         rows: companies.map((company) => company.view())
//       }))
//     )
//     .then(success(res))
//     .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  Company.find(query, select)
         .then((companies) =>  companies.map((company) => company.view()))
        .then(success(res))
        .catch(next)

export const show = ({ params }, res, next) =>
  Company.findById(params.id)
    .then(notFound(res))
    .then((company) => company ? company.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ body, params }, res, next) =>
  Company.findById(params.id)
    .then(notFound(res))
    .then((company) => company ? Object.assign(company, body).save() : null)
    .then((company) => company ? company.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Company.findById(params.id)
    .then(notFound(res))
    .then((company) => company ? company.remove() : null)
    .then(success(res, 204))
    .catch(next)
