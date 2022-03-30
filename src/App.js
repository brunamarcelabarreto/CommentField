import React from 'react';
import Image from './assets/people.svg';

import{ Button , Container , List, } from './styles'

function App() {
  const [comment, setComment] = React.useState()
  const [allComments, setAllComments] = React.useState([])

  function handleClickButton() {
    const allPreviousComments = [...allComments, comment]

    setAllComments(allPreviousComments)
  }
  function handleTextArea(event) {
    if (event.target.value === '') {
      return false
    } else {
      setComment(event.target.value)
    }
  }

  return (
    <Container>
      <img src={Image} alt="imagem-pessoas" />
      <textarea placeholder="Seu comentário" onChange={handleTextArea} ></textarea>
      <Button isOn={comment} onClick={handleClickButton}>Comentar</Button>

      <List>
        {allComments.map(Cmt => (
          <li key={Cmt}>{Cmt}</li>
        ))}


      </List>
    </Container>
  );
}
export default App;
