import { success, notFound } from "../../services/response/";
import { Channels } from ".";

export const create = ({ bodymen: { body } }, res, next) =>
  Channels.create(body)
    .then((channels) => channels.view(true))
    .then(success(res, 201))
    .catch(next);

// export const index = ({ querymen: { query, select } }, res, next) =>
//   Channels.find(query, select)
//     .then((channels) => channels.map((channels) => channels.view()))
//     .then(success(res))
//     .catch(next)
export const index = (req, res, next) => {
  var url = require("url");
  var string = url.parse(req.url, true);
  var query = string.query;
  Channels.find(query)
    .then((channels) => channels.map((channels) => channels.view()))
    .then(success(res))
    .catch(next);
};

// console.log(req);
// Channels.find(req)
//   .then((channels) => channels.map((channels) => channels.view()))
//   .then(success(res))
//   .catch(next)

export const show = ({ params }, res, next) =>
  Channels.findById(params.id)
    .then(notFound(res))
    .then((channels) => (channels ? channels.view() : null))
    .then(success(res))
    .catch(next);

export const update = ({ bodymen: { body }, params }, res, next) =>
  Channels.findById(params.id)
    .then(notFound(res))
    .then((channels) =>
      channels ? Object.assign(channels, body).save() : null
    )
    .then((channels) => (channels ? channels.view(true) : null))
    .then(success(res))
    .catch(next);

export const destroy = ({ params }, res, next) =>
  Channels.findById(params.id)
    .then(notFound(res))
    .then((channels) => (channels ? channels.remove() : null))
    .then(success(res, 204))
    .catch(next);
