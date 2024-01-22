
import video1 from "./Ram Sita Ram.mp4"
import video2 from "./Le Padha Padhaa.mp4"
import video3 from "./Sri ramadhootha.mp4"
import video4 from "./Samayama.mp4"
import video5 from "./Nanna nu na pranam.mp4"
import video6 from "./Salaar trailer.mp4"
import video7 from "./Adigaa.mp4"
import video8 from "./Inthandham.mp4"
import video9 from "./Krishna Trance.mp4"
import video10 from "./Sooredhe.mp4"
import { useRef, useState } from "react"
import VideoPlayer from "./videoplayer"
const Content=()=>{
    const initialSongs=[
    {
        songname:"Ram Sita Ram",
        moviename:"Adipurush",  
        video:video1
    },
    {
        songname:"Le padha padha",
        moviename:"M.s. Dhoni",
        video:video2
    }
    ,
    {
        songname:"Sri ramadhootha",
        moviename:"Hanuman",    
        video:video3
    },
    {
        songname:"Samayama",
        moviename:"Hi Nanna",
        video:video4
    },
    {
        songname:"Nanna nu na pranam",
        moviename:"Animal",
        video:video5
    },
    {
        songname:"Salaar trailer",
        moviename:"Salaar",
        video:video6
    },
    {
        songname:"Adigaa",
        moviename:"Hi Nanna",
        video:video7
    },
    {
        songname:"Inthandham",
        moviename:"Sita Ramam",
        video:video8
    },
    {
        songname:"krishna Trance",
        moviename:"karthikeya 2",
        video:video9
    },  
    {
        songname:"Prathi gadhalo",
        moviename:"salaar",
        video:video10
    }
      
]
const [currentSong,setCurrentSong]=useState(initialSongs)
    const inputRef=useRef()
    const handleLoad=()=>{
      const k= inputRef.current.value.toLowerCase()
      if (k.trim() === '') {
      alert('Please enter a song name.');
      return;
    }
    // const regex = new RegExp(`^${k}`, 'i');
    const filteredSongs = currentSong.filter((element) =>
      element.songname.toLowerCase()===k ||
      element.moviename.toLowerCase()===k
   )
filteredSongs.length>0?
   setCurrentSong(filteredSongs):
   setCurrentSong([])
};
const handleBack=()=>{
    setCurrentSong(initialSongs)   
}
    return(
        <>    
        <VideoPlayer/>
        <div style={{justifyContent:"center",display:"flex",gap:10,padding:10}}>
        <input style={{width:500,height:60}} type="text" placeholder="search by song name or movie name" ref={inputRef}/>  
        <button onClick={handleLoad} style={{backgroundColor:"GrayText",color:"lawngreen",width:80,fontSize:20}}>Search</button> 
        <button onClick={handleBack} style={{backgroundColor:"ThreeDHighlight",color:"Window",width:80,fontSize:20}}> Back</button>
        </div>
        <div style={{display:"flex",gap:20,flexWrap:"wrap",padding:5}}>  
            {currentSong.length > 0 ? 
            (
              currentSong.map((element, index) => (
            <div style={{ border: "1px solid red"}} key={index}>
              {/* {console.log(currentSong)} */}
              <video width="280" height="150" controls src={element.video} type="video/mp4" />
              <h3>Song name: {element.songname}</h3>    
              <h3>Movie name: {element.moviename}</h3>
            </div>
          )
          )
        )
         : 
         (
          <div style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>
          <h3 style={{color:"red"}}>No records found</h3> 
          </div>
        )
        }
        </div>         
        </>
    )
}
export default Content

 