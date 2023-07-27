import { SchemaTypeDefinition } from "sanity";
import category from "./schemas/category";
import blockContent from "./schemas/blockContent";
import post from "./schemas/post";
import { readingTimeType } from "./schemas/types/ReadingTimeInput";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [category, post, blockContent, readingTimeType],
}
  