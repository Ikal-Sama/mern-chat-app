import React, {useState} from 'react'
import styled from 'styled-components'
import Picker from 'emoji-picker-react'
import {IoMdSend} from 'react-icons/io'
import {BsEmojiSmileFill} from 'react-icons/bs'

export default function ChatInput({handleSendMsg}) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");

    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    }

    const handleEmojiClick = (emojiObject, event) => {
        setMsg(prevMsg => prevMsg + emojiObject.emoji);

    }

    const changeChat = (event) => {
        event.preventDefault();
        if(msg.length>0){
            handleSendMsg(msg);
            setMsg('')
        }
    }

  return (
    <Container>
        <div className="button-container">
            <div className="emoji">
                <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
                {
                    showEmojiPicker && 
                    <EmojiPickerContainer>
                        <Picker onEmojiClick={handleEmojiClick} theme='dark' height='350px'
                        />
                    </EmojiPickerContainer>
                }
            </div>
        </div>
        <form className='input-container' onSubmit={(e)=>changeChat(e)}>
            <input type="text" name="" placeholder='type your message here' value={msg} onChange={(e) => setMsg(e.target.value)}/>
            <button className='submit'>
                <IoMdSend />
            </button>
        </form>
    </Container>
  )
}
const Container = styled.div`
    display: grid;
    grid-template-columns: 5% 95%;
    align-items: center;
    background-color: #080420;
    padding: 0 2rem;
    padding-bottom: 0.3rem;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0 1rem;
        gap: 1rem;
    }
    .button-container{
        display: flex;
        align-items:center;
        color: white;
        gap: 1rem;
        .emoji{
            position: relative;
            svg{
                font-size: 1.5rem;
                color: #ffff00c8;
                cursor: pointer;
            }
        }
        
    }
    .input-container{
        width: 100%;
        border-radius: 2rem;
        display: flex;
        align-content: center;
        gap: 2rem;
        background-color: #ffffff34;
        input{
            width: 90%;
            background-color: transparent;
            color: white;
            border: none;
            padding-left: 1rem;
            font-size: 1.2rem;
            &::selection{
                background-color: #9186f3;
            }
            &:focus{
                outline: none;
            }
        }
        button{
            padding: 0.3rem 2rem;
            border-radius: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #9a86f3;
            border: none;
            @media screen and (min-width: 720px) and (max-width: 1080px) {
                padding: 0.3rem 1rem;
                svg{
                    font-size: 1rem;
                }
            }
            svg{
                font-size: 2rem;
                color: white;

            }

        }
    }
`;

const EmojiPickerContainer = styled.div`
  position: absolute;
  top: -374px;
  z-index: 1;
  background-color: #080420;
  box-shadow: 0 5px 10px #9a86f3;
  border-color: #9186f3;
`;