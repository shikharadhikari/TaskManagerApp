import express from 'express';
import validator from '../middleware/validator.js';
import validateObjectId from '../middleware/validateObjectId.js';
import { createTaskSchema, updateTaskSchema } from '../validators/taskValidators.js';
import { createTask, getAllTasks, getTaskById, updateTask, deleteTask } from '../controllers/taskController.js';
import { requireAuth } from '../middleware/auth.js';
import authorizeRoles from '../middleware/role.js';
import { checkTaskOwnership } from '../middleware/ownership.js';
const router = express.Router();

router.post('/', requireAuth, validator(createTaskSchema), createTask);
router.get('/', requireAuth, checkTaskOwnership, getAllTasks);
router.get('/:id', requireAuth, checkTaskOwnership, getTaskById);
router.put('/:id', requireAuth, checkTaskOwnership, validator(updateTaskSchema), updateTask);
router.delete('/:id', requireAuth, checkTaskOwnership, deleteTask);

export default router;