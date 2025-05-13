import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data, setData]=useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setData(data);
        });
    }, [url]); // url이 바뀔 때마다

    return data;
}

// ⚙️ 이 코드가 하는 일 순서대로 설명
// 컴포넌트가 렌더링될 때 useEffect 실행됨 (단, url이 바뀌었을 때만!)

// fetch(url): url에 HTTP 요청을 보냄

// .then(res => res.json()): 응답을 JSON 형태로 파싱

// .then(data => setData(data)): 파싱한 데이터를 setData로 저장 → 이때 컴포넌트가 다시 렌더링됨

// url이 바뀌면 위 과정을 다시 반복

// 뭐래!