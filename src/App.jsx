import React, {useState} from 'react';
import "./App.css"
 function App(props) {
  const [photos, setPhotos] = useState([
     {id:101, url:"https://wallpapers.com/images/featured/prague-l8aujv2epf7ojy0r.jpg"},
     {id:102, url:"https://images8.alphacoders.com/374/374028.jpg"},
     {id:103, url:"https://images7.alphacoders.com/487/thumb-1920-487159.jpg"},
     {id:104, url:"https://wallpapers.com/images/hd/prague-church-at-dawn-500ebpx4fnhzqxni.jpg"},
     {id:105, url:"https://wallpapers.com/images/hd/prague-churches-and-spires-kr2ll9pmha86r9tt.jpg"},
     {id:106, url:"https://c4.wallpaperflare.com/wallpaper/150/315/757/prague-czechia-czech-republic-europe-wallpaper-preview.jpg"},
     {id:107, url:"https://wallpapers-hub.art/wallpaper-images/41279.jpg"},
     {id:108, url:"https://wallpaper.dog/large/20388524.jpg"},
  ])
  const [index,setIndex]=useState(0)
  const handleNext=()=>{
    if(index==photos.length-1){
      setIndex(0)
    }else{
      setIndex(index+1)
    }
    
  }
  const handlePrew=()=>{
    if(index==0){
      setIndex(photos.length-1)
    }else{
      setIndex(index-1)
    }
  }
  const handlePhoto=(i)=>{
    setIndex(i)
  }
  return (
    <div >
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img  id='main' src={photos[index].url} />
      <div>
        <button onClick={handlePrew}>Prew</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div id='timeliine'>
        {photos.map((elm,i)=>{
          let style=i==index?"active":""
          return <img key={elm.id} src={elm.url} className={style}  onClick={()=>handlePhoto(i)}/>
        })}
      </div>
    </div>
  );
}
export default App 

///conditional rendering