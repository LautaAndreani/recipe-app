interface Ingredients {
  name: string;
  alt: string;
  cantidad: number | string;
}

export interface MainProps {
  title: string;
  description: string;
  image: string;
  time: string;
  id: number;
  ingredients: Ingredients[];
}

//Map ingredients

export interface IngredientsProps {
  name: string;
  alt: string;
}
