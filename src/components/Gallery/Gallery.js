import React from "react";
import "../Gallery/Gallery.css";
import events from "../../assets/images/events.png";
import Navbar from "../Navbar/Navbar";

export default function Gallery(props){

    const{currentUser,setCurrentUser}=props;
    return (
        <>
        <div className='container'>
            <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <div className='Big_Div'>
                <h2 className='Glimpses'>Glimpses Of Us</h2>
                <div className='flex_Container'>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                    <div className='smallDiv'>
                        <div className="card">
                            <img className="card-img-top" src={events} alt="Card cap"></img>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </>
  );
}
