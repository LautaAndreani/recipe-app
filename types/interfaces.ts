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

export interface BooleanProps {
  isUpdate: Boolean;
  setIsUpdate: React.Dispatch<React.SetStateAction<Boolean>>;
}
//Add recipe
export interface AddProps {
  onClose: () => void;
  isOpen: boolean;
  isUpdate: Boolean;
  setIsUpdate: React.Dispatch<React.SetStateAction<Boolean>>;
}

//Firebase Data
export interface FirebaseProps {
  title: string;
  description: string;
  time: string;
  id: string;
  category: string;
  ingredientsArr: Ingredients[];
}

export interface Links {
  route: string,
  text: string,
}
