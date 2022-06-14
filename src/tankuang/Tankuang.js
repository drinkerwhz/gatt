import React, { useRef } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
var name,timestart,timeend,daystart,dayend,start,end

function Tankuang(props) {
  const title_name=useRef()
  const title_timestart=useRef()
  const title_timeend=useRef()
  const xingqi=['周日','周一','周二','周三','周四','周五','周六']
  const handleClick=()=>{
    props.open()
  }
  const handlejixu=()=>{
    if(title_name.current.value==='')
    {
      alert("内容不能为空");
    }
    else{
      title_name.current.value=''
      title_timestart.current.value=null
      title_timeend.current.value=null
      props.jixu()
      props.add()
    }
  }
  const handletijiao=()=>{
    if(title_name.current.value==='')
    {
      alert("内容不能为空");
    }
    else{
      props.open()
      props.add()
      let a=moment(props.state.mintime)
      let b=moment(start)
      if(a-b>0){
          props.min()
      }
    }
  }
  return (
    <div style={{backgroundColor:'rgb(61,61,61)',height:'100%'}}>
        <div style={{background:'white',width:'600px',height:'600px',margin:'0 auto',borderRadius:'8px',padding:'20px',transform: 'translateY(20%)'}}>
            <h3 style={{fontWeight:'400'}}>新建记录<span style={{float:'right',cursor:'pointer'}} onClick={handleClick}>X</span></h3>
            <div>
                <div style={{color:'rgb(61,61,61)',marginTop:"24px",fontSize:'13px'}}>名称</div>
                <input style={{marginTop:'10px',height:'25px',width:'550px'}}  onChange={(e)=>{name=e.target.value}} ref={title_name}></input>
            </div>
            <div>
                <div style={{color:'rgb(61,61,61)',marginTop:"24px",fontSize:'13px'}}>开始时间</div>
                <input style={{marginTop:'10px',height:'30px',width:'550px'}}  type='datetime-local' onChange={(e)=>{start=moment(e.target.value);daystart=moment(e.target.value).day();timestart=xingqi[daystart]}} ref={title_timestart}></input>
            </div>
            <div>
                <div style={{color:'rgb(61,61,61)',marginTop:"24px",fontSize:'13px'}}>截止时间</div>
                <input style={{marginTop:'10px',height:'30px',width:'550px'}}  type='datetime-local' onChange={(e)=>{end=moment(e.target.value);dayend=moment(e.target.value).day();timeend=xingqi[dayend]}} ref={title_timeend}></input>
            </div>
            <div style={{marginTop:'260px',float:"right"}}>
                 <button style={{marginRight:'15px',width:"135px",height:"36px",color:"#c2c2c2",background:"white",border:"1px solid #c2c2c2",borderRadius:"3px",cursor:"pointer"}} onClick={handlejixu}>提交并继续创建</button>
                <button style={{height:"36px",background:"rgb(0, 150, 240)",border:'0px',width:"80px",color:"white",borderRadius:"3px",cursor:"pointer"}} onClick={()=>handletijiao()}>提交</button>
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
                day:Math.floor((end-start)/ (1000 * 60 * 60 * 24))+1,
                start,
                end
            }
        }
    },
    min(){
      return{
        type:"min",
        data:start
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Tankuang)
