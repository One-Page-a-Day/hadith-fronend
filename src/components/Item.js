import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/Item.css';



function Item(props){
  // console.log(props.item)
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
  const { user} = useAuth0();

  const addToFav = async (hadith) => {
    console.log(hadith)
    const newHadith = {
      hadithName:hadith.book.bookName,
      hadithNarrator:hadith.englishNarrator,
      hadithEnglish:hadith.hadithEnglish,
      hadithChapter:hadith.chapter.chapterEnglish,
      username:user.email
    }
    await axios.post (`${serverLink}/hadith`,newHadith)
  }
    return(
        <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://tse2.mm.bing.net/th?id=OIP.YXo5f7XYkYBGi5jCEVuRHQHaLJ&pid=Api&P=0" />
      <Card.Body>
      <Card.Title>Book Name: {props.item.book.bookName}</Card.Title>
      <Card.Title>Chapter: {props.item.chapter.chapterEnglish}</Card.Title>
      <Card.Title>Narrator: {props.item.englishNarrator}</Card.Title>
        <Card.Text className = "hadithScroll">{props.item.hadithEnglish}</Card.Text>
        <Button variant="primary" onClick={()=>{addToFav(props.item)}}>Add to favourite</Button>
      </Card.Body>
    </Card>
    );
}

export default Item;