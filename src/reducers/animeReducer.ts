interface IAction{
    type: string,
    payload: {
        value:any
    }
}



export const initialState = {
    loading: false,
    error: false,
    arrayOfAmime: [],
    amountofMovieReleasePerYear: [],
    availableYears: [],
    graphData:[]
    
}



export const AnimeReducersHandlers = (state = initialState,action:IAction) => {
    switch (action.type) {
        
        case "LOADING":
            return {
                ...state,
                loading:action.payload.value
            }
        case "UPDATE_ANIME_ARRAY":
            return {
                ...state,
                arrayOfAmime:action.payload.value

            }
        case "ERROR":
            return {
                ...state,
                error:action.payload.value
            }
        case "UPDATE_AMT_OF_MOVIE_RELEASE":
            return {
                ...state,
                amountofMovieReleasePerYear:action.payload.value
            }
        case "UPDATE_AVAILABLE_YEARS":
            return {
                ...state,
                availableYears:action.payload.value
            }
        case "UPDATE_GRAPH_DATA":

            return{
                ...state,
                graphData:action.payload.value
            }
        
        default:

            return {
                ...state
            }
        
    }
    
}