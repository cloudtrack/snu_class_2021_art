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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArtWorks {
        items {
          id
          classID
          assignmentID
          image
          grade
          studentID
          likedUsers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ClassJoined {
        items {
          id
          studentID
          classID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArtWorks {
        items {
          id
          classID
          assignmentID
          image
          grade
          studentID
          likedUsers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ClassJoined {
        items {
          id
          studentID
          classID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArtWorks {
        items {
          id
          classID
          assignmentID
          image
          grade
          studentID
          likedUsers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ClassJoined {
        items {
          id
          studentID
          classID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ClassesOpened {
        items {
          id
          name
          description
          startDate
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ClassesOpened {
        items {
          id
          name
          description
          startDate
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      ClassesOpened {
        items {
          id
          name
          description
          startDate
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      assignmentID
      image
      grade
      studentID
      likedUsers
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      assignmentID
      image
      grade
      studentID
      likedUsers
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      assignmentID
      image
      grade
      studentID
      likedUsers
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Comments {
        items {
          id
          message
          artworkID
          submitTime
          studentID
          teacherID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      startDate
      teacherID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArtWorks {
        items {
          id
          classID
          assignmentID
          image
          grade
          studentID
          likedUsers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Assignments {
        items {
          id
          description
          openTime
          deadline
          classID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      students {
        items {
          id
          studentID
          classID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      startDate
      teacherID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArtWorks {
        items {
          id
          classID
          assignmentID
          image
          grade
          studentID
          likedUsers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Assignments {
        items {
          id
          description
          openTime
          deadline
          classID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      students {
        items {
          id
          studentID
          classID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      startDate
      teacherID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArtWorks {
        items {
          id
          classID
          assignmentID
          image
          grade
          studentID
          likedUsers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Assignments {
        items {
          id
          description
          openTime
          deadline
          classID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      students {
        items {
          id
          studentID
          classID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      deadline
      classID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArtWorks {
        items {
          id
          classID
          assignmentID
          image
          grade
          studentID
          likedUsers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      deadline
      classID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArtWorks {
        items {
          id
          classID
          assignmentID
          image
          grade
          studentID
          likedUsers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      deadline
      classID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArtWorks {
        items {
          id
          classID
          assignmentID
          image
          grade
          studentID
          likedUsers
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      student {
        id
        email
        email_verified
        name
        profile
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ArtWorks {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        ClassJoined {
          nextToken
          startedAt
        }
      }
      class {
        id
        name
        description
        startDate
        teacherID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ArtWorks {
          nextToken
          startedAt
        }
        Assignments {
          nextToken
          startedAt
        }
        students {
          nextToken
          startedAt
        }
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      student {
        id
        email
        email_verified
        name
        profile
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ArtWorks {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        ClassJoined {
          nextToken
          startedAt
        }
      }
      class {
        id
        name
        description
        startDate
        teacherID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ArtWorks {
          nextToken
          startedAt
        }
        Assignments {
          nextToken
          startedAt
        }
        students {
          nextToken
          startedAt
        }
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      student {
        id
        email
        email_verified
        name
        profile
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ArtWorks {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        ClassJoined {
          nextToken
          startedAt
        }
      }
      class {
        id
        name
        description
        startDate
        teacherID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ArtWorks {
          nextToken
          startedAt
        }
        Assignments {
          nextToken
          startedAt
        }
        students {
          nextToken
          startedAt
        }
      }
    }
  }
`;
