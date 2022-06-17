import React, { useEffect } from 'react'
import Tabbar from './tabbar/Tabbar.js'
import Main from './main/Main.js'
import './App.css'
import { connect} from 'react-redux'
import Tankuang from './tankuang/Tankuang.js'

var qwe,zuo,qwe1,qwe2,qwe3,qwe4,qwe5


function App(props) {
  useEffect(() => {
   setTimeout(()=>{
    qwe=document.querySelector('.qwe')
    zuo=document.querySelector('.zuo')
    qwe1=document.querySelector('.qwe1')
    qwe2=document.querySelector('.qwe2')
    qwe3=document.querySelector('.qwe3')
    qwe4=document.querySelector('.qwe4')
    qwe5=document.querySelector('.qwe5')
    if(qwe!==null)
    {
      qwe.addEventListener('scroll',()=>{
        zuo.scrollTop=qwe.scrollTop
      })
      zuo.addEventListener('scroll',()=>{
        qwe.scrollTop=zuo.scrollTop
      })
    }
    if(qwe1!==null)
    {
      qwe1.addEventListener('scroll',()=>{
        zuo.scrollTop=qwe1.scrollTop
      })
      zuo.addEventListener('scroll',()=>{
        qwe1.scrollTop=zuo.scrollTop
      })
    }
    if(qwe2!==null)
    {
      qwe2.addEventListener('scroll',()=>{
        zuo.scrollTop=qwe2.scrollTop
      })
      zuo.addEventListener('scroll',()=>{
        qwe2.scrollTop=zuo.scrollTop
      })
    }
    if(qwe3!==null)
    {
      qwe3.addEventListener('scroll',()=>{
        zuo.scrollTop=qwe3.scrollTop
      })
      zuo.addEventListener('scroll',()=>{
        qwe3.scrollTop=zuo.scrollTop
      })
    }
    if(qwe4!==null)
    {
      qwe4.addEventListener('scroll',()=>{
        zuo.scrollTop=qwe4.scrollTop
      })
      zuo.addEventListener('scroll',()=>{
        qwe4.scrollTop=zuo.scrollTop
      })
    }
    if(qwe5!==null)
    {
      qwe5.addEventListener('scroll',()=>{
        zuo.scrollTop=qwe5.scrollTop
      })
      zuo.addEventListener('scroll',()=>{
        qwe5.scrollTop=zuo.scrollTop
      })
    }
   },1)

  }, [props.state.current,props.state.current1,qwe,qwe1,qwe2,qwe3,qwe4,qwe5,zuo])
  
  
  return (
    <>
      {
        props.state.isopen?<Tankuang></Tankuang>:
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
            <>
                <Tabbar></Tabbar>
            </>
            <>
              <Main></Main>
            </>
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
export default connect(mapStateToProps)(App)
