import styled from 'styled-components'

export const Container = styled.div`
  background: #3936c0;
  width: 414px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  ::-webkit-scrollbar {
  display: none;
  
}
  img {
    margin-top: 50px;
  }  
  textarea {
    width: 342px;
    height: 138px;
    margin-top: 50px;
    margin-bottom: 25px;
    padding: 5px;
    flex: none;
  }  
`

export const Button = styled.button`
  background: ${props => props.isOn ? '#000000' : 'gray'};
  border-radius: 10px;
  width: 342px;
  height: 64px;
  color: white;
  border: none;
  font-size: 17px;
  cursor: pointer;
  flex: none;
`

export const List = styled.ul `
  li {
    background: rgba(255, 255, 255, 0.14);
    width:342px;
    height: 68px;
    margin-top: 20px;
    list-style-type: none;
    color: white;
    padding: 5px;
    overflow-wrap: break-word;
    margin-bottom: 10px;
  }

`
