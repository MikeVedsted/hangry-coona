export type DishProps = {
  name: string;
  image: string;
};

export type HomeProps = {
  setContent: (content: string) => void;
};

export type DishObject = {
  name: string;
  main: string;
  type: string;
  time: string;
  image: string;
};
