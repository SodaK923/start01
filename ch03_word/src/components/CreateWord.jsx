import { useState } from "react";
// useNavigate: 프로그램 자동 이동(e.g. 로그인 후 메인페이지로 자동 이동)
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
    const days=useFetch("http://localhost:3010/days");
    const navigate=useNavigate();

    const [eng, setEng]=useState("");
    const [kor, setKor]=useState("");
    const [day, setDay]=useState("");

    const onSubmit=(e)=>{
        e.preventDefault();

        fetch(`http://localhost:3010/words/`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                eng,
                kor,
                day,
                isDone: false,
            }),
        })
        .then(res=>{
            if(res.ok){
                alert("생성이 완료되었습니다.");
                navigate(`/day/${day}`);
            }
        });
    }
    
    return (
        <form>
            
        </form>
    );
}
