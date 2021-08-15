import Form from "react-bootstrap/Form";
import {AuthContext} from "./context/auth";
import { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Meditate from "../src/images/yoga.jpg"
import Reading from "../src/images/Reading.jpg"
import Dancing from "../src/images/dance.jpg"
import Gardening from "../src/images/gardening.jpg"
import Music from "../src/images/music.jpg"
import React, { useState, useEffect } from 'react';
import './css/Time.css'
import { useHistory, Redirect } from "react-router-dom";


const Service =() => {
    const history = useHistory();
    const [StartTime, setStartTime] = useState("");
    const [EndTime, setEndTime] = useState("");
    const [Interval, setInterval] = useState("");
    const [Intrest, setIntrest] = useState([]);
    const [showform, setShowform] = useState(false);
    const [showIntrest, setShowIntrest] = useState(true);
    const [buttonTextDancing, setButtonTextDancing] = useState("Subscribe");
    const [buttonTextMeditation, setButtonTextMeditation] = useState("Subscribe");
    const [buttonTextGardening, setButtonTextGardening] = useState("Subscribe");
    const [buttonTextReading, setButtonTextReading] = useState("Subscribe");
    const [buttonTextMusic, setButtonTextMusic] = useState("Subscribe");

    const auth = useContext(AuthContext)
  if (!auth.isLoggedIn) {
    console.log("hello");
  return <Redirect to='/' />
  }
    
    const handleTimeSubmit = async (event)=> {
        
        // console.log(event.target.StartTime.value);
        // console.log(event.target.EndTime.value);
        // console.log(event.target.Interval.value);
        // setStartTime(event.target.StartTime.value);
        // setEndTime(event.target.EndTime.value);
        // setInterval(event.target.Interval.value);
        // console.log(Intrest);

        if(showIntrest)
        {
            setShowIntrest(false);
            setShowform(true);

            const user = {
                username : auth.user.email,
                intrestname : Intrest

            }
            try {
                const response = await fetch('https://reqres.in/api/users',{
                method:'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
              })
              const responseData = await response.json()
              console.log(responseData)
              if (responseData) {
                console.log(responseData)
              }
              else {
                console.log(responseData)
              }
            } catch (e) {
              console.log("Failed to connect to server")
            }
        }
        else{
            event.preventDefault();
            // setStartTime(event.target.StartTime.value);
            // setEndTime(event.target.EndTime.value);
            // setInterval(event.target.Interval.value);
            // console.log(event.target)
            
            const user = {
                username : auth.user.email,
                intrestname : Intrest,
                startTime : StartTime,
                endTime : EndTime,
                interval : Interval

            }
            try {
                const response = await fetch('https://reqres.in/api/users',{
                method:'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
              })
              const responseData = await response.json()
              console.log(responseData)
              if (responseData) {
                console.log(responseData)
                history.push('/')
              }
              else {
                console.log(responseData)
              }
            } catch (e) {
              console.log("Failed to connect to server")
            }

        }
    }
    return (
        <>
            { 
                showform && 
            <div className ="time container">
                <Form >
                    <Form.Group size="lg" controlId="StartTime">
                    <Form.Label>StartTime</Form.Label>
                    <Form.Control
                    autoFocus
                    type="Time"
                    value={StartTime}
                    name = "StartTime"
                    onChange={(e) => setStartTime(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group size="lg" controlId="EndTime">
                    <Form.Label>EndTime</Form.Label>
                    <Form.Control
                    autoFocus
                    type="Time"
                    value={EndTime}
                    name = "EndTime"
                    onChange={(e) => setEndTime(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group size="lg" controlId="Interval">
                    <Form.Label>Interval</Form.Label>
                    <Form.Control
                    autoFocus
                    type="Text"
                    value={Interval}
                    name = "Interval"
                    onChange={(e) => setInterval(e.target.value)}
                    />
                    </Form.Group>
                    <Button block size="lg" type="submit" onClick={handleTimeSubmit}>Submit</Button>
                </Form>
            </div>
            }

            {
              showIntrest &&
            <div className="content" >
        <h1 className="heading">Select your Intrests</h1>
        <p className="description">Hover over a card to flip it.</p><a className="card" href="#!">
          <div className="front" style={{backgroundImage: `url(${Dancing})`}}>
            <p>Dancing</p>
          </div>
          <div className="back">
            <div>
              <p>There are short-cuts to happiness, and dancing is one of them.</p>
              <button className="button" onClick={()=>{setIntrest(prevItems => [...prevItems,"Dancing"]);setButtonTextDancing("Subscribed");}}
              // onClick={() => setButtonTextDancing("Subscribed")}
              >{buttonTextDancing}</button>
            </div>
          </div></a><a className="card" href="#!">
          <div className="front" style={{backgroundImage: `url(${Meditate})`}}>
            <p>Meditation</p>
          </div>
          <div className="back">
            <div>
              <p>Meditation helps you stay in a clear-headed state so that when challenges come at you, you can deal with them like a ninja – in a calm thoughtful way.</p>
              <button className="button" onClick={()=>{setIntrest(prevItems => [...prevItems,"Meditate"]);setButtonTextMeditation("Subscribed");}}
              // onClick={() => setButtonTextMeditation("Subscribed")}
              >{buttonTextMeditation}</button>
            </div>
          </div></a><a className="card" href="#!">
          <div className="front" style={{backgroundImage: `url(${Gardening})`}}>
            <p>Gardening</p>
          </div>
          <div className="back">
            <div>
              <p>The garden suggests there might be a place where we can meet nature halfway.</p>
            <button className="button" onClick={()=>{setIntrest(prevItems => [...prevItems,"Gardening"]) ;setButtonTextGardening("Subscribed");} }
            // onClick={() => setButtonTextGardening("Subscribed")}
            >{buttonTextGardening}</button>
            </div>
          </div></a><a className="card" href="#!">
          <div className="front" style={{backgroundImage: `url(${Reading})`}}>
            <p>Reading</p>
          </div>
          <div className="back">
            <div>
              <p>Sometimes you just need to lay on the couch and read for a couple of years.</p>
              <button className="button" onClick={()=>{setIntrest(prevItems => [...prevItems,"Reading"]);setButtonTextReading("Subscribed"); } }
              // onClick={() => setButtonTextReading("Subscribed")}
              >{buttonTextReading}</button>
            </div>
          </div></a><a className="card" href="#!">
          <div className="front" style={{backgroundImage: `url(${Music})`}}>
            <p>Listening Music</p>
          </div>
          <div className="back">
            <div>
              <p>Music is a language that doesn’t speak in particular words. It speaks in emotions, and if it’s in the bones, it’s in the bones.</p>
              <button className="button" onClick={()=>{setIntrest(prevItems => [...prevItems,"Music"]);setButtonTextMusic("Subscribed");} }
              // onClick={() => setButtonTextMusic("Subscribed")}
              >{buttonTextMusic}</button>
            </div>
          </div></a>
          <Button block size="lg" type="submit" onClick={handleTimeSubmit}>Submit</Button>
      </div>
    }
        </>
    );
};

export default Service;
