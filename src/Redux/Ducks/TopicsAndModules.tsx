interface IModule {
  title: string;
  description: string;
  thumbnail: string;
}

interface IState {
  topics: { [key: string]: IModule[] };
}

const initialState: IState = {
  topics: {
    QuickStart: [
      {
        title: "Modulo 1",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
      {
        title: "Modulo 2",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
      {
        title: "Modulo 3",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
      {
        title: "Modulo 4",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
    ],
    HTML: [
      {
        title: "Modulo 1",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
      {
        title: "Modulo 2",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
    ],
    CSS: [
      {
        title: "Modulo 2",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
    ],
    Javascript: [
      {
        title: "Modulo 2",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
    ],
    React: [
      {
        title: "Modulo 2",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
    ],
    Node: [
      {
        title: "Modulo 2",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
    ],
    Express: [
      {
        title: "Modulo 2",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
    ],
    MongoDB: [
      {
        title: "Modulo 2",
        description: "Test",
        thumbnail: "https://i.ytimg.com/vi/VmUhCDtN7nw/default.jpg",
      },
    ],
  },
};

const DEFAULT = "DEFAULT";

interface Default {
  type: typeof DEFAULT;
}

export type TopicsAndModulesActions = Default;

export const topicsAndModules = (
  state = initialState,
  action: TopicsAndModulesActions
): IState => {
  switch (action.type) {
    default:
      return state;
  }
};
