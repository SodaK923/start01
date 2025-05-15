// 더미 데이터를 불러와 단어장을 만듦: 날짜
import dummy from '../db/data.json';

const DayList=()=>{
    return(
        <div>
            <ul className='list_day'>
                {dummy.days.map((day)=>{
                    return <li key={day.id}>Day {day.day}</li>
                })}
            </ul>
        </div>
    );
}
export default DayList;