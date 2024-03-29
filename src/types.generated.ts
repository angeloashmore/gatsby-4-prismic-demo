export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: unknown;
  /** Text content with rich formatting capabilities using a Prismic format called Structured Text. */
  PrismicStructuredText: import("@prismicio/types").RichTextField;
};

export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars["Boolean"]>;
  in: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  ne: Maybe<Scalars["Boolean"]>;
  nin: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  eq: Maybe<Scalars["Date"]>;
  gt: Maybe<Scalars["Date"]>;
  gte: Maybe<Scalars["Date"]>;
  in: Maybe<Array<Maybe<Scalars["Date"]>>>;
  lt: Maybe<Scalars["Date"]>;
  lte: Maybe<Scalars["Date"]>;
  ne: Maybe<Scalars["Date"]>;
  nin: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>;
  changeTime: Scalars["Date"];
  children: Array<Node>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent: Maybe<Node>;
  prettySize: Scalars["String"];
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type DirectoryAccessTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryModifiedTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next: Maybe<Directory>;
  node: Directory;
  previous: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type DirectoryFilterInput = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars["Float"]>;
  changeTime: Scalars["Date"];
  children: Array<Node>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent: Maybe<Node>;
  prettySize: Scalars["String"];
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type FileAccessTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileModifiedTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  next: Maybe<File>;
  node: File;
  previous: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type FileFilterInput = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<FileGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars["Float"]>;
  gt: Maybe<Scalars["Float"]>;
  gte: Maybe<Scalars["Float"]>;
  in: Maybe<Array<Maybe<Scalars["Float"]>>>;
  lt: Maybe<Scalars["Float"]>;
  lte: Maybe<Scalars["Float"]>;
  ne: Maybe<Scalars["Float"]>;
  nin: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export enum GatsbyImageFormat {
  Auto = "AUTO",
  Avif = "AVIF",
  Jpg = "JPG",
  NoChange = "NO_CHANGE",
  Png = "PNG",
  Webp = "WEBP",
}

export enum GatsbyImageLayout {
  Constrained = "CONSTRAINED",
  Fixed = "FIXED",
  FullWidth = "FULL_WIDTH",
}

export enum GatsbyImagePlaceholder {
  Blurred = "BLURRED",
  DominantColor = "DOMINANT_COLOR",
  None = "NONE",
  TracedSvg = "TRACED_SVG",
}

export type IdQueryOperatorInput = {
  eq: Maybe<Scalars["ID"]>;
  in: Maybe<Array<Maybe<Scalars["ID"]>>>;
  ne: Maybe<Scalars["ID"]>;
  nin: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type ImgixFixed = {
  base64: Scalars["String"];
  height: Scalars["Int"];
  sizes: Scalars["String"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcSetWebp: Scalars["String"];
  srcWebp: Scalars["String"];
  width: Scalars["Int"];
};

export type ImgixFluid = {
  aspectRatio: Scalars["Float"];
  base64: Scalars["String"];
  sizes: Scalars["String"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcSetWebp: Scalars["String"];
  srcWebp: Scalars["String"];
};

export type ImgixParamsInput = {
  /** Alias for `pdfAnnotation`. */
  annotation: Maybe<Scalars["Boolean"]>;
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  ar: Maybe<Scalars["String"]>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  auto: Maybe<Scalars["String"]>;
  /** Alias for `blend`. */
  b: Maybe<Scalars["String"]>;
  /** Alias for `blendAlign`. */
  ba: Maybe<Scalars["String"]>;
  /** Alias for `blendAlpha`. */
  balph: Maybe<Scalars["Int"]>;
  /** Alias for `blendCrop`. */
  bc: Maybe<Scalars["String"]>;
  /** Alias for `blendFit`. */
  bf: Maybe<Scalars["String"]>;
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  bg: Maybe<Scalars["String"]>;
  /** Alias for `blendH`. */
  bh: Maybe<Scalars["Float"]>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  blend: Maybe<Scalars["String"]>;
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  blendAlign: Maybe<Scalars["String"]>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  blendAlpha: Maybe<Scalars["Int"]>;
  /** Alias for `blendColor`. */
  blendClr: Maybe<Scalars["String"]>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  blendColor: Maybe<Scalars["String"]>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  blendCrop: Maybe<Scalars["String"]>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  blendFit: Maybe<Scalars["String"]>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  blendH: Maybe<Scalars["Float"]>;
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  blendMode: Maybe<Scalars["String"]>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  blendPad: Maybe<Scalars["Int"]>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  blendSize: Maybe<Scalars["String"]>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  blendW: Maybe<Scalars["Float"]>;
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  blendX: Maybe<Scalars["Int"]>;
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  blendY: Maybe<Scalars["Int"]>;
  /** Alias for `blendAlign`. */
  blendalign: Maybe<Scalars["String"]>;
  /** Alias for `blendAlpha`. */
  blendalpha: Maybe<Scalars["Int"]>;
  /** Alias for `blendColor`. */
  blendclr: Maybe<Scalars["String"]>;
  /** Alias for `blendColor`. */
  blendcolor: Maybe<Scalars["String"]>;
  /** Alias for `blendCrop`. */
  blendcrop: Maybe<Scalars["String"]>;
  /** Alias for `blendFit`. */
  blendfit: Maybe<Scalars["String"]>;
  /** Alias for `blendH`. */
  blendh: Maybe<Scalars["Float"]>;
  /** Alias for `blendMode`. */
  blendmode: Maybe<Scalars["String"]>;
  /** Alias for `blendPad`. */
  blendpad: Maybe<Scalars["Int"]>;
  /** Alias for `blendSize`. */
  blendsize: Maybe<Scalars["String"]>;
  /** Alias for `blendW`. */
  blendw: Maybe<Scalars["Float"]>;
  /** Alias for `blendX`. */
  blendx: Maybe<Scalars["Int"]>;
  /** Alias for `blendY`. */
  blendy: Maybe<Scalars["Int"]>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  blur: Maybe<Scalars["Int"]>;
  /** Alias for `blendMode`. */
  bm: Maybe<Scalars["String"]>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  border: Maybe<Scalars["String"]>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  borderBottom: Maybe<Scalars["Int"]>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  borderLeft: Maybe<Scalars["Int"]>;
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  borderRadius: Maybe<Scalars["String"]>;
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  borderRadiusInner: Maybe<Scalars["String"]>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  borderRight: Maybe<Scalars["Int"]>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  borderTop: Maybe<Scalars["Int"]>;
  /** Alias for `blendPad`. */
  bp: Maybe<Scalars["Int"]>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  bri: Maybe<Scalars["Int"]>;
  /** Alias for `blendSize`. */
  bs: Maybe<Scalars["String"]>;
  /** Alias for `blendW`. */
  bw: Maybe<Scalars["Float"]>;
  /** Alias for `blendX`. */
  bx: Maybe<Scalars["Int"]>;
  /** Alias for `blendY`. */
  by: Maybe<Scalars["Int"]>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  ch: Maybe<Scalars["String"]>;
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  chromasub: Maybe<Scalars["Int"]>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  colorquant: Maybe<Scalars["Int"]>;
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  colors: Maybe<Scalars["Int"]>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  con: Maybe<Scalars["Int"]>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  cornerRadius: Maybe<Scalars["String"]>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  crop: Maybe<Scalars["String"]>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  cs: Maybe<Scalars["String"]>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  dl: Maybe<Scalars["String"]>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  dpi: Maybe<Scalars["Int"]>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  dpr: Maybe<Scalars["Float"]>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  duotone: Maybe<Scalars["String"]>;
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  duotoneAlpha: Maybe<Scalars["Int"]>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  exp: Maybe<Scalars["Int"]>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  expires: Maybe<Scalars["String"]>;
  /** Alias for `fit`. */
  f: Maybe<Scalars["String"]>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  faceindex: Maybe<Scalars["Int"]>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  facepad: Maybe<Scalars["Float"]>;
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  faces: Maybe<Scalars["Int"]>;
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  fill: Maybe<Scalars["String"]>;
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  fillColor: Maybe<Scalars["String"]>;
  /** Alias for `fillColor`. */
  fillcolor: Maybe<Scalars["String"]>;
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  fit: Maybe<Scalars["String"]>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  flip: Maybe<Scalars["String"]>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  fm: Maybe<Scalars["String"]>;
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  fpDebug: Maybe<Scalars["Boolean"]>;
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  fpX: Maybe<Scalars["Float"]>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  fpY: Maybe<Scalars["Float"]>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  fpZ: Maybe<Scalars["Float"]>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  gam: Maybe<Scalars["Int"]>;
  /** Sets grid colors for the transparency checkerboard grid. */
  gridColors: Maybe<Scalars["String"]>;
  /** Sets grid size for the transparency checkerboard grid. */
  gridSize: Maybe<Scalars["Int"]>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  h: Maybe<Scalars["Float"]>;
  /** Alias for `h`. */
  height: Maybe<Scalars["Float"]>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  high: Maybe<Scalars["Int"]>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  htn: Maybe<Scalars["Int"]>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  hue: Maybe<Scalars["Int"]>;
  /** Alias for `invert`. */
  inv: Maybe<Scalars["Boolean"]>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  invert: Maybe<Scalars["Boolean"]>;
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  lossless: Maybe<Scalars["Boolean"]>;
  /** Alias for `mark`. */
  m: Maybe<Scalars["String"]>;
  /** Alias for `markAlign`. */
  ma: Maybe<Scalars["String"]>;
  /** Alias for `markAlpha`. */
  malph: Maybe<Scalars["Int"]>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  mark: Maybe<Scalars["String"]>;
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  markAlign: Maybe<Scalars["String"]>;
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  markAlpha: Maybe<Scalars["Int"]>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  markBase: Maybe<Scalars["String"]>;
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  markFit: Maybe<Scalars["String"]>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  markH: Maybe<Scalars["Float"]>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  markPad: Maybe<Scalars["Int"]>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  markRot: Maybe<Scalars["Float"]>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  markScale: Maybe<Scalars["Int"]>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  markTile: Maybe<Scalars["String"]>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  markW: Maybe<Scalars["Float"]>;
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  markX: Maybe<Scalars["Int"]>;
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  markY: Maybe<Scalars["Int"]>;
  /** Alias for `markAlign`. */
  markalign: Maybe<Scalars["String"]>;
  /** Alias for `markAlpha`. */
  markalpha: Maybe<Scalars["Int"]>;
  /** Alias for `markBase`. */
  markbase: Maybe<Scalars["String"]>;
  /** Alias for `markFit`. */
  markfit: Maybe<Scalars["String"]>;
  /** Alias for `markH`. */
  markh: Maybe<Scalars["Float"]>;
  /** Alias for `markPad`. */
  markpad: Maybe<Scalars["Int"]>;
  /** Alias for `markScale`. */
  markscale: Maybe<Scalars["Int"]>;
  /** Alias for `markTile`. */
  marktile: Maybe<Scalars["String"]>;
  /** Alias for `markW`. */
  markw: Maybe<Scalars["Float"]>;
  /** Alias for `markX`. */
  markx: Maybe<Scalars["Int"]>;
  /** Alias for `markY`. */
  marky: Maybe<Scalars["Int"]>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  mask: Maybe<Scalars["String"]>;
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  maskBg: Maybe<Scalars["String"]>;
  /** Alias for `maskBg`. */
  maskbg: Maybe<Scalars["String"]>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  maxH: Maybe<Scalars["Int"]>;
  /** Alias for `maxH`. */
  maxHeight: Maybe<Scalars["Int"]>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  maxW: Maybe<Scalars["Int"]>;
  /** Alias for `maxW`. */
  maxWidth: Maybe<Scalars["Int"]>;
  /** Alias for `markBase`. */
  mb: Maybe<Scalars["String"]>;
  /** Alias for `markFit`. */
  mf: Maybe<Scalars["String"]>;
  /** Alias for `markH`. */
  mh: Maybe<Scalars["Float"]>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  minH: Maybe<Scalars["Int"]>;
  /** Alias for `minH`. */
  minHeight: Maybe<Scalars["Int"]>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  minW: Maybe<Scalars["Int"]>;
  /** Alias for `minW`. */
  minWidth: Maybe<Scalars["Int"]>;
  /** Alias for `monochrome`. */
  mono: Maybe<Scalars["String"]>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  monochrome: Maybe<Scalars["String"]>;
  /** Alias for `markPad`. */
  mp: Maybe<Scalars["Int"]>;
  /** Alias for `markScale`. */
  ms: Maybe<Scalars["Int"]>;
  /** Alias for `markTile`. */
  mtile: Maybe<Scalars["String"]>;
  /** Alias for `markW`. */
  mw: Maybe<Scalars["Float"]>;
  /** Alias for `markX`. */
  mx: Maybe<Scalars["Int"]>;
  /** Alias for `markY`. */
  my: Maybe<Scalars["Int"]>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  nr: Maybe<Scalars["Int"]>;
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  nrs: Maybe<Scalars["Int"]>;
  /** Alias for `orient`. */
  or: Maybe<Scalars["Int"]>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  orient: Maybe<Scalars["Int"]>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  pad: Maybe<Scalars["Int"]>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  padBottom: Maybe<Scalars["Int"]>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  padLeft: Maybe<Scalars["Int"]>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  padRight: Maybe<Scalars["Int"]>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  padTop: Maybe<Scalars["Int"]>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  page: Maybe<Scalars["Int"]>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  palette: Maybe<Scalars["String"]>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  pdfAnnotation: Maybe<Scalars["Boolean"]>;
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  prefix: Maybe<Scalars["String"]>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  px: Maybe<Scalars["Int"]>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  q: Maybe<Scalars["Int"]>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  rect: Maybe<Scalars["String"]>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  rot: Maybe<Scalars["Float"]>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  sat: Maybe<Scalars["Int"]>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  sepia: Maybe<Scalars["Int"]>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  shad: Maybe<Scalars["Float"]>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  sharp: Maybe<Scalars["Float"]>;
  /** Alias for `txt`. */
  t: Maybe<Scalars["String"]>;
  /** Alias for `txtAlign`. */
  ta: Maybe<Scalars["String"]>;
  /** Alias for `txtColor`. */
  tc: Maybe<Scalars["String"]>;
  /** Alias for `txtClip`. */
  tcl: Maybe<Scalars["String"]>;
  /** Alias for `txtFont`. */
  tf: Maybe<Scalars["String"]>;
  /** Alias for `txtLine`. */
  tl: Maybe<Scalars["Int"]>;
  /** Alias for `txtPad`. */
  tp: Maybe<Scalars["Int"]>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  transparency: Maybe<Scalars["String"]>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  trim: Maybe<Scalars["String"]>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  trimColor: Maybe<Scalars["String"]>;
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  trimMd: Maybe<Scalars["Float"]>;
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  trimPad: Maybe<Scalars["Int"]>;
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  trimSd: Maybe<Scalars["Float"]>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  trimTol: Maybe<Scalars["Float"]>;
  /** Alias for `trimColor`. */
  trimcolor: Maybe<Scalars["String"]>;
  /** Alias for `trimMd`. */
  trimmd: Maybe<Scalars["Float"]>;
  /** Alias for `trimPad`. */
  trimpad: Maybe<Scalars["Int"]>;
  /** Alias for `trimSd`. */
  trimsd: Maybe<Scalars["Float"]>;
  /** Alias for `trimTol`. */
  trimtol: Maybe<Scalars["Float"]>;
  /** Alias for `txtShad`. */
  tsh: Maybe<Scalars["Float"]>;
  /** Alias for `txtSize`. */
  tsz: Maybe<Scalars["Int"]>;
  /** Alias for `txtTrack`. */
  tt: Maybe<Scalars["Int"]>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  txt: Maybe<Scalars["String"]>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  txtAlign: Maybe<Scalars["String"]>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  txtClip: Maybe<Scalars["String"]>;
  /** Alias for `txtColor`. */
  txtClr: Maybe<Scalars["String"]>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  txtColor: Maybe<Scalars["String"]>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  txtFit: Maybe<Scalars["String"]>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  txtFont: Maybe<Scalars["String"]>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  txtLead: Maybe<Scalars["Int"]>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  txtLig: Maybe<Scalars["Int"]>;
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  txtLine: Maybe<Scalars["Int"]>;
  /** Alias for `txtLineColor`. */
  txtLineClr: Maybe<Scalars["String"]>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  txtLineColor: Maybe<Scalars["String"]>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  txtPad: Maybe<Scalars["Int"]>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  txtShad: Maybe<Scalars["Float"]>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  txtSize: Maybe<Scalars["Int"]>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  txtTrack: Maybe<Scalars["Int"]>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  txtWidth: Maybe<Scalars["Int"]>;
  /** Alias for `txtAlign`. */
  txtalign: Maybe<Scalars["String"]>;
  /** Alias for `txtClip`. */
  txtclip: Maybe<Scalars["String"]>;
  /** Alias for `txtColor`. */
  txtclr: Maybe<Scalars["String"]>;
  /** Alias for `txtColor`. */
  txtcolor: Maybe<Scalars["String"]>;
  /** Alias for `txtFit`. */
  txtfit: Maybe<Scalars["String"]>;
  /** Alias for `txtFont`. */
  txtfont: Maybe<Scalars["String"]>;
  /** Alias for `txtLead`. */
  txtlead: Maybe<Scalars["Int"]>;
  /** Alias for `txtLig`. */
  txtlig: Maybe<Scalars["Int"]>;
  /** Alias for `txtLine`. */
  txtline: Maybe<Scalars["Int"]>;
  /** Alias for `txtLineColor`. */
  txtlineclr: Maybe<Scalars["String"]>;
  /** Alias for `txtLineColor`. */
  txtlinecolor: Maybe<Scalars["String"]>;
  /** Alias for `txtPad`. */
  txtpad: Maybe<Scalars["Int"]>;
  /** Alias for `txtShad`. */
  txtshad: Maybe<Scalars["Float"]>;
  /** Alias for `txtSize`. */
  txtsize: Maybe<Scalars["Int"]>;
  /** Alias for `txtTrack`. */
  txttrack: Maybe<Scalars["Int"]>;
  /** Alias for `txtWidth`. */
  txtwidth: Maybe<Scalars["Int"]>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  usm: Maybe<Scalars["Int"]>;
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  usmrad: Maybe<Scalars["Float"]>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  vib: Maybe<Scalars["Int"]>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  w: Maybe<Scalars["Float"]>;
  /** Alias for `w`. */
  width: Maybe<Scalars["Float"]>;
};

export enum ImgixPlaceholder {
  Blurred = "BLURRED",
  DominantColor = "DOMINANT_COLOR",
  None = "NONE",
}

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars["Int"]>;
  gt: Maybe<Scalars["Int"]>;
  gte: Maybe<Scalars["Int"]>;
  in: Maybe<Array<Maybe<Scalars["Int"]>>>;
  lt: Maybe<Scalars["Int"]>;
  lte: Maybe<Scalars["Int"]>;
  ne: Maybe<Scalars["Int"]>;
  nin: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type Internal = {
  content: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description: Maybe<Scalars["String"]>;
  fieldOwners: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType: Maybe<Scalars["Boolean"]>;
  mediaType: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>;
  contentDigest: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  fieldOwners: Maybe<StringQueryOperatorInput>;
  ignoreType: Maybe<BooleanQueryOperatorInput>;
  mediaType: Maybe<StringQueryOperatorInput>;
  owner: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq: Maybe<Scalars["JSON"]>;
  glob: Maybe<Scalars["JSON"]>;
  in: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  ne: Maybe<Scalars["JSON"]>;
  nin: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  regex: Maybe<Scalars["JSON"]>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent: Maybe<Node>;
};

export type NodeFilterInput = {
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars["Int"];
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type PrismicAllDocumentTypes = PrismicPage | PrismicProduct;

export type PrismicAlternateLanguageType = {
  document: Maybe<PrismicAllDocumentTypes>;
  id: Maybe<Scalars["ID"]>;
  lang: Maybe<Scalars["String"]>;
  raw: Maybe<Scalars["JSON"]>;
  type: Maybe<Scalars["String"]>;
  uid: Maybe<Scalars["String"]>;
};

export type PrismicAlternateLanguageTypeFilterInput = {
  id: Maybe<IdQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  raw: Maybe<JsonQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  uid: Maybe<StringQueryOperatorInput>;
};

export type PrismicAlternateLanguageTypeFilterListInput = {
  elemMatch: Maybe<PrismicAlternateLanguageTypeFilterInput>;
};

export type PrismicEmbedType = Node & {
  author_name: Maybe<Scalars["String"]>;
  author_url: Maybe<Scalars["String"]>;
  children: Array<Node>;
  embed_url: Maybe<Scalars["String"]>;
  height: Maybe<Scalars["Int"]>;
  html: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  parent: Maybe<Node>;
  prismicId: Maybe<Scalars["String"]>;
  provider_name: Maybe<Scalars["String"]>;
  provider_url: Maybe<Scalars["String"]>;
  thumbnail_height: Maybe<Scalars["Int"]>;
  thumbnail_url: Maybe<Scalars["String"]>;
  thumbnail_width: Maybe<Scalars["Int"]>;
  title: Maybe<Scalars["String"]>;
  type: Maybe<Scalars["String"]>;
  version: Maybe<Scalars["String"]>;
  width: Maybe<Scalars["Int"]>;
};

export type PrismicEmbedTypeConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<PrismicEmbedTypeEdge>;
  group: Array<PrismicEmbedTypeGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<PrismicEmbedType>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type PrismicEmbedTypeConnectionDistinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionGroupArgs = {
  field: PrismicEmbedTypeFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type PrismicEmbedTypeConnectionMaxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionMinArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeConnectionSumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeEdge = {
  next: Maybe<PrismicEmbedType>;
  node: PrismicEmbedType;
  previous: Maybe<PrismicEmbedType>;
};

export enum PrismicEmbedTypeFieldsEnum {
  AuthorName = "author_name",
  AuthorUrl = "author_url",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  EmbedUrl = "embed_url",
  Height = "height",
  Html = "html",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrismicId = "prismicId",
  ProviderName = "provider_name",
  ProviderUrl = "provider_url",
  ThumbnailHeight = "thumbnail_height",
  ThumbnailUrl = "thumbnail_url",
  ThumbnailWidth = "thumbnail_width",
  Title = "title",
  Type = "type",
  Version = "version",
  Width = "width",
}

export type PrismicEmbedTypeFilterInput = {
  author_name: Maybe<StringQueryOperatorInput>;
  author_url: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  embed_url: Maybe<StringQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  prismicId: Maybe<StringQueryOperatorInput>;
  provider_name: Maybe<StringQueryOperatorInput>;
  provider_url: Maybe<StringQueryOperatorInput>;
  thumbnail_height: Maybe<IntQueryOperatorInput>;
  thumbnail_url: Maybe<StringQueryOperatorInput>;
  thumbnail_width: Maybe<IntQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
};

export type PrismicEmbedTypeGroupConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<PrismicEmbedTypeEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<PrismicEmbedTypeGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<PrismicEmbedType>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type PrismicEmbedTypeGroupConnectionDistinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeGroupConnectionGroupArgs = {
  field: PrismicEmbedTypeFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type PrismicEmbedTypeGroupConnectionMaxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeGroupConnectionMinArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeGroupConnectionSumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};

export type PrismicEmbedTypeSortInput = {
  fields: Maybe<Array<Maybe<PrismicEmbedTypeFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicGeoPointType = {
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

export type PrismicImageDimensionsType = {
  height: Scalars["Int"];
  width: Scalars["Int"];
};

export type PrismicImageThumbnailType = {
  alt: Maybe<Scalars["String"]>;
  copyright: Maybe<Scalars["String"]>;
  dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid: Maybe<ImgixFluid>;
  gatsbyImageData: Maybe<Scalars["JSON"]>;
  localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  url: Maybe<Scalars["String"]>;
};

export type PrismicImageThumbnailTypeFixedArgs = {
  height: Maybe<Scalars["Int"]>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
  quality: Maybe<Scalars["Int"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type PrismicImageThumbnailTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxHeight: Maybe<Scalars["Int"]>;
  maxWidth?: Maybe<Scalars["Int"]>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
  srcSetBreakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type PrismicImageThumbnailTypeGatsbyImageDataArgs = {
  aspectRatio: Maybe<Scalars["Float"]>;
  backgroundColor: Maybe<Scalars["String"]>;
  breakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
  height: Maybe<Scalars["Int"]>;
  imgixParams: Maybe<ImgixParamsInput>;
  layout: Maybe<GatsbyImageLayout>;
  outputPixelDensities: Maybe<Array<Maybe<Scalars["Float"]>>>;
  placeholder: Maybe<ImgixPlaceholder>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  sizes: Maybe<Scalars["String"]>;
  srcSetMaxWidth?: Maybe<Scalars["Int"]>;
  srcSetMinWidth?: Maybe<Scalars["Int"]>;
  width: Maybe<Scalars["Int"]>;
  widthTolerance?: Maybe<Scalars["Float"]>;
};

export type PrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};

export type PrismicLinkType = {
  document: Maybe<PrismicAllDocumentTypes>;
  id: Maybe<Scalars["ID"]>;
  isBroken: Maybe<Scalars["Boolean"]>;
  lang: Maybe<Scalars["String"]>;
  link_type: Maybe<PrismicLinkTypeEnum>;
  localFile: Maybe<File>;
  raw: Maybe<Scalars["JSON"]>;
  size: Maybe<Scalars["Int"]>;
  slug: Maybe<Scalars["String"]>;
  tags: Maybe<Array<Maybe<Scalars["String"]>>>;
  target: Maybe<Scalars["String"]>;
  type: Maybe<Scalars["String"]>;
  uid: Maybe<Scalars["String"]>;
  url: Maybe<Scalars["String"]>;
};

export enum PrismicLinkTypeEnum {
  Any = "Any",
  Document = "Document",
  Media = "Media",
  Web = "Web",
}

export type PrismicPage = Node & {
  _previewable: Scalars["ID"];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  children: Array<Node>;
  data: PrismicPageDataType;
  dataRaw: Scalars["JSON"];
  first_publication_date: Scalars["Date"];
  href: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  lang: Scalars["String"];
  last_publication_date: Scalars["Date"];
  parent: Maybe<Node>;
  prismicId: Scalars["ID"];
  tags: Array<Scalars["String"]>;
  type: Scalars["String"];
  uid: Scalars["String"];
  url: Maybe<Scalars["String"]>;
};

export type PrismicPageFirst_Publication_DateArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type PrismicPageLast_Publication_DateArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type PrismicPageConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<PrismicPageEdge>;
  group: Array<PrismicPageGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<PrismicPage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type PrismicPageConnectionDistinctArgs = {
  field: PrismicPageFieldsEnum;
};

export type PrismicPageConnectionGroupArgs = {
  field: PrismicPageFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type PrismicPageConnectionMaxArgs = {
  field: PrismicPageFieldsEnum;
};

export type PrismicPageConnectionMinArgs = {
  field: PrismicPageFieldsEnum;
};

export type PrismicPageConnectionSumArgs = {
  field: PrismicPageFieldsEnum;
};

export type PrismicPageDataBodyFeature = PrismicSliceType & {
  id: Scalars["ID"];
  primary: PrismicPageDataBodyFeaturePrimary;
  slice_label: Maybe<Scalars["String"]>;
  slice_type: Scalars["String"];
};

export type PrismicPageDataBodyFeaturePrimary = {
  button_link: Maybe<PrismicLinkType>;
  button_text: Maybe<PrismicStructuredTextType>;
  detail_text: Maybe<PrismicStructuredTextType>;
  image: Maybe<PrismicPageDataBodyFeaturePrimaryImageImageType>;
  intro_text: Maybe<PrismicStructuredTextType>;
  variant: Maybe<Scalars["String"]>;
};

export type PrismicPageDataBodyFeaturePrimaryImageImageType = {
  alt: Maybe<Scalars["String"]>;
  copyright: Maybe<Scalars["String"]>;
  dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid: Maybe<ImgixFluid>;
  gatsbyImageData: Maybe<Scalars["JSON"]>;
  localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  url: Maybe<Scalars["String"]>;
};

export type PrismicPageDataBodyFeaturePrimaryImageImageTypeFixedArgs = {
  height: Maybe<Scalars["Int"]>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
  quality: Maybe<Scalars["Int"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type PrismicPageDataBodyFeaturePrimaryImageImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxHeight: Maybe<Scalars["Int"]>;
  maxWidth?: Maybe<Scalars["Int"]>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
  srcSetBreakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type PrismicPageDataBodyFeaturePrimaryImageImageTypeGatsbyImageDataArgs =
  {
    aspectRatio: Maybe<Scalars["Float"]>;
    backgroundColor: Maybe<Scalars["String"]>;
    breakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
    height: Maybe<Scalars["Int"]>;
    imgixParams: Maybe<ImgixParamsInput>;
    layout: Maybe<GatsbyImageLayout>;
    outputPixelDensities: Maybe<Array<Maybe<Scalars["Float"]>>>;
    placeholder: Maybe<ImgixPlaceholder>;
    placeholderImgixParams: Maybe<ImgixParamsInput>;
    sizes: Maybe<Scalars["String"]>;
    srcSetMaxWidth?: Maybe<Scalars["Int"]>;
    srcSetMinWidth?: Maybe<Scalars["Int"]>;
    width: Maybe<Scalars["Int"]>;
    widthTolerance?: Maybe<Scalars["Float"]>;
  };

export type PrismicPageDataBodyFeaturePrimaryImageImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};

export type PrismicPageDataBodyHeroFeature = PrismicSliceType & {
  id: Scalars["ID"];
  primary: PrismicPageDataBodyHeroFeaturePrimary;
  slice_label: Maybe<Scalars["String"]>;
  slice_type: Scalars["String"];
};

export type PrismicPageDataBodyHeroFeaturePrimary = {
  button_link: Maybe<PrismicLinkType>;
  button_text: Maybe<PrismicStructuredTextType>;
  image: Maybe<PrismicPageDataBodyHeroFeaturePrimaryImageImageType>;
  text: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageDataBodyHeroFeaturePrimaryImageImageType = {
  alt: Maybe<Scalars["String"]>;
  copyright: Maybe<Scalars["String"]>;
  dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid: Maybe<ImgixFluid>;
  gatsbyImageData: Maybe<Scalars["JSON"]>;
  localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  url: Maybe<Scalars["String"]>;
};

export type PrismicPageDataBodyHeroFeaturePrimaryImageImageTypeFixedArgs = {
  height: Maybe<Scalars["Int"]>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
  quality: Maybe<Scalars["Int"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type PrismicPageDataBodyHeroFeaturePrimaryImageImageTypeFluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxHeight: Maybe<Scalars["Int"]>;
  maxWidth?: Maybe<Scalars["Int"]>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
  srcSetBreakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type PrismicPageDataBodyHeroFeaturePrimaryImageImageTypeGatsbyImageDataArgs =
  {
    aspectRatio: Maybe<Scalars["Float"]>;
    backgroundColor: Maybe<Scalars["String"]>;
    breakpoints: Maybe<Array<Maybe<Scalars["Int"]>>>;
    height: Maybe<Scalars["Int"]>;
    imgixParams: Maybe<ImgixParamsInput>;
    layout: Maybe<GatsbyImageLayout>;
    outputPixelDensities: Maybe<Array<Maybe<Scalars["Float"]>>>;
    placeholder: Maybe<ImgixPlaceholder>;
    placeholderImgixParams: Maybe<ImgixParamsInput>;
    sizes: Maybe<Scalars["String"]>;
    srcSetMaxWidth?: Maybe<Scalars["Int"]>;
    srcSetMinWidth?: Maybe<Scalars["Int"]>;
    width: Maybe<Scalars["Int"]>;
    widthTolerance?: Maybe<Scalars["Float"]>;
  };

export type PrismicPageDataBodyHeroFeaturePrimaryImageImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};

export type PrismicPageDataBodyInlineNavigation = PrismicSliceType & {
  id: Scalars["ID"];
  items: Array<PrismicPageDataBodyInlineNavigationItem>;
  primary: PrismicPageDataBodyInlineNavigationPrimary;
  slice_label: Maybe<Scalars["String"]>;
  slice_type: Scalars["String"];
};

export type PrismicPageDataBodyInlineNavigationItem = {
  link: Maybe<PrismicLinkType>;
  link_label: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageDataBodyInlineNavigationPrimary = {
  leading_text: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageDataBodySlicesType =
  | PrismicPageDataBodyFeature
  | PrismicPageDataBodyHeroFeature
  | PrismicPageDataBodyInlineNavigation
  | PrismicPageDataBodyVideo;

export type PrismicPageDataBodyVideo = PrismicSliceType & {
  id: Scalars["ID"];
  primary: PrismicPageDataBodyVideoPrimary;
  slice_label: Maybe<Scalars["String"]>;
  slice_type: Scalars["String"];
};

export type PrismicPageDataBodyVideoPrimary = {
  intro_text: Maybe<PrismicStructuredTextType>;
  video_url: Maybe<PrismicEmbedType>;
};

export type PrismicPageDataType = {
  body: Array<PrismicPageDataBodySlicesType>;
  title: Maybe<PrismicStructuredTextType>;
};

export type PrismicPageDataTypeFilterInput = {
  title: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicPageEdge = {
  next: Maybe<PrismicPage>;
  node: PrismicPage;
  previous: Maybe<PrismicPage>;
};

export enum PrismicPageFieldsEnum {
  Previewable = "_previewable",
  AlternateLanguages = "alternate_languages",
  AlternateLanguagesId = "alternate_languages___id",
  AlternateLanguagesLang = "alternate_languages___lang",
  AlternateLanguagesRaw = "alternate_languages___raw",
  AlternateLanguagesType = "alternate_languages___type",
  AlternateLanguagesUid = "alternate_languages___uid",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  DataRaw = "dataRaw",
  DataTitleHtml = "data___title___html",
  DataTitleRaw = "data___title___raw",
  DataTitleRichText = "data___title___richText",
  DataTitleText = "data___title___text",
  FirstPublicationDate = "first_publication_date",
  Href = "href",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Lang = "lang",
  LastPublicationDate = "last_publication_date",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrismicId = "prismicId",
  Tags = "tags",
  Type = "type",
  Uid = "uid",
  Url = "url",
}

export type PrismicPageFilterInput = {
  _previewable: Maybe<IdQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: Maybe<NodeFilterListInput>;
  data: Maybe<PrismicPageDataTypeFilterInput>;
  dataRaw: Maybe<JsonQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prismicId: Maybe<IdQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  uid: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
};

export type PrismicPageGroupConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<PrismicPageEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<PrismicPageGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<PrismicPage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type PrismicPageGroupConnectionDistinctArgs = {
  field: PrismicPageFieldsEnum;
};

export type PrismicPageGroupConnectionGroupArgs = {
  field: PrismicPageFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type PrismicPageGroupConnectionMaxArgs = {
  field: PrismicPageFieldsEnum;
};

export type PrismicPageGroupConnectionMinArgs = {
  field: PrismicPageFieldsEnum;
};

export type PrismicPageGroupConnectionSumArgs = {
  field: PrismicPageFieldsEnum;
};

export type PrismicPageSortInput = {
  fields: Maybe<Array<Maybe<PrismicPageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicProduct = Node & {
  _previewable: Scalars["ID"];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  children: Array<Node>;
  data: PrismicProductDataType;
  dataRaw: Scalars["JSON"];
  first_publication_date: Scalars["Date"];
  href: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  lang: Scalars["String"];
  last_publication_date: Scalars["Date"];
  parent: Maybe<Node>;
  prismicId: Scalars["ID"];
  tags: Array<Scalars["String"]>;
  type: Scalars["String"];
  url: Maybe<Scalars["String"]>;
};

export type PrismicProductFirst_Publication_DateArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type PrismicProductLast_Publication_DateArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type PrismicProductConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<PrismicProductEdge>;
  group: Array<PrismicProductGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<PrismicProduct>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type PrismicProductConnectionDistinctArgs = {
  field: PrismicProductFieldsEnum;
};

export type PrismicProductConnectionGroupArgs = {
  field: PrismicProductFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type PrismicProductConnectionMaxArgs = {
  field: PrismicProductFieldsEnum;
};

export type PrismicProductConnectionMinArgs = {
  field: PrismicProductFieldsEnum;
};

export type PrismicProductConnectionSumArgs = {
  field: PrismicProductFieldsEnum;
};

export type PrismicProductDataType = {
  content: Maybe<PrismicStructuredTextType>;
  stripe_product_id: Maybe<Scalars["String"]>;
};

export type PrismicProductDataTypeFilterInput = {
  content: Maybe<PrismicStructuredTextTypeFilterInput>;
  stripe_product_id: Maybe<StringQueryOperatorInput>;
};

export type PrismicProductEdge = {
  next: Maybe<PrismicProduct>;
  node: PrismicProduct;
  previous: Maybe<PrismicProduct>;
};

export enum PrismicProductFieldsEnum {
  Previewable = "_previewable",
  AlternateLanguages = "alternate_languages",
  AlternateLanguagesId = "alternate_languages___id",
  AlternateLanguagesLang = "alternate_languages___lang",
  AlternateLanguagesRaw = "alternate_languages___raw",
  AlternateLanguagesType = "alternate_languages___type",
  AlternateLanguagesUid = "alternate_languages___uid",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  DataRaw = "dataRaw",
  DataContentHtml = "data___content___html",
  DataContentRaw = "data___content___raw",
  DataContentRichText = "data___content___richText",
  DataContentText = "data___content___text",
  DataStripeProductId = "data___stripe_product_id",
  FirstPublicationDate = "first_publication_date",
  Href = "href",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Lang = "lang",
  LastPublicationDate = "last_publication_date",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrismicId = "prismicId",
  Tags = "tags",
  Type = "type",
  Url = "url",
}

export type PrismicProductFilterInput = {
  _previewable: Maybe<IdQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: Maybe<NodeFilterListInput>;
  data: Maybe<PrismicProductDataTypeFilterInput>;
  dataRaw: Maybe<JsonQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prismicId: Maybe<IdQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
};

export type PrismicProductGroupConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<PrismicProductEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<PrismicProductGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<PrismicProduct>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type PrismicProductGroupConnectionDistinctArgs = {
  field: PrismicProductFieldsEnum;
};

export type PrismicProductGroupConnectionGroupArgs = {
  field: PrismicProductFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type PrismicProductGroupConnectionMaxArgs = {
  field: PrismicProductFieldsEnum;
};

export type PrismicProductGroupConnectionMinArgs = {
  field: PrismicProductFieldsEnum;
};

export type PrismicProductGroupConnectionSumArgs = {
  field: PrismicProductFieldsEnum;
};

export type PrismicProductSortInput = {
  fields: Maybe<Array<Maybe<PrismicProductFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicSharedSliceType = {
  id: Scalars["ID"];
  slice_label: Maybe<Scalars["String"]>;
  slice_type: Scalars["String"];
  variation: Scalars["String"];
  version: Scalars["String"];
};

export type PrismicSliceType = {
  id: Scalars["ID"];
  slice_label: Maybe<Scalars["String"]>;
  slice_type: Scalars["String"];
};

export type PrismicStructuredTextQueryOperatorInput = {
  eq: Maybe<Scalars["PrismicStructuredText"]>;
  in: Maybe<Array<Maybe<Scalars["PrismicStructuredText"]>>>;
  ne: Maybe<Scalars["PrismicStructuredText"]>;
  nin: Maybe<Array<Maybe<Scalars["PrismicStructuredText"]>>>;
};

export type PrismicStructuredTextType = {
  html: Maybe<Scalars["String"]>;
  /** @deprecated This field has been renamed to `richText`. The `richText` field has the same value the `raw` field. */
  raw: Scalars["PrismicStructuredText"];
  richText: Scalars["PrismicStructuredText"];
  text: Maybe<Scalars["String"]>;
};

export type PrismicStructuredTextTypeFilterInput = {
  html: Maybe<StringQueryOperatorInput>;
  raw: Maybe<PrismicStructuredTextQueryOperatorInput>;
  richText: Maybe<PrismicStructuredTextQueryOperatorInput>;
  text: Maybe<StringQueryOperatorInput>;
};

export type PrismicTypePathType = Node & {
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  kind: Scalars["String"];
  parent: Maybe<Node>;
  path: Array<Scalars["String"]>;
  type: Scalars["String"];
};

export type PrismicTypePathTypeConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<PrismicTypePathTypeEdge>;
  group: Array<PrismicTypePathTypeGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<PrismicTypePathType>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type PrismicTypePathTypeConnectionDistinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionGroupArgs = {
  field: PrismicTypePathTypeFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type PrismicTypePathTypeConnectionMaxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionMinArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeConnectionSumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeEdge = {
  next: Maybe<PrismicTypePathType>;
  node: PrismicTypePathType;
  previous: Maybe<PrismicTypePathType>;
};

export enum PrismicTypePathTypeFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Kind = "kind",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Path = "path",
  Type = "type",
}

export type PrismicTypePathTypeFilterInput = {
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  kind: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type PrismicTypePathTypeGroupConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<PrismicTypePathTypeEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<PrismicTypePathTypeGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<PrismicTypePathType>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type PrismicTypePathTypeGroupConnectionDistinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeGroupConnectionGroupArgs = {
  field: PrismicTypePathTypeFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type PrismicTypePathTypeGroupConnectionMaxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeGroupConnectionMinArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeGroupConnectionSumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};

export type PrismicTypePathTypeSortInput = {
  fields: Maybe<Array<Maybe<PrismicTypePathTypeFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Query = {
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allPrismicEmbedType: PrismicEmbedTypeConnection;
  allPrismicPage: PrismicPageConnection;
  allPrismicProduct: PrismicProductConnection;
  allPrismicTypePathType: PrismicTypePathTypeConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  directory: Maybe<Directory>;
  file: Maybe<File>;
  prismicEmbedType: Maybe<PrismicEmbedType>;
  prismicPage: Maybe<PrismicPage>;
  prismicProduct: Maybe<PrismicProduct>;
  prismicTypePathType: Maybe<PrismicTypePathType>;
  site: Maybe<Site>;
  siteBuildMetadata: Maybe<SiteBuildMetadata>;
  siteFunction: Maybe<SiteFunction>;
  sitePage: Maybe<SitePage>;
  sitePlugin: Maybe<SitePlugin>;
};

export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<FileSortInput>;
};

export type QueryAllPrismicEmbedTypeArgs = {
  filter: Maybe<PrismicEmbedTypeFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<PrismicEmbedTypeSortInput>;
};

export type QueryAllPrismicPageArgs = {
  filter: Maybe<PrismicPageFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<PrismicPageSortInput>;
};

export type QueryAllPrismicProductArgs = {
  filter: Maybe<PrismicProductFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<PrismicProductSortInput>;
};

export type QueryAllPrismicTypePathTypeArgs = {
  filter: Maybe<PrismicTypePathTypeFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<PrismicTypePathTypeSortInput>;
};

export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
  sort: Maybe<SitePluginSortInput>;
};

export type QueryDirectoryArgs = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath: Maybe<StringQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  mode: Maybe<IntQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
};

export type QueryPrismicEmbedTypeArgs = {
  author_name: Maybe<StringQueryOperatorInput>;
  author_url: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  embed_url: Maybe<StringQueryOperatorInput>;
  height: Maybe<IntQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
  prismicId: Maybe<StringQueryOperatorInput>;
  provider_name: Maybe<StringQueryOperatorInput>;
  provider_url: Maybe<StringQueryOperatorInput>;
  thumbnail_height: Maybe<IntQueryOperatorInput>;
  thumbnail_url: Maybe<StringQueryOperatorInput>;
  thumbnail_width: Maybe<IntQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  width: Maybe<IntQueryOperatorInput>;
};

export type QueryPrismicPageArgs = {
  _previewable: Maybe<IdQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: Maybe<NodeFilterListInput>;
  data: Maybe<PrismicPageDataTypeFilterInput>;
  dataRaw: Maybe<JsonQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prismicId: Maybe<IdQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  uid: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
};

export type QueryPrismicProductArgs = {
  _previewable: Maybe<IdQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: Maybe<NodeFilterListInput>;
  data: Maybe<PrismicProductDataTypeFilterInput>;
  dataRaw: Maybe<JsonQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  prismicId: Maybe<IdQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
};

export type QueryPrismicTypePathTypeArgs = {
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  kind: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
};

export type QuerySiteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  host: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  jsxRuntime: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  port: Maybe<IntQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  functionRoute: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children: Maybe<NodeFilterListInput>;
  component: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JsonQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<JsonQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JsonQueryOperatorInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  buildTime: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  host: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  jsxRuntime: Maybe<Scalars["String"]>;
  parent: Maybe<Node>;
  pathPrefix: Maybe<Scalars["String"]>;
  polyfill: Maybe<Scalars["Boolean"]>;
  port: Maybe<Scalars["Int"]>;
  siteMetadata: Maybe<SiteSiteMetadata>;
};

export type SiteBuildTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  buildTime: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference: Maybe<Scalars["String"]>;
  formatString: Maybe<Scalars["String"]>;
  fromNow: Maybe<Scalars["Boolean"]>;
  locale: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
}

export type SiteBuildMetadataFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  parent: Maybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next: Maybe<Site>;
  node: Site;
  previous: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Host = "host",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  JsxRuntime = "jsxRuntime",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PathPrefix = "pathPrefix",
  Polyfill = "polyfill",
  Port = "port",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataSiteUrl = "siteMetadata___siteUrl",
  SiteMetadataTitle = "siteMetadata___title",
}

export type SiteFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  host: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  jsxRuntime: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  port: Maybe<IntQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  absoluteCompiledFilePath: Scalars["String"];
  children: Array<Node>;
  functionRoute: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  matchPath: Maybe<Scalars["String"]>;
  originalAbsoluteFilePath: Scalars["String"];
  originalRelativeFilePath: Scalars["String"];
  parent: Maybe<Node>;
  pluginName: Scalars["String"];
  relativeCompiledFilePath: Scalars["String"];
};

export type SiteFunctionConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next: Maybe<SiteFunction>;
  node: SiteFunction;
  previous: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = "absoluteCompiledFilePath",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FunctionRoute = "functionRoute",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MatchPath = "matchPath",
  OriginalAbsoluteFilePath = "originalAbsoluteFilePath",
  OriginalRelativeFilePath = "originalRelativeFilePath",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginName = "pluginName",
  RelativeCompiledFilePath = "relativeCompiledFilePath",
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  functionRoute: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<SiteFunctionGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  children: Array<Node>;
  component: Scalars["String"];
  componentChunkName: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  internalComponentName: Scalars["String"];
  matchPath: Maybe<Scalars["String"]>;
  pageContext: Maybe<Scalars["JSON"]>;
  parent: Maybe<Node>;
  path: Scalars["String"];
  pluginCreator: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next: Maybe<SitePage>;
  node: SitePage;
  previous: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  Id = "id",
  InternalComponentName = "internalComponentName",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MatchPath = "matchPath",
  PageContext = "pageContext",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Path = "path",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorPackageJson = "pluginCreator___packageJson",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPluginOptions = "pluginCreator___pluginOptions",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorVersion = "pluginCreator___version",
}

export type SitePageFilterInput = {
  children: Maybe<NodeFilterListInput>;
  component: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JsonQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  path: Maybe<StringQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  browserAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  name: Maybe<Scalars["String"]>;
  nodeAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  packageJson: Maybe<Scalars["JSON"]>;
  parent: Maybe<Node>;
  pluginFilepath: Maybe<Scalars["String"]>;
  pluginOptions: Maybe<Scalars["JSON"]>;
  resolve: Maybe<Scalars["String"]>;
  ssrAPIs: Maybe<Array<Maybe<Scalars["String"]>>>;
  version: Maybe<Scalars["String"]>;
};

export type SitePluginConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next: Maybe<SitePlugin>;
  node: SitePlugin;
  previous: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = "browserAPIs",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  NodeApIs = "nodeAPIs",
  PackageJson = "packageJson",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginFilepath = "pluginFilepath",
  PluginOptions = "pluginOptions",
  Resolve = "resolve",
  SsrApIs = "ssrAPIs",
  Version = "version",
}

export type SitePluginFilterInput = {
  browserAPIs: Maybe<StringQueryOperatorInput>;
  children: Maybe<NodeFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<JsonQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JsonQueryOperatorInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  field: Scalars["String"];
  fieldValue: Maybe<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
  max: Maybe<Scalars["Float"]>;
  min: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit: Maybe<Scalars["Int"]>;
  skip: Maybe<Scalars["Int"]>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  description: Maybe<Scalars["String"]>;
  siteUrl: Maybe<Scalars["String"]>;
  title: Maybe<Scalars["String"]>;
};

export type SiteSiteMetadataFilterInput = {
  description: Maybe<StringQueryOperatorInput>;
  siteUrl: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars["String"]>;
  glob: Maybe<Scalars["String"]>;
  in: Maybe<Array<Maybe<Scalars["String"]>>>;
  ne: Maybe<Scalars["String"]>;
  nin: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex: Maybe<Scalars["String"]>;
};

export type GatsbyImgixFluidFragment = {
  aspectRatio: number;
  src: string;
  srcWebp: string;
  srcSet: string;
  srcSetWebp: string;
  sizes: string;
  base64: string;
};

export type GatsbyImgixFluid_NoBase64Fragment = {
  aspectRatio: number;
  src: string;
  srcWebp: string;
  srcSet: string;
  srcSetWebp: string;
  sizes: string;
};

export type GatsbyImgixFixedFragment = {
  base64: string;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
};

export type GatsbyImgixFixed_NoBase64Fragment = {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
};

export type AllPagesQueryVariables = Exact<{ [key: string]: never }>;

export type AllPagesQuery = {
  allPrismicPage: {
    nodes: Array<{
      _previewable: string;
      url: string | null;
      data: { title: { text: string | null } | null };
    }>;
  };
};

type SlicesPageDataBody_PrismicPageDataBodyFeature_Fragment = {
  slice_type: string;
  primary: {
    variant: string | null;
    intro_text: {
      text: string | null;
      richText: import("@prismicio/types").RichTextField;
    } | null;
    image: { gatsbyImageData: unknown | null; alt: string | null } | null;
    detail_text: {
      text: string | null;
      richText: import("@prismicio/types").RichTextField;
    } | null;
    button_text: { text: string | null } | null;
    button_link: { url: string | null; target: string | null } | null;
  };
};

type SlicesPageDataBody_PrismicPageDataBodyHeroFeature_Fragment = {
  slice_type: string;
  primary: {
    text: {
      text: string | null;
      richText: import("@prismicio/types").RichTextField;
    } | null;
    button_text: { text: string | null } | null;
    button_link: { url: string | null; target: string | null } | null;
    image: { gatsbyImageData: unknown | null; alt: string | null } | null;
  };
};

type SlicesPageDataBody_PrismicPageDataBodyInlineNavigation_Fragment = {
  slice_type: string;
  primary: { leading_text: { text: string | null } | null };
  items: Array<{
    link_label: { text: string | null } | null;
    link: { url: string | null; target: string | null } | null;
  }>;
};

type SlicesPageDataBody_PrismicPageDataBodyVideo_Fragment = {
  slice_type: string;
  primary: {
    intro_text: {
      text: string | null;
      richText: import("@prismicio/types").RichTextField;
    } | null;
    video_url: { html: string | null } | null;
  };
};

export type SlicesPageDataBodyFragment =
  | SlicesPageDataBody_PrismicPageDataBodyFeature_Fragment
  | SlicesPageDataBody_PrismicPageDataBodyHeroFeature_Fragment
  | SlicesPageDataBody_PrismicPageDataBodyInlineNavigation_Fragment
  | SlicesPageDataBody_PrismicPageDataBodyVideo_Fragment;

export type PageDataBodyFeatureFragment = {
  slice_type: string;
  primary: {
    variant: string | null;
    intro_text: {
      text: string | null;
      richText: import("@prismicio/types").RichTextField;
    } | null;
    image: { gatsbyImageData: unknown | null; alt: string | null } | null;
    detail_text: {
      text: string | null;
      richText: import("@prismicio/types").RichTextField;
    } | null;
    button_text: { text: string | null } | null;
    button_link: { url: string | null; target: string | null } | null;
  };
};

export type PageDataBodyHeroFeatureFragment = {
  slice_type: string;
  primary: {
    text: {
      text: string | null;
      richText: import("@prismicio/types").RichTextField;
    } | null;
    button_text: { text: string | null } | null;
    button_link: { url: string | null; target: string | null } | null;
    image: { gatsbyImageData: unknown | null; alt: string | null } | null;
  };
};

export type PageDataBodyInlineNavigationFragment = {
  slice_type: string;
  primary: { leading_text: { text: string | null } | null };
  items: Array<{
    link_label: { text: string | null } | null;
    link: { url: string | null; target: string | null } | null;
  }>;
};

export type PageDataBodyVideoFragment = {
  slice_type: string;
  primary: {
    intro_text: {
      text: string | null;
      richText: import("@prismicio/types").RichTextField;
    } | null;
    video_url: { html: string | null } | null;
  };
};

export type PageTemplateQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type PageTemplateQuery = {
  prismicPage: {
    _previewable: string;
    data: {
      title: { text: string | null } | null;
      body: Array<
        | {
            slice_type: string;
            primary: {
              variant: string | null;
              intro_text: {
                text: string | null;
                richText: import("@prismicio/types").RichTextField;
              } | null;
              image: {
                gatsbyImageData: unknown | null;
                alt: string | null;
              } | null;
              detail_text: {
                text: string | null;
                richText: import("@prismicio/types").RichTextField;
              } | null;
              button_text: { text: string | null } | null;
              button_link: { url: string | null; target: string | null } | null;
            };
          }
        | {
            slice_type: string;
            primary: {
              text: {
                text: string | null;
                richText: import("@prismicio/types").RichTextField;
              } | null;
              button_text: { text: string | null } | null;
              button_link: { url: string | null; target: string | null } | null;
              image: {
                gatsbyImageData: unknown | null;
                alt: string | null;
              } | null;
            };
          }
        | {
            slice_type: string;
            primary: { leading_text: { text: string | null } | null };
            items: Array<{
              link_label: { text: string | null } | null;
              link: { url: string | null; target: string | null } | null;
            }>;
          }
        | {
            slice_type: string;
            primary: {
              intro_text: {
                text: string | null;
                richText: import("@prismicio/types").RichTextField;
              } | null;
              video_url: { html: string | null } | null;
            };
          }
      >;
    };
  } | null;
};
