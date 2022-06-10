import React from 'react'
import Tabbar from './tabbar/Tabbar.js'
import Main from './main/Main.js'
import './App.css'
import { connect} from 'react-redux'
import Tankuang from './tankuang/Tankuang.js'

function App(props) {
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
