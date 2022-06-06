import React, { useRef } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
var name,timestart,timeend,daystart,dayend,ms,me

function Tankuang(props) {
  const title_name=useRef()
  const title_timestart=useRef()
  const title_timeend=useRef()
  const xingqi=['周日','周一','周二','周三','周四','周五','周六']
  const handleClick=()=>{
    props.open()
  }
  const handlejixu=()=>{
    title_name.current.value=''
    title_timestart.current.value=null
    title_timeend.current.value=null
    props.jixu()
    props.add()
  }
  const handletijiao=()=>{
    props.open()
    props.add()
    let a=moment(props.state.mintime)
    let b=moment(ms)
    if(a-b>0){
        props.min()
    }
  }
  return (
    <div style={{backgroundColor:'rgb(61,61,61)',height:'1000px',paddingTop:'50px'}}>
        <div style={{background:'white',width:'600px',height:'600px',margin:'0 auto',borderRadius:'8px',padding:'20px'}}>
            <h3 style={{fontWeight:'400'}}>新建记录<span style={{float:'right',cursor:'pointer'}} onClick={handleClick}>X</span></h3>
            <div>
                <div>名称</div>
                <input onChange={(e)=>{name=e.target.value}} ref={title_name}></input>
            </div>
            <div>
                <div>开始时间</div>
                <input type='datetime-local' onChange={(e)=>{ms=moment(e.target.value);daystart=moment(e.target.value).day();timestart=xingqi[daystart]}} ref={title_timestart}></input>
            </div>
            <div>
                <div>截止时间</div>
                <input type='datetime-local' onChange={(e)=>{me=moment(e.target.value);dayend=moment(e.target.value).day();timeend=xingqi[dayend]}} ref={title_timeend}></input>
            </div>
            <div style={{marginTop:'410px',float:"right"}}>
                 <button style={{marginRight:'15px'}} onClick={handlejixu}>提交并继续创建</button>
                <button onClick={()=>handletijiao()}>提交</button>
            </div>
           
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
    jixu(){
        return{
            type:"change_jixu"
        }
    },
    add(){
        return{
            type:"add_list",
            data:{
                name,
                timestart,
                timeend,
                day:Math.floor((me-ms)/ (1000 * 60 * 60 * 24))+1+'天'
            }
        }
    },
    min(){
      return{
        type:"min",
        data:ms
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Tankuang)
