import { AnimeCard } from "../../component/animeCard"
import { BeatLoader } from "react-spinners"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    
    
  } from "recharts";
//reducers
import { useAnimeLogic } from "../../logic/animeLogic"
//styles
import { AnimeWrapper, CustomTooltipStyle, LoaderWrapper } from "./animepage.style"

interface ICustomToolTip{
    active?: any,
    payload?: any,
    label?:any
}




const CustomToolTip = ({active,payload,label}:ICustomToolTip) => {
    
    return (
        <CustomTooltipStyle>
            <p>{label}</p>
            <p>{payload[0]?.payload?.movies }</p>
        </CustomTooltipStyle>
    )
}


export const AnimePage = () => {
    const { state } = useAnimeLogic() 
    const isLoading = state.loading === true;
    const data = state?.graphData

    if (isLoading) return <LoaderWrapper>
        <BeatLoader color="#36d7b7" />
    </LoaderWrapper>
    
    return (
   
        <AnimeWrapper  >
            <div className="animeContainer">
                <p className="tabHeader">Anime Ranking Page </p>

                <div className="animeListContainer">

                                    {  state.arrayOfAmime.map((eachItems:any) => {

                                        const { title, rank, images, aired,rating } = eachItems;
                                        const yearRelease = new Date(aired.from).toDateString()
                                        const latestRelease = new Date(aired.to).toDateString()
                                    const imageUrl = images?.jpg?.image_url
                                        return <AnimeCard
                                            title={title}
                                            rank={rank}
                                            imageUrl={imageUrl}
                                            rating={rating}
                                            yearRelease={yearRelease}
                                            latestRelease={latestRelease}

                                        />
                    })
                    }
                </div>

               
               
            </div>
            <div >
                <ResponsiveContainer  width="100%" height={400}>
                <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
                    >

                        <defs>
                            

                        <linearGradient id="colorUv" x1='0' y1='0' x2='100%' y2='0' spreadMethod='reflect'>
                <stop offset='0' stopColor="#7DDDA6" />
                <stop offset='1' stopColor="#A9A5D5" />
   </linearGradient>
                            {/* <linearGradient id="colorUv" spreadMethod="blur" >
            <stop offset="60%"  opacity={1} stopColor="#7DDDA6" />
        <stop offset="50%" opacity={1} stopColor="#A9A5D5" />
      
      
    </linearGradient> */}
    {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="50%" stopColor="#A9A5D5" />
     
    </linearGradient> */}
  </defs>
                      
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis dataKey="uv" />
                    <Tooltip 
                        content={<CustomToolTip/>}
                       
                    />
                    <Area type="monotoneX" dataKey="uv"  fill="url(#colorUv)" />
      
    </AreaChart>
                </ResponsiveContainer>
         
                
            </div>
        </AnimeWrapper>
    )
}