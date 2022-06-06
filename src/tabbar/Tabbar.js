import React, { useState } from 'react'
import './Tabbar.css'
import { connect } from 'react-redux'
var a,b

function Tabbar(props) {
  const [current,setcurrent]=useState(1)
  const [current1,setcurrent1]=useState(1)
  const handleClick=(value)=>{
    setcurrent(value)
    a=value
    console.log(props.change1()) 
    console.log(props.state)
    props.change1()
  }
  const handleClick_bak=(value)=>{
    setcurrent1(value)
    b=value
    props.change2()
  }
  return (
    <div className='tabbar'>
        <div className='tabbar_three tabbar_same'>
            <div className={current===1?'current':""} onClick={()=>handleClick(1)}>按天</div>
            <div className={current===2?'current':""} style={{
              borderLeft:"1px solid #c2c2c2",
              borderRight:"1px solid #c2c2c2"
              }} onClick={()=>handleClick(2)}>按周</div>
            <div className={current===3?'current':""} onClick={()=>handleClick(3)}>按月</div>
        </div>
        <div className='tabbar_two tabbar_same'>
          <div style={{
            borderRight:"1px solid #c2c2c2"
          }} className={current1===1?'current':""} onClick={()=>handleClick_bak(1)}>仅工作日</div>
          <div className={current1===2?'current':""} onClick={()=>handleClick_bak(2)}>显示周末</div>
        </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    state
  }
}
const mapDispatchToProps={
  change1(){
    return{
      type:"change1",
      data:a
    }
  },
  change2(){
    return{
      type:"change2",
      data:b
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tabbar)
