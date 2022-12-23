import styled from "styled-components"





export const CustomTooltipStyle = styled.div`
width:200px;
height:auto;
border-radius:5px;
border:solid 1px red !important;
text-align:center;





`

export const AnimeWrapper = styled.div`
display:grid;
grid-template-columns:100vw;
grid-template-rows:90%;
height:auto;
justify-content:center;
box-sizing:border-box;



.chartContainer{
    width:80%;
    height:400px;
    background-color:grey;
    margin-left:auto;
    margin-right:auto;
}




.animeContainer{
    background-color:#F1EFE3;
 
    width:100%;
     padding:5%;
     box-sizing:border-box;
     height:auto;
     overflow-y:scroll;
   
    
}

.tabHeader{
    font-size:25px;
}


.animeListContainer{
    display:grid;
    width:100%;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    column-gap:3px;
    row-gap:20px;
    justify-content:center;
    height:auto
   
  
    

}



`


export const LoaderWrapper = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;



`