import React from "react"
import './chat.css'




export default function Chat({isOpen, setModalOpen}) {
    
 if(isOpen) {   
    return <div className="wrapOut">
      
      <div className="chatModal">
      
         <div className="header">
            <h1>QualyChat</h1>
            <button onClick={setModalOpen}>X</button>
         </div>

         <div className="conversa">
            
         </div>

         <div className="inputText">
            <input type='text' placeholder="Digite aqui sua dúvida :)"></input>
            <button>Enviar</button>
         </div>

       </div>
    </div>
 }

  return null
}