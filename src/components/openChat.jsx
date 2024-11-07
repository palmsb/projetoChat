import Chat from './chat.jsx'
import { useState } from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import './chat.css'


function OpenChat() {
    const [openModal, setOpenModal] = useState(false)
  
    return (

      <section>
        <div>
        <div>
          <Chat isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
          </div>
        </div>
      <div className='btnChatPos'>
        <button className="btn-chat" onClick={() => setOpenModal(true)}><TfiHeadphoneAlt size={40} /></button>
      </div>

      
      </section>
    )
  }
  
  export default OpenChat