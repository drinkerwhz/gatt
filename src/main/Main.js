import React from 'react'
import './Main.css'
import Rengwu from '../rengwu/Rengwu'
import Gantetu from '../gantetu/Gantetu'

export default function Main() {
  return (
    <div style={{padding:'10px',height:'100%',boxSizing:'border-box'}}>
        <div className='main_main'>
            <Rengwu></Rengwu>
            <Gantetu></Gantetu>
        </div>

    </div>
  )
}
