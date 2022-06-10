import React from 'react'
import './Gantetu.css'
import moment from 'moment';
import { connect } from 'react-redux';

function Gantetu(props) {
  var count=[]
  var ri=[],zhou=[],s1=[],yue=[],year=[],weekdayri=[],weekdayricount=[0,0,0,0,0]
  var i=0,s=0,ri1
  var xingqi=["日","一","二","三","四","五","六"]
  const now=moment(moment(props.state.mintime)).startOf("month").format("YYYY-MM-DD")
  for (let index = 0; index <5; index++) {
    count[i]=moment(now).subtract(-1*index, "month").format('YYYY.MM')
    s=s+moment(count[i]).daysInMonth()
    for(let x=0;x<moment(count[i]).daysInMonth();x++){
      ri1=moment(count[i]).subtract(-1*x, "days").format('YYYY.MM.DD')
      if(moment(ri1).day()!==0&&moment(ri1).day()!==6){
        weekdayricount[i]++
      }
    }
    i=i+1
  }
  for(let x=0;x<s;x++){
    ri[x]=moment(now).subtract(-1*x, "days").format('YYYY.MM.DD')
    if(moment(ri[x]).day()!==0&&moment(ri[x]).day()!==6){
      weekdayri.push(ri[x])
    }
  }
  for(let index=0;index<4;index++){
    year[index]=moment(now).subtract(-1*index, "year").format('YYYY.MM')
    for(let i=0;i<12;i++){
      yue[i]=moment(now).subtract(-1*i, "month").format('MM')
    }
  }
  for(let x=0;Math.floor(x<s/8);x++){
    zhou[x]=moment(now).subtract(-1*x, "week").format('YYYY.MM.DD')
 
  }
  for(let y=0;y<7;y++)
  {
    s1[y]=y
  }
  return (
    <div>
    {props.state.current===1&&props.state.current1===2&&<div className='title'>
      <div className='title_time'>
        <div className='title_tian'>
        {
          count.map((item,key)=><div key={key} style={{width:`${moment(item).daysInMonth()*72}px`}}>{item}</div>)
        }
        </div>
        <div style={{width:`${ri.length*72}px`}}>{ri.map(data=><span style={{width:'72px',display:'inline-block'}}>{moment(data).format('DD')}{xingqi[moment(data).day()]}</span>)}</div>
      </div>
      <div style={{width:`${ri.length*72}px`,height:'800px',overflowX:'hidden',overflowY:"auto"}}>  
      {ri.map((item,key)=><div style={{width:'72px',  display: 'inline-block',border:'1px solid #c2c2c2',height:'880px',boxSizing:'border-box'}} key={key}></div>)}
      </div>
    </div>
    }
     {props.state.current===1&&props.state.current1===1&&<div className='title'>
      <div className='title_time'>
        <div className='title_tian'>
        {
          count.map((item,key)=><div key={key} style={{width:`${(weekdayricount[key])*72}px`}}>{item}</div>)
        }
        </div >
        <div style={{width:`${ri.length*72}px`}}>{weekdayri.map(data=><span style={{width:'72px',display:'inline-block'}}>{moment(data).format('DD')}{xingqi[moment(data).day()]}</span>)}</div>
      </div>
      <div style={{width:`${ri.length*72}px`,height:'800px',overflowX:'hidden',overflowY:"auto"}}>  
      {weekdayri.map((item,key)=><div style={{width:'72px',  display: 'inline-block',border:'1px solid #c2c2c2',height:'810px',boxSizing:'border-box'}} key={key}></div>)}
      </div>
    </div>
    }
    {
      props.state.current===2&&props.state.current1===2&&<div className='title'>
      <div className='title_time1' style={{width:`${zhou.length*336}px`}}>
        {
          <div>{count.map(item=><span style={{width:`${moment(item).daysInMonth()*48}px`,display:'inline-block'}}>{item}</span>)}</div>
        }
        {
          <div>{zhou.map(data=><span style={{width:`336px`,display:'inline-block'}}>{moment(data).format("DD")}～{moment(data).subtract(-6, "days").format("DD")}日{}</span>)}</div>
        }
      </div>
      <div style={{width:`${zhou.length*336}px`,height:'800px',overflowX:'hidden',overflowY:"auto"}}>  
      {zhou.map(data=><div style={{width:'336px',  display: 'inline-block',border:'1px solid #c2c2c2',height:'810px',boxSizing:"border-box",borderLeft:'0px'}} ></div>)}
      </div>
    </div>
    }
    {
      props.state.current===2&&props.state.current1===1&&<div className='title'>
      <div className='title_time1' style={{width:`${zhou.length*336}px`}}>
        {
          <div>{count.map(item=><span style={{width:`${moment(item).daysInMonth()*48}px`,display:'inline-block'}}>{item}</span>)}</div>
        }
        {
          <div>{zhou.map(data=><span style={{width:`336px`,display:'inline-block'}}>{moment(data).format("DD")}～{moment(data).subtract(-4, "days").format("DD")}日{}</span>)}</div>
        }
      </div>
      <div style={{width:`${zhou.length*336}px`,height:'800px',overflowX:'hidden',overflowY:"auto"}}>  
      {zhou.map(data=><div style={{width:'336px',  display: 'inline-block',border:'1px solid #c2c2c2',height:'810px',boxSizing:"border-box",borderLeft:'0px'}} ></div>)}
      </div>
    </div>
    }
     {props.state.current===3&&props.state.current1===2&&<div className='title'>
      <div className='title_time2' style={{width:`${year.length*365*24}px`}}>
      {
          <div>{year.map(item=><span style={{width:`${365*24}px`,display:'inline-block'}}>{moment(item).format("YYYY")}</span>)}</div>
        }
        {
          <div>{count.map(data=>yue.map(item=><span style={{width:`${24*moment(item).daysInMonth()}px`,display:'inline-block'}}>{item}月</span>))}</div>
        }
      </div>
      <div style={{width:`${year.length*365*24}px`,height:'800px',overflowX:'hidden',overflowY:"auto"}}>  
      {count.map(item=>yue.map(data=><div style={{width:`${24*moment(data).daysInMonth()}px`,  display: 'inline-block',border:'1px solid #c2c2c2',height:'810px',boxSizing:'border-box',borderLeft:'0px'}}></div>))}
      </div>
    </div>
    }
    {props.state.current===3&&props.state.current1===1&&<div className='title'>
      <div className='title_time2' style={{width:`${year.length*365*24}px`}}>
      {
          <div>{year.map(item=><span style={{width:`${(365-96)*24}px`,display:'inline-block'}}>{moment(item).format("YYYY")}</span>)}</div>
        }
        {
          <div>{count.map(data=>yue.map(item=><span style={{width:`${24*(moment(item).daysInMonth()-8)}px`,display:'inline-block'}}>{item}月</span>))}</div>
        }
      </div>
      <div style={{width:`${year.length*365*24}px`,height:'800px',overflowX:'hidden',overflowY:"auto"}}>  
      {count.map(item=>yue.map(data=><div style={{width:`${24*(moment(data).daysInMonth()-8)}px`,  display: 'inline-block',border:'1px solid #c2c2c2',height:'810px',boxSizing:'border-box',borderLeft:'0px'}}></div>))}
      </div>
    </div>
    }
  </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    state
  }
}
export default connect(mapStateToProps)(Gantetu)