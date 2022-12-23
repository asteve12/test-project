import { animated, useSpring } from '@react-spring/web'
import { useAnimeLogic } from '../logic/animeLogic'


//styles
import { AnimeCardStyles, AnimeImageContainer } from "./animecard.style"


interface IAnimeCard {
    title: string,
    imageUrl: string,
    rank: string,
    yearRelease: string,
    rating: string,
    latestRelease:string
    
}


export const AnimeCard = (props: IAnimeCard) => {
    const {springs,handleCardAnimation, mouseLeaveHandler} = useAnimeLogic()
    
    


    return (
        <AnimeCardStyles>
            
            <animated.div
                onClick={handleCardAnimation}
                onMouseLeave={mouseLeaveHandler}
                
                style={{
                    ...springs,
                    position: "absolute",
                    
                }}
                className="animeCardWrapper">
            <AnimeImageContainer >
                <img  className="movieCover"  src={props.imageUrl} alt="" />
                </AnimeImageContainer>
            <span className="rankTag">{props.rank}</span>
            <div className="movitTitleWrapper">
                    <p className="movieTitle">
                        {props.title }            
                    </p> 

                </div>
                <div className="detailsBx">
                    <p>
                        <span><b>Release</b>:{props.yearRelease}</span>
                    </p>
                    <p>
                        <span><b>Latest</b>:{props.latestRelease}</span>
                    </p>
                    <p>
                        <span><b>Rating</b>:{props.rating}</span>
                    </p>
                </div>
           
        </animated.div>
    </AnimeCardStyles>
   
    )
}