export interface Project {
  id: number;
  name: string;
  stories: Array<Story>;
}

export interface Story {
  id: string;
  name: string;
  description: string;
  storyType: string;
  comments: Array<Comment>;
  tasks: Array<Task>;
  labels: Array<Label>;
  estimate: Number;
}

export interface Comment {
  id: string;
  text: string;
  personId: number;
  createdAt: Date;
}

export interface Task {
  id: string;
  description: string;
  complete: boolean;
}

export interface Label {
  id: string;
  name: string;
}
