// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function UpdateHadithModal(props) {
//   const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

//   const updateItemInfo = async (e) => {
//     e.preventDefault();
//     const itemData = {
//       hadithName: e.target.name.value,
//       hadithNarrator: e.target.lang.value,
//       hadithChapter: e.target.chapter.value
//     };
//     const resultsUpdate = await axios.put(`${serverLink}hadith/${props.itemIndex}`,itemData);
//     props.handleClose();
//     props.updateHadith(resultsUpdate.data)
//   };

//   return (
    
    

//       <Modal show={props.show} onHide={props.handleClose} >
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         {/* <Form>
//           <Form.Group controlId="name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               defaultValue={props.itemInfo.hadithName}
//               type="text"
//               name="name"
//             />
//           </Form.Group>
//           <Form.Group controlId="lang">
//             <Form.Label>hadithEnglish</Form.Label>
//             <Form.Control
//               defaultValue={props.itemInfo.hadithEnglish}
//               type="text"
//               name="lang"
//             />
//           </Form.Group>
//           <Form.Group controlId="chapter">
//             <Form.Label>Hadith Chapter</Form.Label>
//             <Form.Control
//               defaultValue={props.itemInfo.hadithChapter}
//               type="text"
//               name="chapter"
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Update Item
//             </Button>
//   </Form>
//             </Modal.Body> 
//         <Modal.Footer>
//           <Button variant="secondary" onClick={props.handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={props.handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
      
//   );
// }

// export default UpdateHadithModal;
