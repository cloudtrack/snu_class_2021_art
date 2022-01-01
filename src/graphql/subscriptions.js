/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher {
    onCreateTeacher {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher {
    onUpdateTeacher {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher {
    onDeleteTeacher {
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
export const onCreateArtWork = /* GraphQL */ `
  subscription OnCreateArtWork {
    onCreateArtWork {
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
export const onUpdateArtWork = /* GraphQL */ `
  subscription OnUpdateArtWork {
    onUpdateArtWork {
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
export const onDeleteArtWork = /* GraphQL */ `
  subscription OnDeleteArtWork {
    onDeleteArtWork {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
export const onCreateAssignment = /* GraphQL */ `
  subscription OnCreateAssignment {
    onCreateAssignment {
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
export const onUpdateAssignment = /* GraphQL */ `
  subscription OnUpdateAssignment {
    onUpdateAssignment {
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
export const onDeleteAssignment = /* GraphQL */ `
  subscription OnDeleteAssignment {
    onDeleteAssignment {
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
export const onCreateStudentClass = /* GraphQL */ `
  subscription OnCreateStudentClass {
    onCreateStudentClass {
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
export const onUpdateStudentClass = /* GraphQL */ `
  subscription OnUpdateStudentClass {
    onUpdateStudentClass {
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
export const onDeleteStudentClass = /* GraphQL */ `
  subscription OnDeleteStudentClass {
    onDeleteStudentClass {
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
