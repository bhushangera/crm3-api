import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Todo, { schema } from './model'

const router = new Router()
const {
  title,
  dueDate,
  description,
  tags,
  completed,
  delted,
  important,
} = schema.tree

/**
 * @api {post} /todo Create todo
 * @apiName CreateTodo
 * @apiGroup Todo
 * @apiParam code Todo's code.
 * @apiParam description Todo's description.
 * @apiSuccess {Object} todo Todo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Todo not found.
 */
router.post('/',
  body({
    title,
    dueDate,
    description,
    tags,
    completed,
    delted,
    important,
  }),
  create)

/**
 * @api {get} /todo Retrieve todos
 * @apiName RetrieveTodos
 * @apiGroup Todo
 * @apiUse listParams
 * @apiSuccess {Object[]} todos List of todos.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /todo/:id Retrieve todo
 * @apiName RetrieveTodo
 * @apiGroup Todo
 * @apiSuccess {Object} todo Todo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Todo not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /todo/:id Update todo
 * @apiName UpdateTodo
 * @apiGroup Todo
 * @apiParam code Todo's code.
 * @apiParam description Todo's description.
 * @apiSuccess {Object} todo Todo's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Todo not found.
 */
router.put('/:id',
  body({
    title,
    dueDate,
    description,
    tags,
    completed,
    delted,
    important,
  }),
  update)

/**
 * @api {delete} /todo/:id Delete todo
 * @apiName DeleteTodo
 * @apiGroup Todo
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Todo not found.
 */
router.delete('/:id',
  destroy)

export default router
