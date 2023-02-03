import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/FavItem.css';


function FavItem(props){
    return(
      
        <Card style={{ width: "34rem",margin:"20px" }}>
      <Card.Img style ={{height:"200px"}}variant="top" src="https://tse2.mm.bing.net/th?id=OIP.YXo5f7XYkYBGi5jCEVuRHQHaLJ&pid=Api&P=0" />
      <Card.Body>
        <Card.Title>{props.item.hadithName}</Card.Title>
        <Card.Title>{props.item.hadithChapter}</Card.Title>
        <Card.Title>{props.item.hadithNarator}</Card.Title>
        <Card.Text className = "hadithScroll">{props.item.hadithEnglish}</Card.Text>
        {/* <Button variant="primary" onClick ={()=>props.showUpdateModalProps(props.item)}>Update</Button> */}
        <Button variant="primary" onClick ={()=>props.deleteHadith(props.item._id)}>Delete</Button>
      </Card.Body>
    </Card>
    
    );
}

export default FavItem;