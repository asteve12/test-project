import { axiosInstance } from "../axios";
import React, { useReducer, useEffect, ReducerAction } from "react";
import { useSpring } from "@react-spring/web";
//reducers
import {
    initialState,
    AnimeReducersHandlers
} from "../reducers/animeReducer";


interface YearNumber{
    eachYear?: number,
    totalMovies?: string,
    movies?:string []
    
}



export const useAnimeLogic = () => {

    const [state, dispatch ] = useReducer(AnimeReducersHandlers, initialState);
    const [springs,  api] = useSpring(()=>({from:{
        width: "200px",
        height: "300px",
        zIndex: 0,
        right: "0px",
        left: "0px",
      
        

    },
    config: {
        mass: 100,
        friction: 100,
        tension: 0,
      }
    }))
  
    useEffect(() => {
        dispatch({ type: "LOADING",payload:{value:true}})
        fecthAnimation();
    }, [])
    
  
    //handle fetch all top twenty Animation
    function fecthAnimation() {
        
        axiosInstance.get("/top/anime")
            .then((response) => {
                const isLoadingSucessful = response.status === 200;
                if (isLoadingSucessful) {
                    const YearToMovieRelease: YearNumber [] =[]
                    const availableYears: number[] = [];
                    const arrayOfGraphData: any = []
    
                   //obtain available years
                    response?.data?.data?.slice(0,19)?.map((eachItems:any) => {
                        const isMovieYearAlreadyAvailable = availableYears.includes(eachItems.year)
                        if(!isMovieYearAlreadyAvailable) availableYears.push(eachItems.year)
                    })
    
                     //map year to movie amount created statistics;
                    availableYears.sort().map((eachYear: any) => {
                        const arrayOfMoviesCreatedTheSameYear:string [] = []
                       const yearStateObj: YearNumber = {};
                        let movieCount = 0;
                          response?.data?.data.map((eachMovieObject: any) => {
                            if (eachMovieObject.year === eachYear) {
                               
                                movieCount += 1;
                                arrayOfMoviesCreatedTheSameYear.push(eachMovieObject.title)
                            }
                            
                        })
                           yearStateObj["eachYear"] = eachYear
                           yearStateObj["totalMovies"] = movieCount.toString();
                           yearStateObj["movies"] = arrayOfMoviesCreatedTheSameYear
                           YearToMovieRelease.push(yearStateObj)
                    })

    
                    //construct graph data 
                    availableYears.sort().map((eachYear) => {
                        if (eachYear === null) return;
                       const obtainYearDateArray = YearToMovieRelease.filter((eachMovieObj)=>  eachMovieObj.eachYear ===  eachYear)
                        const graphOBject = {
                            name: eachYear,
                            uv: obtainYearDateArray[0]["movies"]!.length,
                            movies:obtainYearDateArray[0]["movies"]!.join()
                        }
                      arrayOfGraphData.push(graphOBject)
                        
                    })


    
                //update array of graph data
                    dispatch({type: "UPDATE_GRAPH_DATA", payload: {value: arrayOfGraphData}})
                   dispatch({ type: "LOADING", payload: { value: false } })
                    dispatch({type: "UPDATE_ANIME_ARRAY", payload: {value:response?.data?.data}})
                }
            }).
            catch((e) => {
                dispatch({type: "ERROR", payload: {value:e.error}})
            })
    }



    //handle each anime card Animation
    const handleCardAnimation = (e:React.MouseEvent) => {
        
        
        api.start({
            to: {
                width: "300px",
                height: "420px",
                zIndex: 300,
                 left: "-50px",
               
            }
        })
       
   }
   
    
    //disable Animation after mouse leave
    const mouseLeaveHandler = () => {
        api.start(
            {
              to:{
                    width: "200px",
                    height: "300px",
                     zIndex: 0,
                    left:"0px"
                    
                    
    
                }
            }
        )
        
    }



    return {
        state,
        fecthAnimation,
        springs,
        handleCardAnimation,
        mouseLeaveHandler
    }
      
    
}