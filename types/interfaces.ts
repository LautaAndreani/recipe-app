interface Ingredients {
  ingrediente: string;
  cantidad: number | string;
}

export interface MainProps {
  title: string;
  description: string;
  image: string;
  time: string;
  id: string;
  category: string;
  ingredients: Ingredients[];
}

//Map ingredients

export interface IngredientsProps {
  ingredients: {
    ingrediente: string;
    cantidad: string | number;
  };
}

//Add recipe
export interface AddProps {
  onClose: () => void;
  isOpen: boolean;
}
