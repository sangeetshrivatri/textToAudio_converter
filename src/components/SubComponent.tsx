import React, { useEffect, useState, useRef } from "react"
import axios from 'axios';
import { List, Popup, Segment, Dropdown, Button } from 'semantic-ui-react'
import './SubComponent.css'

export default function SubComponent () {
  const [audioUrl, setAudioUrl] = useState <any>([])
  const [bookmarks, setBookmarks] = useState([])
  const [book, setBook] = useState([])
  const audioPlayer = useRef<any>();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getJson = async () => {

        // Till the data is fetch using API 
        // the Loading page will show.
        setLoading(true);

        // Await make wait until that 
        // promise settles and return its reult
        const response = await axios.get(
          "https://7rhv3pzyxk.execute-api.eu-central-1.amazonaws.com/test/credit-sights-output-sachin/poc/article/433115/getjson");

        // After fetching data stored it in posts state.
        setBook(response.data);

        // Closed the loading page
        setLoading(false);
    }

    // Call the function
    getJson();
}, []);

  const postData = () => {
     fetch("https://7rhv3pzyxk.execute-api.eu-central-1.amazonaws.com/test/credit-sights-output-sachin/poc/article/433115",
     {
     
      // Adding method type
      method: "POST",
       
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    }
     )
     
   .then(response => {
          console.log("Afer the post call", response)

         
        return response.json()
        
      })
      
      .then(data => {
        setAudioUrl(data[0].URL)
      })
  }
  useEffect(() => {
    postData()
  }, [])

  useEffect(() => {
    const getBookmark = async () => {

        // Till the data is fetch using API 
        // the Loading page will show.
        setLoading(true);

        // Await make wait until that 
        // promise settles and return its reult
        const response = await axios.get(
          "https://7rhv3pzyxk.execute-api.eu-central-1.amazonaws.com/test/credit-sights-output-sachin/poc/article/433115/getbookmarks");

        // After fetching data stored it in posts state.
        setBookmarks(response.data);

        // Closed the loading page
        setLoading(false);
    }

    // Call the function
    getBookmark();
}, []);


  const stop = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  };

  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
    );
  };


  const DisplayData= bookmarks.map(
    (info : any)=>{
        const timeStampNew = () => {
            audioPlayer.current.currentTime=(info.time);

        }
        return(
          <List key={info.id}  divided onClick={timeStampNew}  relaxed>
          <List.Item>
            <List.Content>
              <List.Header  as='a'>{info.title}</List.Header>
            </List.Content>
          </List.Item>
          </List>
        )
    }
  )
 

  return (
    <div>
      <div>
        <Segment>
          <div className="dropdown">
            {audioUrl?
              <audio 
                controls
                className="Audio"
                src ={audioUrl}
                ref={audioPlayer}
                onTimeUpdate={onPlaying}
              >
              </audio>:''
            }

           <div className="innerDropdown">
              <Popup content='Stop' trigger={<Button  className='icon' onClick={stop} icon='stop circle outline' />} />
              <Popup content='Bookmarks'
                trigger={
                  <Dropdown
                    selection
                    placeholder='Select Bookmark'
                    icon='bookmark'
                    // floating
                    labeled
                    button
                    className='icon'
                  >
                    <Dropdown.Menu >
                        {DisplayData}
                      </Dropdown.Menu>
                  </Dropdown>
                }
              />
      </div>
    </div>
</Segment>
</div>
    </div>
  )
}