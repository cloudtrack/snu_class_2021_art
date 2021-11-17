// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Student, StudentClass, Class, Assignment, ArtWork, Comment, Teacher } = initSchema(schema);

export {
  Student,
  StudentClass,
  Class,
  Assignment,
  ArtWork,
  Comment,
  Teacher
};