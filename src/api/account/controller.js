import { success, notFound } from "../../services/response/";
import { Account } from ".";

export const create = ({ bodymen: { body } }, res, next) =>
  Account.create(body)
    .then((account) => account.view(true))
    .then(success(res, 201))
    .catch(next);

export const index = ({ querymen: { query, select } }, res, next) =>
  Account.find(query, select)
    .then((accounts) => accounts.map((account) => account.view()))
    .then(success(res))
    .catch(next);

export const show = ({ params }, res, next) =>
  Account.findById(params.id)
    .then(notFound(res))
    .then((account) => (account ? account.view() : null))
    .then(success(res))
    .catch(next);

export const update = ({ bodymen: { body }, params }, res, next) =>
  Account.findById(params.id)
    .then(notFound(res))
    .then((account) => (account ? Object.assign(account, body).save() : null))
    .then((account) => (account ? account.view(true) : null))
    .then(success(res))
    .catch(next);

export const destroy = ({ params }, res, next) =>
  Account.findById(params.id)
    .then(notFound(res))
    .then((account) => (account ? account.remove() : null))
    .then(success(res, 204))
    .catch(next);
