import React from 'react'
import duck from '../img/duck.webp'
import {connect} from 'react-redux'
import './Rengwu.css'
import moment from 'moment'
function time(start,end,xingqistart,xingqiend,count){
  if(moment(start).format("YYYY-MM-DD")===moment(end).format("YYYY-MM-DD")){
    if(moment(start).format("YYYY-MM-DD")===moment().format("YYYY-MM-DD")){
      return '今天 '+moment(start).format("hh:mm")+'~'+moment(end).format("HH:mm")
    }else{
      return xingqistart+' '+moment(start).format("hh:mm")+'~'+moment(end).format("HH:mm")
    }
  }else{
    if(count){
      if(Math.abs((moment(start)-moment()))/(1000 * 60 * 60 * 24)+1>7||count>7){
        return moment(start).format("MM/DD")+"~"+moment(end).format("MM/DD")+' '+count+'天'
      }  
      return xingqistart+'~'+xingqiend+' '+count+'天'
    }
    
  }
}
function Rengwu(props) {
    const handleClick=()=>{
       props.open()
    }
    const handlekong=()=>{
      props.kong()
    }
  return (
    <div style={{
        width:'500px',
        borderRight:"1px solid rgb(220,220,220)",
        padding:"14px",
        height:'100%'
    }}>
        <div style={{color:"rgb(29, 129, 240)",cursor:"pointer"}}>+ <b style={{
            fontSize:"14px"
        }} onClick={handleClick}>添加任务</b>
        </div>
        <div style={{marginLeft:"5px",marginTop:"28px"}}>
             <ul>
                {
                props.state.List.map((item,key1)=>
                <li key={key1} style={{marginBottom:'20px'}}>
                {
                  item.children?<div><div style={{display:'inline-block',cursor:"pointer"}} onClick={handlekong}><i style={{color:'#c2c2c2',marginRight:'10px'}}>{!props.state.iskong?'▼':'▶'}</i><span style={{color:'#c2c2c2',marginRight:'8px'}}>{key1+1})</span>
                  {item.main}
                  </div>
                  <div style={{display:'inline-block',verticalAlign:"middle",float:"right"}}>
                    <span style={{float:"right",clear:'both'}}>{time(item.start,item.end,item.daystart,item.dayend,item.day)}<img src={duck} style={{width:'24px',height:'24px',border:"1px solid white",borderRadius:'50%',verticalAlign:"middle",marginLeft:'10px'}}></img></span>
                  </div>
                  <div className={props.state.iskong===true?"kong":""}>
                    <ul>
                      {item.children.map((data,key)=><li key={key} style={{marginLeft:'28px',marginTop:"20px"}}><i style={{color:'#c2c2c2',marginRight:'10px'}}>●</i><span style={{color:'#c2c2c2',marginRight:'8px'}}>{key1+1}.{key+1})</span>{data.main}<img src={duck} style={{width:'24px',height:'24px',border:"1px solid white",borderRadius:'50%',verticalAlign:"middle",marginLeft:'10px',float:"right"}}></img><span style={{float:"right"}}>{time(data.start,data.end,data.daystart,data.dayend,data.day)}</span></li>)}
                    </ul>
                  </div>
                  </div>:<div><div style={{display:'inline-block'}}><i style={{color:'#c2c2c2',marginRight:'10px'}}>●</i><span style={{color:'#c2c2c2',marginRight:'8px'}}>{key1+1})</span>
                  {item.main}
                  </div>
                  <div style={{display:'inline-block',verticalAlign:"middle",float:"right"}}>
                    <span style={{float:"right",clear:'both'}}>{time(item.start,item.end,item.daystart,item.dayend,item.day)}<img src={duck} style={{width:'24px',height:'24px',border:"1px solid white",borderRadius:'50%',verticalAlign:"middle",marginLeft:'10px'}}></img></span>
                  </div></div>
                }
                </li>
                )}
            </ul>
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
    open(){
      return{
        type:"change_open"
      }
    },
    kong(){
      return{
        type:'change_kong'
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Rengwu)