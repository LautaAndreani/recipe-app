import { addDoc, collection, getDocs } from "firebase/firestore";
import db from "./FirebaseClient";

export default {
  recipes: async () => {
    const dataToParse: any = [];
    const querySnapshot = await getDocs(collection(db, "recipe"));
    querySnapshot.forEach((res) => {
      dataToParse.push(res.data());
      return dataToParse;
    });
    return dataToParse;
  },
  upload: async (recipes: any) => {
    try {
      const docRef = await addDoc(collection(db, "recipe"), recipes);
      console.log("Your upload it's succesfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
};
