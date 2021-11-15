/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStudents = /* GraphQL */ `
  query SyncStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTeacher = /* GraphQL */ `
  query GetTeacher($id: ID!) {
    getTeacher(id: $id) {
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
export const listTeachers = /* GraphQL */ `
  query ListTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeachers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
          startedAt
        }
        ClassesOpened {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeachers = /* GraphQL */ `
  query SyncTeachers(
    $filter: ModelTeacherFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeachers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          nextToken
          startedAt
        }
        ClassesOpened {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getArtWork = /* GraphQL */ `
  query GetArtWork($id: ID!) {
    getArtWork(id: $id) {
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
export const listArtWorks = /* GraphQL */ `
  query ListArtWorks(
    $filter: ModelArtWorkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtWorks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        Comments {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncArtWorks = /* GraphQL */ `
  query SyncArtWorks(
    $filter: ModelArtWorkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncArtWorks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        Comments {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasss = /* GraphQL */ `
  query ListClasss(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncClasses = /* GraphQL */ `
  query SyncClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getAssignment = /* GraphQL */ `
  query GetAssignment($id: ID!) {
    getAssignment(id: $id) {
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
export const listAssignments = /* GraphQL */ `
  query ListAssignments(
    $filter: ModelAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        ArtWorks {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAssignments = /* GraphQL */ `
  query SyncAssignments(
    $filter: ModelAssignmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        ArtWorks {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStudentClasses = /* GraphQL */ `
  query SyncStudentClasses(
    $filter: ModelStudentClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudentClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
