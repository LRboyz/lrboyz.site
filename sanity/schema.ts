import { type SchemaTypeDefinition } from 'sanity';
import post, { readingTimeType } from './schemas/post';
import category from './schemas/category';
import blockContent from './schemas/blockContent';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [readingTimeType, post, category, blockContent],
};
