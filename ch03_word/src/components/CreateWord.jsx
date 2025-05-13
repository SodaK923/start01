import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
    // 현재 날짜들을 읽어옴
    const days = useFetch("http://localhost:3010/days");
    // 다른 페이지로 리다이렉트
    const navigate = useNavigate();

    // submit하면
    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3010/words/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // 입력할 데이터 생성(id는 자동생성)
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false,
            }),
        }).then(res => {
            // 성공하면 해당 날짜로 리다이렉트
            if (res.ok) {
                alert("생성이 완료 되었습니다");
                navigate(`/day/${dayRef.current.value}`);
            }
        });
    }
    // useRef를 이용해 변수 선언
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    );
}
