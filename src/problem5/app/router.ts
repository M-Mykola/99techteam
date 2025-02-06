import { Router } from 'express';
import {
  createResource,
  deleteResource,
  getResource,
  getResourceById,
  updateResourceById,
} from './resource.controller';

const router = Router();

router.post('/api/resource', createResource);
router.get('/api/resource', getResource);
router.get('/api/resource/:id', getResourceById);
router.put('/api/resource/:id', updateResourceById);
router.delete('/api/resource/:id', deleteResource);

export default router;
