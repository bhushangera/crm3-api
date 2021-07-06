import { success, notFound } from '../../services/response/'
import { ProductCatergory } from '.'

export const create = ({ body }, res, next) =>
  ProductCatergory.create(body)
    .then((productCatergory) => productCatergory.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select } }, res, next) =>
  ProductCatergory.count(query)
    .then(count => ProductCatergory.find(query, select)
      .then((productCatergories) => ({
        count,
        rows: productCatergories.map((productCatergory) => productCatergory.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  ProductCatergory.findById(params.id)
    .then(notFound(res))
    .then((productCatergory) => productCatergory ? productCatergory.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ body, params }, res, next) =>
  ProductCatergory.findById(params.id)
    .then(notFound(res))
    .then((productCatergory) => productCatergory ? Object.assign(productCatergory, body).save() : null)
    .then((productCatergory) => productCatergory ? productCatergory.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  ProductCatergory.findById(params.id)
    .then(notFound(res))
    .then((productCatergory) => productCatergory ? productCatergory.remove() : null)
    .then(success(res, 204))
    .catch(next)
