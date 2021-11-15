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
          title
          image
          description
          grade
          studentID
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
          title
          image
          description
          grade
          studentID
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
          title
          image
          description
          grade
          studentID
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher {
    onCreateTeacher {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher {
    onUpdateTeacher {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher {
    onDeleteTeacher {
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
export const onCreateArtWork = /* GraphQL */ `
  subscription OnCreateArtWork {
    onCreateArtWork {
      id
      classID
      assignmentID
      title
      image
      description
      grade
      studentID
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
export const onUpdateArtWork = /* GraphQL */ `
  subscription OnUpdateArtWork {
    onUpdateArtWork {
      id
      classID
      assignmentID
      title
      image
      description
      grade
      studentID
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
export const onDeleteArtWork = /* GraphQL */ `
  subscription OnDeleteArtWork {
    onDeleteArtWork {
      id
      classID
      assignmentID
      title
      image
      description
      grade
      studentID
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
          title
          image
          description
          grade
          studentID
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
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
          title
          image
          description
          grade
          studentID
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
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
          title
          image
          description
          grade
          studentID
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
export const onCreateAssignment = /* GraphQL */ `
  subscription OnCreateAssignment {
    onCreateAssignment {
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
          title
          image
          description
          grade
          studentID
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
export const onUpdateAssignment = /* GraphQL */ `
  subscription OnUpdateAssignment {
    onUpdateAssignment {
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
          title
          image
          description
          grade
          studentID
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
export const onDeleteAssignment = /* GraphQL */ `
  subscription OnDeleteAssignment {
    onDeleteAssignment {
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
          title
          image
          description
          grade
          studentID
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
export const onCreateStudentClass = /* GraphQL */ `
  subscription OnCreateStudentClass {
    onCreateStudentClass {
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
export const onUpdateStudentClass = /* GraphQL */ `
  subscription OnUpdateStudentClass {
    onUpdateStudentClass {
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
export const onDeleteStudentClass = /* GraphQL */ `
  subscription OnDeleteStudentClass {
    onDeleteStudentClass {
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
