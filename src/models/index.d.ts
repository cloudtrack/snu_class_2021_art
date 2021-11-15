import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type StudentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StudentClassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClassMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AssignmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ArtWorkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeacherMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Student {
  readonly id: string;
  readonly email?: string;
  readonly email_verified?: boolean;
  readonly name?: string;
  readonly profile?: string;
  readonly role?: string;
  readonly ClassJoined?: (StudentClass | null)[];
  readonly ArtWorks?: (ArtWork | null)[];
  readonly Comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Student, StudentMetaData>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student, StudentMetaData>) => MutableModel<Student, StudentMetaData> | void): Student;
}

export declare class StudentClass {
  readonly id: string;
  readonly student: Student;
  readonly class: Class;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<StudentClass, StudentClassMetaData>);
  static copyOf(source: StudentClass, mutator: (draft: MutableModel<StudentClass, StudentClassMetaData>) => MutableModel<StudentClass, StudentClassMetaData> | void): StudentClass;
}

export declare class Class {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly Assignments?: (Assignment | null)[];
  readonly ArtWorks?: (ArtWork | null)[];
  readonly startDate?: string;
  readonly students?: (StudentClass | null)[];
  readonly teacherID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Class, ClassMetaData>);
  static copyOf(source: Class, mutator: (draft: MutableModel<Class, ClassMetaData>) => MutableModel<Class, ClassMetaData> | void): Class;
}

export declare class Assignment {
  readonly id: string;
  readonly description?: string;
  readonly openTime?: string;
  readonly ArtWorks?: (ArtWork | null)[];
  readonly deadline?: string;
  readonly classID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Assignment, AssignmentMetaData>);
  static copyOf(source: Assignment, mutator: (draft: MutableModel<Assignment, AssignmentMetaData>) => MutableModel<Assignment, AssignmentMetaData> | void): Assignment;
}

export declare class ArtWork {
  readonly id: string;
  readonly classID?: string;
  readonly Comments?: (Comment | null)[];
  readonly assignmentID?: string;
  readonly title?: string;
  readonly image?: string;
  readonly description?: string;
  readonly grade?: number;
  readonly studentID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ArtWork, ArtWorkMetaData>);
  static copyOf(source: ArtWork, mutator: (draft: MutableModel<ArtWork, ArtWorkMetaData>) => MutableModel<ArtWork, ArtWorkMetaData> | void): ArtWork;
}

export declare class Comment {
  readonly id: string;
  readonly message: string;
  readonly artworkID?: string;
  readonly submitTime?: string;
  readonly studentID?: string;
  readonly teacherID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Teacher {
  readonly id: string;
  readonly email?: string;
  readonly email_verified?: boolean;
  readonly name?: string;
  readonly profile?: string;
  readonly role?: string;
  readonly ClassesOpened?: (Class | null)[];
  readonly Comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Teacher, TeacherMetaData>);
  static copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher, TeacherMetaData>) => MutableModel<Teacher, TeacherMetaData> | void): Teacher;
}