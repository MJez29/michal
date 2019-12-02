export interface Story {
  title: React.ReactNode;
  body: React.ReactNode;
  connections: StoryConnection[];
}

interface StoryConnection {
  to: Story;
  prompts: string[];
}
