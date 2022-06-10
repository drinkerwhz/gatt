import React from 'react'
import Tabbar from './tabbar/Tabbar.js'
import Main from './main/Main.js'
import './App.css'
import { connect} from 'react-redux'
import Tankuang from './tankuang/Tankuang.js'

function App(props) {
  return (
    <div style={{height:'100%'}}>
      {
        props.state.isopen?<Tankuang></Tankuang>:
        <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
            <div className='tab'>
                <Tabbar></Tabbar>
            </div>
            <div className='main'>
              <Main></Main>
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
export default connect(mapStateToProps)(App)
