import React, { useState, useEffect } from 'react';
import database from "./firebase";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([]);
    
    // Piece of code which runcs based on a condition
    useEffect(() => {
        // this is where the code runds..

    const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => (
                setPeople(snapshot.docs.map(doc => doc.data()))
            ));

             return () => {
                 unsubscribe();
             }
        
    }, []);


    // bad
    // const people = [];
    // people.push('abc', 'hoge')

    // good
    // setPeople([...people, 'sonny', 'qazi']);
    
    return (
        <div>
            <h1>Tinder Card</h1>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                >
                    <div
                      style={{ backgroundImage: `url(${person.url})`}}
                      className="card"
                    >
                      <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
            
        </div>
    )
}

export default TinderCards
