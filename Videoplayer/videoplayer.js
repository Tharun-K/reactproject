import React from "react"
import image from "./8e39d605e91e313309781f09306daa91.jpg"

// import Content from "./videos"

function VideoPlayer(){
    return(
        <>
        <div style={{justifyContent:"center", backgroundColor:"yellow",display:"flex"}}>
            {/* <Navbar style={{justifyContent:"center", backgroundColor:"yellow"}}>
            <img src={image} style={{width:50,height:50}}/>
        <h1 style={{textAlign:"center"}}>  &nbsp; VideoPlayer app</h1>
        </Navbar> */}
        <img src={image} style={{width:60,height:50, marginTop:30}}/>
        <h1 style={{textAlign:"center",fontSize:40}}>  &nbsp; VideoPlayer app</h1>
        </div>
        </>
        )
}
        export default VideoPlayer