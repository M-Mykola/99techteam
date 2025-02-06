import { Request, Response, NextFunction } from 'express';
import Resource from './schema';

async function createResource(req: Request, res: Response, next: NextFunction) {
  try {
    const resource = await Resource.create({
      name: req.body.name,
      text: req.body.text,
    });
    res.status(201).json(resource);
  } catch (error) {
    next(error);
  }
}
async function getResource(req: Request, res: Response, next: NextFunction) {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (error) {
    next(error);
  }
}

async function getResourceById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) throw 'Resource not found';
    res.status(200).json(resource);
  } catch (error) {
    next(error);
  }
}

async function updateResourceById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedResource) throw 'Resource not found';
    res.status(200).json(updatedResource);
  } catch (error) {
    next(error);
  }
}

async function deleteResource(req: Request, res: Response, next: NextFunction) {
  try {
    const deleted = await Resource.findByIdAndDelete(req.params.id);
    if (!deleted) throw `Resource not found with ID: ${req.params.id}`;

    res.status(200).json({ message: 'Resource deleted successfully', deleted });
  } catch (error) {
    next(error);
  }
}

export {
  deleteResource,
  updateResourceById,
  getResourceById,
  createResource,
  getResource,
};
