const ArticleDataReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            sessionStorage.setItem("data", JSON.stringify(action.payload));
            return {
                ...state,
                ...action.payload
            }
        case "GET_DATA":
            let data = sessionStorage.getItem("data");
            return  JSON.parse(data);
        default:
            return state;
    }
}

export default ArticleDataReducer;