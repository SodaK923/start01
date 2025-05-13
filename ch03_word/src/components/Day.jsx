import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import dummy from '../db/data.json';
import Word from "./Word";

export default function Day() {
    // <Route path="/day/:day" element={<Day />} />
    const { day } = useParams();
    //console.log("받은 day 값:", day); 
    const [words, setWords]=useState([]);

    useEffect(() => {
        fetch(`http://localhost:3010/words?day=${day}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setWords(data);
            });
    }, [day]);

    //const wordList = dummy.words.filter(word => word.day == day);
    const wordList = words.filter(word => word.day == day);

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {
                        // dummy.words.map(word=>(
                        wordList.map(word => (
                            <Word word={word} key={word.id} />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
