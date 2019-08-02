export interface Project {
  id: number;
  name: string;
  stories: Story[];
}

export interface Story {
  id: string;
  name: string;
  description: string;
  storyType: string;
  comments: Comment[];
  tasks: Task[];
  labels: Label[];
  estimate: number;
}

export interface Comment {
  id: string;
  text: string;
  personName: string;
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
