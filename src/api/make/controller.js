import { success, notFound } from "../../services/response/";
import { Make } from ".";

export const create = ({ bodymen: { body } }, res, next) =>
  Make.create(body)
    .then((make) => make.view(true))
    .then(success(res, 201))
    .catch(next);

// export const index = ({ querymen: { query, select } }, res, next) =>
//   Make.find(query, select)
//     .then((makes) => makes.map((make) => make.view()))
//     .then(success(res))
//     .catch(next);

export const index = ({ querymen: { query, select } }, res, next) => {
  // var q = req.params || {}
  // console.log(q)
  Make.find(query, select)
    .then((makes) => makes.map((make) => make.view()))
    .then(success(res))
    .catch(next);
};

// export const index = ({ querymen: { query, select } }, res, next) =>
//   Make.count(query)
//     .then(count => Make.find(query, select)
//       .then((makes) => ({
//         count,
//         rows: makes.map((make) => make.view())
//       }))
//     )
//     .then(success(res))
//     .catch(next)

export const show = ({ params }, res, next) =>
  Make.findById(params.id)
    .then(notFound(res))
    .then((make) => (make ? make.view() : null))
    .then(success(res))
    .catch(next);

export const update = ({ bodymen: { body }, params }, res, next) =>
  Make.findById(params.id)
    .then(notFound(res))
    .then((make) => (make ? Object.assign(make, body).save() : null))
    .then((make) => (make ? make.view(true) : null))
    .then(success(res))
    .catch(next);

export const destroy = ({ params }, res, next) =>
  Make.findById(params.id)
    .then(notFound(res))
    .then((make) => (make ? make.remove() : null))
    .then(success(res, 204))
    .catch(next);
