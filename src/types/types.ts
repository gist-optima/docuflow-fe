export enum SnippetKind {
  Document = "Document",
  Chart = "Chart",
  Image = "Image",
}

export interface Project {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface Version {
  id: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  projectId: number;
  tag: string;
  parentId: number;
  child: VersionChild[];
  mergeParentId: number;
  isCommited: boolean;
}

export interface DetailedVersion extends Version {
  Snippet: Snippet[];
  Container: Container[];
  firstLayerSnippet: Snippet[];
  firstLayerContainer: Container[];
}

export interface VersionChild {
  id: number;
}

export interface Layer {
  id: number;
}

export interface DetailedProject extends Project {
  users: User[];
  Version: Version[];
  PullRequest: PullRequest[];
}
export interface PullRequest {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  fromTag: string;
  toTag: string;
  projectId: number;
}

export enum QueryKey {
  SearchUsers = "searchUsers",
  GetProjects = "getProjects",
  GetProject = "getProject",
  GetVersion = "getVersion",
  GenerateContainer = "generateContainer",
  GetPullRequest = "getPullRequest",
  GetBranchDiff = "getBranchDiff",
}

export interface Container {
  id: number;
  name: string;
  order: number;
  parentId: number | null;
  Snippet: Snippet[];
  child: Container[];
}

export interface Snippet {
  id: number;
  indicator: string;
  order: number;
  content: string;
  type: SnippetKind;
  createdAt: string;
  containerId: number;
}
