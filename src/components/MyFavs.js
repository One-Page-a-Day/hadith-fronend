import { useEffect, useState } from "react";
import axios from "axios";
 import FavItem from "./FavItem";
// import UpdateHadithModal from "./UpdateHadithModal";
//  import Item from "./Item";
import { useAuth0 } from "@auth0/auth0-react";

 


function MyFavs(){
    const [results, setResults] = useState([]);
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
    const [showItems,setShowItems] = useState(false);
    const { user} = useAuth0();

    // const [itemInfo,setItemInfo] = useState({});
    // const [index,setIndex] = useState(0);
    // const [showUpdateModalStatus,setShowUpdateModalStatus] = useState(false);
    

    useEffect(()=>{
        const getFavHadith = async () => {
            let allHadithApi = await axios.get(`${serverLink}/hadith?username=${user.email}`);
            console.log('getFavHadith',allHadithApi.data)
            setResults(allHadithApi.data)
            setShowItems(true);

        };
        getFavHadith();
        
    },[]);

    const deleteHadith = async (index)=> {
        let deletedResults = await axios.delete((`${serverLink}/hadith/${index}?username=${user.email}`));
        setResults(deletedResults.data);
        setShowItems(true);

    };


    // const showUpdateModal = async(chosenItem) =>{
    //     setShowUpdateModalStatus(true);
    //     setItemInfo(chosenItem);
    //     setIndex(chosenItem._id);

    // }

    // const handleCloseUpdate = ()=>{
    //     setShowUpdateModalStatus(false)

    // }

    return(
        
         <>   
        
        <h1>Your Favoirite Hadiths</h1>
        <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {showItems && results.map((item,index)=> (
        <FavItem 
        key ={index} 
        item ={item} 
        deleteHadith={deleteHadith} 
        // showUpdateModalProps = {showUpdateModal}
        />
        ))}
        </div>
        
        
        

        {/* <UpdateHadithModal 
        show ={showUpdateModalStatus}
        // handleClose ={handleCloseUpdate}/>
        itemInfo = {itemInfo}
        itemIndex ={index}
        />*/}
        </>
    
        

        
        
    );

    }




export default MyFavs;