import styled from "styled-components";


export const AnimeCardStyles = styled.div`
position:relative;
cursor:pointer;
width:200px;
height:300px;



.detailsBx{
    padding-left:10px;
    
}

.animeCardWrapper{
width:200px;
height:300px;
border-radius:7px;
background-color:white;
overflow:hidden;
cursor:pointer;
position:absolute;


}


.movitTitleWrapper{
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
}

.rankTag{
    background-color:#DA65AB;
    position:absolute;
    top:-2px;
    right:-2px;
    width:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-top-right-radius: 10px 10px;
    font-size:15px;
    padding:3px;
   
}

.movieTitle{
    text-align:center;
    display: -webkit-box;   
    -webkit-line-clamp: 2;   
    -webkit-box-orient: vertical;     
    overflow: hidden; 
   width:100%;
    padding:5px;
    margin:0px;
}

.movieCover{
    width:100%;
    border-top-radius:10px;
    height:100%;
    object-fit:cover
}

`

export const AnimeImageContainer = styled.div`
width:100%;
height:250px;


`