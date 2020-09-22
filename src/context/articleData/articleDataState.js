import React, { useReducer } from "react";
import ArticleDataReducer from "./articleDataReducer";
import ArticleDataContext from "./articleDataContext";

const ArticleDataState = ({children}) => {
    const initialState = {data: []};
    const [state, dispatch] = useReducer(ArticleDataReducer, initialState);

    const setData = async data => {
          dispatch({
            type: "SET_DATA",
            payload: data
          });
      };

    const getData = () => {
        dispatch({
            type: "GET_DATA"
          });
    }

      return (
          <ArticleDataContext.Provider
          value={{
              setData,
              getData,
              data: state
            }}
          >
            {children}
          </ArticleDataContext.Provider>
      )
}

export default ArticleDataState;