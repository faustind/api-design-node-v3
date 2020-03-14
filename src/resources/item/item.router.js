import { Router } from 'express'

const router = Router()

const controller = (req, res) => {
    res.send({ message: 'done' })
}

router.route('/')
    .get(controller)
    .post(controller)

router.route('/:id')
    .get(controller)
    .delete(controller)
    .put(controller)

export default router
