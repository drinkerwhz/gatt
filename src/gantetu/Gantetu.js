import React, { useState,useEffect } from 'react'
import './Gantetu.css'
import moment from 'moment';
import { connect } from 'react-redux';

function Gantetu(props) {
  var time,di,qwe1,qwe2,qwe3,qwe4,qwe5,qwe
  const now=moment(moment(props.state.mintime)).startOf("month").format("YYYY-MM-DD")
    useEffect(()=>{
      time=document.querySelector('.title_tian')
      di=document.querySelector('.di')
      qwe=document.querySelector('.qwe')
      qwe1=document.querySelector('.qwe1')
      qwe2=document.querySelector('.qwe2')
      qwe3=document.querySelector('.qwe3')
      qwe4=document.querySelector('.qwe4')
      qwe5=document.querySelector('.qwe5')
      if(qwe!==null){
        qwe.scrollLeft=moment().diff(moment(now),'day')*72
        qwe.addEventListener('scroll',()=>{
          time.style.transform='translateX(-'+qwe.scrollLeft+'px)'
          di.style.transform='translateX(-'+qwe.scrollLeft+'px)'
        })
        
      }
      if(qwe1!==null){
        qwe1.scrollLeft=(moment().diff(moment(now),'day')-weekend(moment(now),moment()))*72
        qwe1.addEventListener('scroll',()=>{
          time.style.transform='translateX(-'+qwe1.scrollLeft+'px)'
          di.style.transform='translateX(-'+qwe1.scrollLeft+'px)'
        })
      }
      if(qwe2!==null){
        qwe2.scrollLeft=moment().diff(moment(now),'day')*48-96
        qwe2.addEventListener('scroll',()=>{
           time.style.transform='translateX(-'+qwe2.scrollLeft+'px)'
          di.style.transform='translateX(-'+qwe2.scrollLeft+'px)'
        }
        )
      }
      if(qwe3!==null){
        qwe3.scrollLeft=(moment().diff(moment(now),'day')-weekend(moment(now),moment()))*48
        qwe3.addEventListener('scroll',()=>{
        time.style.transform='translateX(-'+qwe3.scrollLeft+'px)'
        di.style.transform='translateX(-'+qwe3.scrollLeft+'px)'
        })
      }
      if(qwe4!==null){
        qwe4.scrollLeft=moment().diff(moment(now),'day')*24
        qwe4.addEventListener('scroll',()=>{
        time.style.transform='translateX(-'+qwe4.scrollLeft+'px)'
        di.style.transform='translateX(-'+qwe4.scrollLeft+'px)'
        })
      }
      if(qwe5!==null){
        qwe5.scrollLeft=(moment().diff(moment(now),'day')-weekend(moment(now),moment()))*24
        qwe5.addEventListener('scroll',()=>{
        time.style.transform='translateX(-'+qwe5.scrollLeft+'px)'
        di.style.transform='translateX(-'+qwe5.scrollLeft+'px)'
        })
      }
    },[props.state.current1,props.state.current,qwe,time,di,qwe1,qwe2,qwe3,qwe4,qwe5])
  function weekend(a,b){
    let x=parseInt((b-a)/1000/60/60/24+1)-parseInt((b-a)/1000/60/60/24/7)*7
    let z=parseInt((b-a)/1000/60/60/24/7)
    var s=0
    for(let i=0;i<x;i++)
    {
      let y=moment(a).subtract(-1*i,'days').format("YYYY-MM-DD")
      if(moment(y).day()===0||moment(y).day()===6){
        s++
      }
    }
    return s+z*2
  }
  var count=[]
  var ri=[],zhou=[],s1=[],yue=[],year=[],weekdayri=[],weekdayricount=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],zhouweekday=[]
  var i=0,s=0,ri1
  var xingqi=["日","一","二","三","四","五","六"] 
  for (let index = 0; index <10; index++) {
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
  for(let index=0;index<10;index++){
    year[index]=moment(now).subtract(-1*index, "year").format('YYYY.MM')
    for(let i=0;i<12;i++){
      yue[i]=moment(now).subtract(-1*i, "month").format('YYYY.MM.DD')
    }
  }
  for(let x=0;Math.floor(x<s/8);x++){
    if(moment(now).day()===0)
    {
      var weekdaynow=moment(now).subtract(-1, "days").format('YYYY.MM.DD')
    }
    if(moment(now).day()===6)
    {
       weekdaynow=moment(now).subtract(-2, "days").format('YYYY.MM.DD')
    }
    zhou[x]=moment(now).subtract(-1*x, "week").format('YYYY.MM.DD')
    zhouweekday[x]=moment(weekdaynow).subtract(-1*x, "week").format('YYYY.MM.DD')
  }
  for(let y=0;y<7;y++)
  {
    s1[y]=y
  }

  return (
    <>
    {props.state.current===1&&props.state.current1===2&&<div className='title'>
      <div className='title_time' >
        <div className='title_tian'>
        {
          count.map((item,key)=><div key={key} style={{width:`${moment(item).daysInMonth()*72}px`}}>{item}</div>)
        }
        </div>
        <div className='di' style={{width:`${ri.length*72}px`}}>{ri.map(data=><span style={{width:'72px',display:'inline-block'}}>{moment(data).format('DD')}{xingqi[moment(data).day()]}</span>)}</div>
      </div>
      <div style={{flex:'1',overflow:"scroll",position:'relative'}}  className='qwe'>
        <div style={{width:`${ri.length*72}px`,position:'absolute',height:`${props.state.List.length*500}px`}}>  
        {ri.map((item,key)=><div className={moment().diff(moment(props.state.mintime).startOf("month"),'days')===key?'today':''} style={{width:'72px',  display: 'inline-block',border:'1px solid #c2c2c2',height:'100%'}} key={key}></div>)}
        {props.state.iskong?props.state.List.map((item,key)=><div style={{position:'absolute',top:`${40*key+16}px`,width:`${(moment(item.end)-moment(item.start))/1000/60/60*3}px`,height:'18px',borderRadius:"10px",background:"blue",left:`${((moment(item.start)-moment(props.state.mintime).startOf("month"))/(1000 * 60 * 60 ))*3}px`}}></div>):props.state.List.map((item,key)=>item.children?<div style={{position:'absolute',top:`${40*key+16}px`,width:`${(moment(item.end)-moment(item.start))/1000/60/60*3}px`,height:'18px',borderRadius:"10px",background:"blue",left:`${((moment(item.start)-moment(props.state.mintime).startOf("month"))/(1000 * 60 * 60 ))*3}px`}}>{item.children.map((data,key)=><div style={{position:'absolute',top:`${38*key+38}px`,width:`${(moment(data.end)-moment(data.start))/1000/60/60*3}px`,height:'18px',borderRadius:"10px",background:"blue",left:`${(moment(data.start)-moment(item.start))/1000/60/60*3}px`}}></div>)}</div>:<div style={{position:'absolute',top:`${key>3?40*key+96:40*key+16}px`,width:`${(moment(item.end)-moment(item.start))/1000/60/60*3}px`,height:'18px',borderRadius:"10px",background:"blue",left:`${((moment(item.start)-moment(props.state.mintime).startOf("month"))/(1000 * 60 * 60 ))*3}px`}}></div>)}
      </div>
      </div>
    </div>
    }
     {props.state.current===1&&props.state.current1===1&&<div className='title'>
      <div className='title_time'>
        <div className='title_tian' >
        {
          count.map((item,key)=><div key={key} style={{width:`${(weekdayricount[key])*72}px`}}>{item}</div>)
        }
        </div >
        <div className='di' style={{width:`${weekdayri.length*72}px`}}>{weekdayri.map(data=><span style={{width:'72px',display:'inline-block'}}>{moment(data).format('DD')}{xingqi[moment(data).day()]}</span>)}</div>
      </div>
     <div style={{flex:'1',overflow:"scroll",position:'relative'}} className='qwe1'>
      <div style={{width:`${weekdayri.length*72}px`,height:`${props.state.List.length*500}px`,position:'absolute',}}>  
        {weekdayri.map((item,key)=><div className={moment().diff(moment(props.state.mintime).startOf("month"),'days')===key+weekend(moment(props.state.mintime).startOf("month"),moment())?'today':''} style={{width:'72px',  display: 'inline-block',border:'1px solid #c2c2c2',height:'100%'}} key={key}></div>)}
        
        {props.state.iskong?props.state.List.map((item,key)=><div style={{position:'absolute',top:`${40*key+15}px`,width:`${((moment(item.end)-moment(item.start))/1000/60/60-weekend(moment(item.start),moment(item.end))*24)*3}px`,height:'18px',borderRadius:"10px",background:"blue",left:`${(((moment(item.start)-moment(props.state.mintime).startOf("month"))/(1000 * 60 * 60 *24))-weekend(moment(props.state.mintime).startOf("month"),(moment(item.start))))*72}px`}}></div>):props.state.List.map((item,key)=>item.children?<div style={{position:'absolute',top:`${40*key+16}px`,width:`${((moment(item.end)-moment(item.start))/1000/60/60-weekend(moment(item.start),moment(item.end))*24)*3}px`,height:'18px',borderRadius:"10px",background:"blue",left:`${(((moment(item.start)-moment(props.state.mintime).startOf("month"))/(1000 * 60 * 60 *24))-weekend(moment(props.state.mintime).startOf("month"),(moment(item.start))))*72}px`}}>{item.children.map((data,key)=><div style={{position:'absolute',top:`${38*key+38}px`,width:`${((moment(data.end)-moment(data.start))/1000/60/60-(weekend(moment(data.start),moment(data.end))*24))*3}px`,height:'18px',borderRadius:"10px",background:"blue",left:`${(moment(data.start)-moment(item.start))/1000/60/60*3}px`}}></div>)}</div>:<div style={{position:'absolute',top:`${key>3?40*key+95:40*key+15}px`,width:`${((moment(item.end)-moment(item.start))/1000/60/60-weekend(moment(item.start),moment(item.end))*24)*3}px`,height:'18px',borderRadius:"10px",background:"blue",left:`${(((moment(item.start)-moment(props.state.mintime).startOf("month"))/(1000 * 60 * 60 *24))-weekend(moment(props.state.mintime).startOf("month"),(moment(item.start))))*72}px`}}></div>)}
        </div>
     </div>
    </div>
    }
    {
      props.state.current===2&&props.state.current1===2&&<div className='title'>
      <div className='title_time1' style={{width:`${zhou.length*336}px`,whiteSpace:'nowrap'}}>
        {
          <div className='title_tian'>{count.map(item=><span style={{width:`${moment(item).daysInMonth()*48}px`,display:'inline-block'}}>{item}</span>)}</div>
        }
        {
          <div className='di'>{zhouweekday.map(data=><span style={{width:`336px`,display:'inline-block'}}>{moment(data).format("DD")}～{moment(data).subtract(-6, "days").format("DD")}日{}</span>)}</div>
        }
      </div>
      <div style={{flex:'1',overflow:"scroll",position:'relative'}}   className='qwe2'>
        <div style={{width:`${zhou.length*336}px`,height:`${props.state.List.length*500}px`,position:'absolute'}}>  
        {zhouweekday.map(data=><div style={{width:'336px',  display: 'inline-block',border:'1px solid #c2c2c2',height:'100%',borderLeft:'0px'}} 
        ></div>)}
        {
          props.state.iskong?props.state.List.map((item,key)=><div style={{position:'absolute',borderRadius:"10px",width:`${(moment(item.end)-moment(item.start))/1000/60/60*2}px`,height:'18px',background:'blue',left:`${(moment(item.start)-moment(props.state.mintime).startOf("month"))/1000/60/60*2}px`,top:`${15+40*key}px`}}></div>):props.state.List.map((item,key)=>item.children?<div style={{position:'absolute',borderRadius:"10px",width:`${(moment(item.end)-moment(item.start))/1000/60/60*2}px`,height:'18px',background:'blue',left:`${(moment(item.start)-moment(props.state.mintime).startOf("month"))/1000/60/60*2}px`,top:`${15+40*key}px`}}>{item.children.map((data,key)=><div style={{position:'absolute',borderRadius:"10px",width:`${(moment(data.end)-moment(data.start))/1000/60/60*2}px`,height:'18px',background:'blue',left:`${(moment(data.start)-moment(item.start))/1000/60/60*2}px`,top:`${38+40*key}px`}}></div>)}</div>:<div style={{position:'absolute',borderRadius:"10px",width:`${(moment(item.end)-moment(item.start))/1000/60/60*2}px`,height:'18px',background:'blue',left:`${(moment(item.start)-moment(props.state.mintime).startOf("month"))/1000/60/60*2}px`,top:`${key>3?95+40*key:15+40*key}px`}}></div>)
        }
        {
          <div style={{position:'absolute',width:'48px',height:'100%',backgroundColor:'#2196f3',opacity:'10%',left:`${moment().diff(moment(weekdaynow),'days')*48}px`,top:'0'}}></div>
        }
        </div>
      </div>
    </div>
    }
    {
      props.state.current===2&&props.state.current1===1&&<div className='title'>
      <div className='title_time1' style={{width:`${zhou.length*240}px,`,whiteSpace:'nowrap'}}>
        {
          <div className='title_tian'>{count.map(item=><span style={{width:`${moment(item).daysInMonth()*35}px`,display:'inline-block'}}>{item}</span>)}</div>
        }
        {
          <div className='di'>{zhouweekday.map(data=><span style={{width:`240px`,display:'inline-block'}}>{moment(data).format("DD")}～{moment(data).subtract(-4, "days").format("DD")}日{}</span>)}</div>
        }
      </div>
      <div style={{flex:'1',overflow:"scroll",position:'relative'}}  className='qwe3'>
        <div style={{width:`${zhou.length*240}px`,height:`${props.state.List.length*500}px`,position:'absolute'}}>  
        {zhouweekday.map(data=><div style={{width:'240px',  display: 'inline-block',border:'1px solid #c2c2c2',height:'100%',borderLeft:'0px'}} ></div>)}
        {
           props.state.iskong?props.state.List.map((item,key)=><div style={{position:'absolute',borderRadius:"10px",width:`${((moment(item.end)-moment(item.start))/1000/60/60-weekend(moment(item.start),moment(item.end))*24)*2}px`,height:'18px',background:'blue',left:`${((moment(item.start)-moment(props.state.mintime).startOf("month"))/1000/60/60-weekend(moment(props.state.mintime).startOf("month"),moment(item.start))*24)*2}px`,top:`${15+40*key}px`}}></div>):props.state.List.map((item,key)=>item.children?<div style={{position:'absolute',borderRadius:"10px",width:`${((moment(item.end)-moment(item.start))/1000/60/60-weekend(moment(item.start),moment(item.end))*24)*2}px`,height:'18px',background:'blue',left:`${((moment(item.start)-moment(props.state.mintime).startOf("month"))/1000/60/60-weekend(moment(props.state.mintime).startOf("month"),moment(item.start))*24)*2}px`,top:`${15+40*key}px`}}>{item.children.map((data,key)=><div style={{position:'absolute',borderRadius:"10px",width:`${((moment(data.end)-moment(data.start))/1000/60/60-weekend(moment(data.start),moment(data.end))*24)*2}px`,height:'18px',background:'blue',left:`${((moment(data.start)-moment(item.start))/1000/60/60-weekend(moment(item.start),moment(data.start))*24)*2}px`,top:`${38+40*key}px`}}></div>)}</div>:<div style={{position:'absolute',borderRadius:"10px",width:`${((moment(item.end)-moment(item.start))/1000/60/60-weekend(moment(item.start),moment(item.end))*24)*2}px`,height:'18px',background:'blue',left:`${((moment(item.start)-moment(props.state.mintime).startOf("month"))/1000/60/60-weekend(moment(props.state.mintime).startOf("month"),moment(item.start))*24)*2}px`,top:`${key>3?95+40*key:15+40*key}px`}}></div>)
        }
        {
          <div style={{position:'absolute',width:'48px',height:'100%',backgroundColor:'#2196f3',opacity:'10%',left:`${((moment().diff(moment(now),'days'))-weekend(moment(now),moment()))*48}px`,top:'0'}}>{moment().diff(moment(now),'days')}</div>
        }
        </div>
      </div>
    </div>
    }
     {props.state.current===3&&props.state.current1===2&&<div className='title'>
      <div className='title_time2' style={{width:`${year.length*365*24}px`,whiteSpace:'nowrap'}}>
      {
          <div className='title_tian'>{year.map(item=><span style={{width:`${365*24}px`,display:'inline-block'}}>{moment(item).format("YYYY")}</span>)}</div>
        }
        {
          <div className='di'>{count.map(data=>yue.map(item=><span style={{width:`${24*moment(item).daysInMonth()}px`,display:'inline-block'}}>{moment(item).format("MM")}月</span>))}</div>
        }
      </div>
     <div style={{flex:'1',overflow:"scroll",position:'relative'}} className='qwe4'>
      <div style={{width:`${(year.length+1)*365*24}px`,height:`${props.state.List.length*500}px`,position:'absolute'}}>  
        {count.map(item=>yue.map(data=><div style={{width:`${24*moment(data).daysInMonth()}px`,  display: 'inline-block',border:'1px solid #c2c2c2',height:'100%',borderLeft:'0px'}}></div>))}
        {
          props.state.iskong?props.state.List.map((item,key)=><div style={{position:'absolute',borderRadius:"10px",width:`${(moment(item.end)-moment(item.start))/1000/60/60}px`,height:'18px',background:'blue',left:`${(moment(item.start)-moment(props.state.mintime).startOf("month"))/1000/60/60}px`,top:`${15+40*key}px`}}></div>):props.state.List.map((item,key)=>item.children?<div style={{position:'absolute',borderRadius:"10px",width:`${(moment(item.end)-moment(item.start))/1000/60/60}px`,height:'18px',background:'blue',left:`${(moment(item.start)-moment(props.state.mintime).startOf("month"))/1000/60/60}px`,top:`${15+40*key}px`}}>{item.children.map((data,key)=><div style={{position:'absolute',borderRadius:"10px",width:`${(moment(data.end)-moment(data.start))/1000/60/60}px`,height:'18px',background:'blue',left:`${(moment(data.start)-moment(item.start))/1000/60/60}px`,top:`${38+40*key}px`}}></div>)}</div>:<div style={{position:'absolute',borderRadius:"10px",width:`${(moment(item.end)-moment(item.start))/1000/60/60}px`,height:'18px',background:'blue',left:`${(moment(item.start)-moment(props.state.mintime).startOf("month"))/1000/60/60}px`,top:`${key>3?95+40*key:15+40*key}px`}}></div>)
        }
        {
          <div style={{position:'absolute',width:'24px',height:'100%',backgroundColor:'#2196f3',opacity:'10%',left:`${(Math.floor((moment()-moment(now))/1000/60/60))}px`,top:'0'}}></div>
        }
        </div>
     </div>
    </div>
    }
    {props.state.current===3&&props.state.current1===1&&<div className='title'>
      <div className='title_time2' style={{whiteSpace:'nowrap'}}>
      {
          <div className='title_tian'>{year.map(item=><span style={{width:`${(365-weekend(moment(item).startOf("year"),moment(item).endOf("year")))*24}px`,display:'inline-block'}}>{moment(item).format("YYYY")}</span>)}</div>
        }
        {
          <div className='di'>{count.map(data=>yue.map(item=><span style={{width:`${24*(moment(item).daysInMonth()-weekend(moment(item).startOf("month"),moment(item).endOf("month")))}px`,display:'inline-block'}}>{moment(item).format('MM')}月</span>))}</div>
        }
      </div>
      <div style={{flex:'1',overflow:"scroll",position:'relative'}}   className='qwe5'>
        <div style={{width:`${year.length*(365-96)*24}px`,height:`${props.state.List.length*500}px`,position:'absolute'}}>  
        {count.map(item=>yue.map(data=><div style={{width:`${24*(moment(data).daysInMonth()-weekend(moment(data).startOf("month"),moment(data).endOf("month")))}px`,  display: 'inline-block',border:'1px solid #c2c2c2',height:'100%',borderLeft:'0px'}}></div>))}
        {
          props.state.iskong?props.state.List.map((item,key)=><div style={{position:'absolute',borderRadius:"10px",width:`${(moment(item.end)-moment(item.start))/1000/60/60-weekend(moment(item.start),moment(item.end))*24}px`,height:'18px',background:'blue',left:`${(moment(item.start)-moment(now))/1000/60/60-weekend(moment(now),moment(item.start))*24}px`,top:`${15+40*key}px`}}></div>):props.state.List.map((item,key)=>item.children?<div style={{position:'absolute',borderRadius:"10px",width:`${(moment(item.end)-moment(item.start))/1000/60/60-weekend(moment(item.start),moment(item.end))*24}px`,height:'18px',background:'blue',left:`${(moment(item.start)-moment(now))/1000/60/60-weekend(moment(now),moment(item.start))*24}px`,top:`${15+40*key}px`}}>{item.children.map((data,key)=><div style={{position:'absolute',borderRadius:"10px",width:`${(moment(data.end)-moment(data.start))/1000/60/60-weekend(moment(data.start),moment(data.end))*24}px`,height:'18px',background:'blue',left:`${(moment(data.start)-moment(item.start))/1000/60/60-weekend(moment(data.start),moment(item.start))*24}px`,top:`${38+40*key}px`}}></div>)}</div>:<div style={{position:'absolute',borderRadius:"10px",width:`${(moment(item.end)-moment(item.start))/1000/60/60-weekend(moment(item.start),moment(item.end))*24}px`,height:'18px',background:'blue',left:`${(moment(item.start)-moment(now))/1000/60/60-weekend(moment(now),moment(item.start))*24}px`,top:`${key>3?95+40*key:15+40*key}px`}}></div>)
        }
         {
          <div style={{position:'absolute',width:'24px',height:'100%',backgroundColor:'#2196f3',opacity:'10%',left:`${((moment()-moment(now))/1000/60/60)-(weekend(moment(now),moment())*24)}px`,top:'0'}}></div>
        }
        </div>
      </div>
    </div>
    }
  </>
  )
}
const mapStateToProps=(state)=>{
  return{
    state
  }
}
export default connect(mapStateToProps)(Gantetu)