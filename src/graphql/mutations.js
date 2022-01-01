/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      email
      email_verified
      name
      profile
      role
      ClassJoined {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      ArtWorks {
        items {
          id
          classID
          assignmentID
          title
          image
          description
          grade
          studentID
          likedUser
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      email
      email_verified
      name
      profile
      role
      ClassJoined {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      ArtWorks {
        items {
          id
          classID
          assignmentID
          title
          image
          description
          grade
          studentID
          likedUser
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      email
      email_verified
      name
      profile
      role
      ClassJoined {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      ArtWorks {
        items {
          id
          classID
          assignmentID
          title
          image
          description
          grade
          studentID
          likedUser
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      email
      email_verified
      name
      profile
      role
      ClassesOpened {
        items {
          id
          name
          description
          startDate
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      email
      email_verified
      name
      profile
      role
      ClassesOpened {
        items {
          id
          name
          description
          startDate
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      email
      email_verified
      name
      profile
      role
      ClassesOpened {
        items {
          id
          name
          description
          startDate
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createArtWork = /* GraphQL */ `
  mutation CreateArtWork(
    $input: CreateArtWorkInput!
    $condition: ModelArtWorkConditionInput
  ) {
    createArtWork(input: $input, condition: $condition) {
      id
      classID
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      assignmentID
      title
      image
      description
      grade
      studentID
      likedUser
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateArtWork = /* GraphQL */ `
  mutation UpdateArtWork(
    $input: UpdateArtWorkInput!
    $condition: ModelArtWorkConditionInput
  ) {
    updateArtWork(input: $input, condition: $condition) {
      id
      classID
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      assignmentID
      title
      image
      description
      grade
      studentID
      likedUser
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteArtWork = /* GraphQL */ `
  mutation DeleteArtWork(
    $input: DeleteArtWorkInput!
    $condition: ModelArtWorkConditionInput
  ) {
    deleteArtWork(input: $input, condition: $condition) {
      id
      classID
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      assignmentID
      title
      image
      description
      grade
      studentID
      likedUser
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      message
      artworkID
      submitTime
      studentID
      teacherID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      message
      artworkID
      submitTime
      studentID
      teacherID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      message
      artworkID
      submitTime
      studentID
      teacherID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      name
      description
      Assignments {
        items {
          id
          description
          openTime
          deadline
          classID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ArtWorks {
        items {
          id
          classID
          assignmentID
          title
          image
          description
          grade
          studentID
          likedUser
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      startDate
      students {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      teacherID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      name
      description
      Assignments {
        items {
          id
          description
          openTime
          deadline
          classID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ArtWorks {
        items {
          id
          classID
          assignmentID
          title
          image
          description
          grade
          studentID
          likedUser
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      startDate
      students {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      teacherID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      name
      description
      Assignments {
        items {
          id
          description
          openTime
          deadline
          classID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ArtWorks {
        items {
          id
          classID
          assignmentID
          title
          image
          description
          grade
          studentID
          likedUser
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      startDate
      students {
        items {
          id
          studentID
          classID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
      }
      teacherID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAssignment = /* GraphQL */ `
  mutation CreateAssignment(
    $input: CreateAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    createAssignment(input: $input, condition: $condition) {
      id
      description
      openTime
      ArtWorks {
        items {
          id
          classID
          assignmentID
          title
          image
          description
          grade
          studentID
          likedUser
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      deadline
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAssignment = /* GraphQL */ `
  mutation UpdateAssignment(
    $input: UpdateAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    updateAssignment(input: $input, condition: $condition) {
      id
      description
      openTime
      ArtWorks {
        items {
          id
          classID
          assignmentID
          title
          image
          description
          grade
          studentID
          likedUser
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      deadline
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAssignment = /* GraphQL */ `
  mutation DeleteAssignment(
    $input: DeleteAssignmentInput!
    $condition: ModelAssignmentConditionInput
  ) {
    deleteAssignment(input: $input, condition: $condition) {
      id
      description
      openTime
      ArtWorks {
        items {
          id
          classID
          assignmentID
          title
          image
          description
          grade
          studentID
          likedUser
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      deadline
      classID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createStudentClass = /* GraphQL */ `
  mutation CreateStudentClass(
    $input: CreateStudentClassInput!
    $condition: ModelStudentClassConditionInput
  ) {
    createStudentClass(input: $input, condition: $condition) {
      id
      studentID
      classID
      student {
        id
        email
        email_verified
        name
        profile
        role
        ClassJoined {
          nextToken
        }
        ArtWorks {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      class {
        id
        name
        description
        Assignments {
          nextToken
          startedAt
        }
        ArtWorks {
          nextToken
          startedAt
        }
        startDate
        students {
          nextToken
        }
        teacherID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateStudentClass = /* GraphQL */ `
  mutation UpdateStudentClass(
    $input: UpdateStudentClassInput!
    $condition: ModelStudentClassConditionInput
  ) {
    updateStudentClass(input: $input, condition: $condition) {
      id
      studentID
      classID
      student {
        id
        email
        email_verified
        name
        profile
        role
        ClassJoined {
          nextToken
        }
        ArtWorks {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      class {
        id
        name
        description
        Assignments {
          nextToken
          startedAt
        }
        ArtWorks {
          nextToken
          startedAt
        }
        startDate
        students {
          nextToken
        }
        teacherID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteStudentClass = /* GraphQL */ `
  mutation DeleteStudentClass(
    $input: DeleteStudentClassInput!
    $condition: ModelStudentClassConditionInput
  ) {
    deleteStudentClass(input: $input, condition: $condition) {
      id
      studentID
      classID
      student {
        id
        email
        email_verified
        name
        profile
        role
        ClassJoined {
          nextToken
        }
        ArtWorks {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      class {
        id
        name
        description
        Assignments {
          nextToken
          startedAt
        }
        ArtWorks {
          nextToken
          startedAt
        }
        startDate
        students {
          nextToken
        }
        teacherID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
