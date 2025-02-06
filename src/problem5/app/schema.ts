import mongoose, { Schema, Model } from 'mongoose';
import { IResource } from './resource.interface';

const ResourceSchema: Schema<IResource> = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
});

const Resource: Model<IResource> = mongoose.model<IResource>(
  'Resource',
  ResourceSchema
);

export default Resource;
