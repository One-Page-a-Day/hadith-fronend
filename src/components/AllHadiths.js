import { useEffect, useState } from "react";
import axios from "axios";
 import Item from "./Item";
 
function AllHadith(){

    const [results, setresults] = useState([]);
    const [showItems,setshowitems] = useState(false);
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER)
    useEffect(()=>{
        const getAllHadith = async () => {
            let allHadithApi = await axios.get(`${serverLink}/hadithapi`);
            // console.log('inside useEffect AllHadiths', allHadithApi.data);
            setresults(allHadithApi.data)
            setshowitems(true);

        };
        getAllHadith();
        
    },[]);

    return(
    <div>
        <div
      style={{
        display:"flex",
        flexFlow:"row",
        flexWrap: "wrap",
        padding: "4rem"
      }}>
        {showItems && results.map((item,index)=>
        <Item key ={index} item ={item}/>)}
        </div>
    </div>
        
    );
}

export default AllHadith;