import React, { useEffect } from 'react'
import Tabbar from './tabbar/Tabbar.js'
import Main from './main/Main.js'
import './App.css'
import { connect} from 'react-redux'
import Tankuang from './tankuang/Tankuang.js'

var qwe,zuo


function App(props) {
  useEffect(() => {
   setTimeout(()=>{
    qwe=document.querySelector('.qwe')
    zuo=document.querySelector('.zuo')
    qwe.addEventListener('scroll',()=>{
      zuo.scrollTop=qwe.scrollTop
    })
    zuo.addEventListener('scroll',()=>{
      qwe.scrollTop=zuo.scrollTop
    })
   },0)
  }, [props.state.current,props.state.current1,qwe,zuo,props.state.isopen])
  
  
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
