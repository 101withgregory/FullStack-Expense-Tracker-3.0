import { useContext } from "react";
import { GlobalContext } from "./globalProvider";


export const useGlobalContext = ()=>{
    return useContext(GlobalContext);
  }