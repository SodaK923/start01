import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import SmoothieCard from "../components/SmoothieCard"

const Home=()=>{
    // 에러 발생 시 화면에 표시
    const [fetchError, setFetchError]=useState(null);

    // supabase에서 데이터 읽어와서 저장
    const [smoothies, setSmoothies]=useState(null);

    // 정렬
    const [orderBy, setOrderBy]=useState('created_at');

    // 삭제 핸들러
    const handleDelete=(id)=>{
        setSmoothies(prevSmoothies=>{
            return prevSmoothies.filter(sm=>sm.id!==id)
        })
    }

    useEffect(()=>{
        const fetchSmoothies = async ()=>{ // supabase 작업
            const {data,error}=await supabase
            .from('smoothies')
            .select()
            .order(orderBy, {ascending: false});
            if(error){
                setFetchError('Could not fetch the smoothies');
                setSmoothies(null);
            }
            if(data){
                setSmoothies(data);
                setFetchError(null);
            }
        }
        fetchSmoothies();
    },[orderBy])

    return(
        <div className="page home">
            {fetchError&&(<p>{fetchError}</p>)}
            {smoothies&&(
                <div className="smoothies">
                    <div className="order-by">
                        <p>Order by: </p>
                        <button onClick={()=>setOrderBy('created_at')}>Time Create</button>
                        <button onClick={()=>setOrderBy('title')}>Title Create</button>
                        <button onClick={()=>setOrderBy('rating')}>Rate Create</button>
                    </div>
                    <div className="smoothie-grid">
                        {
                            smoothies.map((smoothie)=>(
                                // return <div key={smoothie.id} className="smoothie-card">
                                //     <h3>{smoothie.title}</h3>
                                //     <p>Rating: {smoothie.rating}</p>
                                //     <p>{smoothie.method}</p>
                                // </div>
                                <SmoothieCard key={smoothie.id} smoothie={smoothie} onDelete={handleDelete} />
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    );
}
export default Home;