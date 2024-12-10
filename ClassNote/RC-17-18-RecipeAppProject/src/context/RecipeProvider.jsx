//!context alanı create edelim

import axios from "axios";
import { createContext, useState } from "react";

const APP_ID = "58c5091b";
const APP_KEY = "9ced208298cb1fd453c44d6655f88efb";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  /* -------------------------------------------------------------------------- */
  //! Home, header, recipecard da gerekli olan veriler
  const [recipes, setRecipes] = useState([]);

  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Breakfast");
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getData = async () => {
    const {data} = await axios.get(url);
    console.log(data.hits)
    setRecipes(data.hits)
  };

  /* -------------------------------------------------------------------------- */
  /* ---------------- Diğer bölümlerde kullanılacak değişkenler --------------- */
  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );

  return (
    <RecipeContext.Provider
      value={{
        name,
        password,
        setName,
        setPassword,
        query,
        setQuery,
        mealType,
        setMealType,
        getData,
        recipes,
        setRecipes
      }}
    >
      {" "}
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;

