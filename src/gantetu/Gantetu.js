import React from 'react'
import './Gantetu.css'
import moment from 'moment';
import { connect } from 'react-redux';

function Gantetu(props) {
  var count=[]
  var ri=[],zhou=[],zhou6=[]
  var i=0,j=0,s=0
  var xingqi=["日","一","二","三","四","五","六"]
  const now=moment(props.state.mintime).format("YYYY-MM-DD")
  console.log(now);
  for (let index = 0; index <4; index++) {
    count[i]=moment(now).subtract(-1*index, "month").format('YYYY.MM')
    s=s+moment(count[i]).daysInMonth()
    i=i+1
  }
  for (let index1 = 0; index1 <s; index1++) {
    ri[j]=moment(now).subtract(-1*index1, "days").format('YYYY.MM.DD')
    zhou[j]=moment(now).subtract(-1*index1, "week").format('YYYY.MM.DD')
    zhou6[j]=moment(now).subtract(-2*index1, "week").format('YYYY.MM.DD')
    j=j+1
  }
  return (
    <div>
    {props.state.current===1&&<div className='title'>
      <div className='title_time'>
        {
          count.map((item,key)=><div key={key} style={{marginLeft:'3px'}}>{item}<div>{ri.map(data=><span style={{width:'62px',display:'inline-block'}}>{moment(data).format('DD')}{xingqi[moment(data).day()]}</span>)}</div></div>)
        }
      </div>
      <div>  
      {count.map(data=>ri.map((item,key)=><div style={{width:'60px',  display: 'inline-block',border:'1px solid #c2c2c2',height:'810px'}} key={key}></div>))}
      </div>
    </div>
    }
    {
      props.state.current===2&&<div className='title'>
      <div className='title_time'>
        {
          count.map((item,key)=><div key={key} style={{marginLeft:'3px'}}>{item}<div>{zhou.map(data=><span style={{width:'200px',display:'inline-block'}}>{moment(data).format("DD")}～{moment(data).subtract(-6, "days").format("DD")}日{}</span>)}</div></div>)
        }
      </div>
      <div>  
      {count.map(data=>ri.map((item,key)=><div style={{width:'60px',  display: 'inline-block',border:'1px solid #c2c2c2',height:'810px'}} key={key}></div>))}
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