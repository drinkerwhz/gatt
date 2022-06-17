import React, { useState, useEffect } from 'react'
import './Gantetu.css'
import moment from 'moment';
import { connect } from 'react-redux';

function Gantetu(props) {
  var time, di, qwe
  const now = moment(moment(props.state.mintime)).startOf("month").format("YYYY-MM-DD")
  useEffect(() => {
    setTimeout(() => {
      time = document.querySelector('.title_tian')
      di = document.querySelector('.di')
      qwe = document.querySelector('.qwe')
      if (props.state.current === 1 && props.state.current1 === 1) {
        qwe.scrollLeft = (moment().diff(moment(now), 'day') - weekend(moment(now), moment())) * 72
        qwe.addEventListener('scroll', () => {
          time.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
          di.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
        })
      }
      if (props.state.current === 1 && props.state.current1 === 2) {
        qwe.scrollLeft = moment().diff(moment(now), 'day') * 72
        qwe.addEventListener('scroll', () => {
          time.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
          di.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
        })
      }
      if (props.state.current === 2 && props.state.current1 === 2) {
        qwe.scrollLeft = moment().diff(moment(now), 'day') * 48 - 96
        qwe.addEventListener('scroll', () => {
          time.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
          di.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
        })
      }
      if (props.state.current === 2 && props.state.current1 === 1) {
        qwe.scrollLeft = (moment().diff(moment(now), 'day') - weekend(moment(now), moment())) * 48
        qwe.addEventListener('scroll', () => {
          time.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
          di.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
        })
      }
      if (props.state.current === 3 && props.state.current1 === 2) {
        qwe.scrollLeft = moment().diff(moment(now), 'day') * 24
        qwe.addEventListener('scroll', () => {
          time.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
          di.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
        })
      }
      if (props.state.current === 3 && props.state.current1 === 1) {
        qwe.scrollLeft = (moment().diff(moment(now), 'day') - weekend(moment(now), moment())) * 24
        qwe.addEventListener('scroll', () => {
          time.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
          di.style.transform = 'translateX(-' + qwe.scrollLeft + 'px)'
        })
      }
    }, 0)
  }, [props.state.current1, props.state.current, qwe, time, di])
  function weekend(a, b) {
    let x = parseInt((b - a) / 1000 / 60 / 60 / 24 + 1) - parseInt((b - a) / 1000 / 60 / 60 / 24 / 7) * 7
    let z = parseInt((b - a) / 1000 / 60 / 60 / 24 / 7)
    var s = 0
    for (let i = 0; i < x; i++) {
      let y = moment(a).subtract(-1 * i, 'days').format("YYYY-MM-DD")
      if (moment(y).day() === 0 || moment(y).day() === 6) {
        s++
      }
    }
    return s + z * 2
  }
  var count = []
  var ri = [], zhou = [], s1 = [], yue = [], year = [], weekdayri = [], weekdayricount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], zhouweekday = []
  var i = 0, s = 0, ri1
  var xingqi = ["日", "一", "二", "三", "四", "五", "六"]
  for (let index = 0; index < 10; index++) {
    count[i] = moment(now).subtract(-1 * index, "month").format('YYYY.MM')
    s = s + moment(count[i]).daysInMonth()
    for (let x = 0; x < moment(count[i]).daysInMonth(); x++) {
      ri1 = moment(count[i]).subtract(-1 * x, "days").format('YYYY.MM.DD')
      if (moment(ri1).day() !== 0 && moment(ri1).day() !== 6) {
        weekdayricount[i]++
      }
    }
    i = i + 1
  }
  for (let x = 0; x < s; x++) {
    ri[x] = moment(now).subtract(-1 * x, "days").format('YYYY.MM.DD')
    if (moment(ri[x]).day() !== 0 && moment(ri[x]).day() !== 6) {
      weekdayri.push(ri[x])
    }
  }
  for (let index = 0; index < 10; index++) {
    year[index] = moment(now).subtract(-1 * index, "year").format('YYYY.MM')
    for (let i = 0; i < 12; i++) {
      yue[i] = moment(now).subtract(-1 * i, "month").format('YYYY.MM.DD')
    }
  }
  for (let x = 0; Math.floor(x < s / 8); x++) {
    if (moment(now).day() === 0) {
      var weekdaynow = moment(now).subtract(-1, "days").format('YYYY.MM.DD')
    }
    if (moment(now).day() === 6) {
      weekdaynow = moment(now).subtract(-2, "days").format('YYYY.MM.DD')
    }
    zhou[x] = moment(now).subtract(-1 * x, "week").format('YYYY.MM.DD')
    zhouweekday[x] = moment(weekdaynow).subtract(-1 * x, "week").format('YYYY.MM.DD')
  }
  for (let y = 0; y < 7; y++) {
    s1[y] = y
  }

  return (
    <>
      {props.state.current === 1 && props.state.current1 === 2 && <div className='title'>
        <div className='title_time' >
          <div className='title_tian'>
            {
              count.map((item, key) => <div key={key} style={{ width: `${moment(item).daysInMonth() * 72}px` }}>{item}</div>)
            }
          </div>
          <div className='di' style={{ width: `${ri.length * 72}px` }}>{ri.map(data => <span style={{ width: '72px' }}>{moment(data).format('DD')}{xingqi[moment(data).day()]}</span>)}</div>
        </div>
        <div className='qwe'>
          <div style={{ width: `${ri.length * 72}px`, position: 'absolute', height: `${props.state.List.length < 21 ? 100 : props.state.List.length * 40 + 8}${props.state.List.length < 21 ? '%' : 'px'}` }}>
            {ri.map((item, key) => <div className={moment().diff(moment(now), 'days') === key ? 'today' : 'ri'} key={key}></div>)}
            {props.state.iskong ? props.state.List.map((item, key) => <div className='blue' style={{top: `${40 * key + 16}px`, width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60 * 3}px`,left: `${((moment(item.start) - moment(now)) / (1000 * 60 * 60)) * 3}px` }}></div>) : props.state.List.map((item, key) => item.children ? <div className='blue' style={{top: `${40 * key + 16}px`, width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60 * 3}px`,left: `${((moment(item.start) - moment(now)) / (1000 * 60 * 60)) * 3}px` }}>{item.children.map((data, key) => <div className='blue' style={{top: `${38 * key + 38}px`, width: `${(moment(data.end) - moment(data.start)) / 1000 / 60 / 60 * 3}px`, left: `${(moment(data.start) - moment(item.start)) / 1000 / 60 / 60 * 3}px` }}></div>)}</div> : <div style={{top: `${key > 3 ? 40 * key + 96 : 40 * key + 16}px`, width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60 * 3}px`, left: `${((moment(item.start) - moment(now)) / (1000 * 60 * 60)) * 3}px` }}></div>)}
          </div>
        </div>
      </div>
      }
      {props.state.current === 1 && props.state.current1 === 1 && <div className='title'>
        <div className='title_time'>
          <div className='title_tian' >
            {
              count.map((item, key) => <div key={key} style={{ width: `${(weekdayricount[key]) * 72}px` }}>{item}</div>)
            }
          </div >
          <div className='di' style={{ width: `${weekdayri.length * 72}px` }}>{weekdayri.map(data => <span style={{ width: '72px' }}>{moment(data).format('DD')}{xingqi[moment(data).day()]}</span>)}</div>
        </div>
        <div className='qwe'>
          <div style={{ width: `${weekdayri.length * 72}px`, height: `${props.state.List.length < 21 ? 100 : props.state.List.length * 40 + 8}${props.state.List.length < 21 ? '%' : 'px'}`, position: 'absolute', }}>
            {weekdayri.map((item, key) => <div className={moment().diff(moment(now), 'days') === key + weekend(moment(now), moment()) ? 'today' : 'ri'}  key={key}></div>)}

            {props.state.iskong ? props.state.List.map((item, key) => <div className='blue' style={{top: `${40 * key + 15}px`, width: `${((moment(item.end) - moment(item.start)) / 1000 / 60 / 60 - weekend(moment(item.start), moment(item.end)) * 24) * 3}px`,left: `${(((moment(item.start) - moment(now)) / (1000 * 60 * 60 * 24)) - weekend(moment(now), (moment(item.start)))) * 72}px` }}></div>) : props.state.List.map((item, key) => item.children ? <div className='blue' style={{top: `${40 * key + 16}px`, width: `${((moment(item.end) - moment(item.start)) / 1000 / 60 / 60 - weekend(moment(item.start), moment(item.end)) * 24) * 3}px`,left: `${(((moment(item.start) - moment(now)) / (1000 * 60 * 60 * 24)) - weekend(moment(now), (moment(item.start)))) * 72}px` }}>{item.children.map((data, key) => <div className='blue' style={{top: `${38 * key + 38}px`, width: `${((moment(data.end) - moment(data.start)) / 1000 / 60 / 60 - (weekend(moment(data.start), moment(data.end)) * 24)) * 3}px`, left: `${(moment(data.start) - moment(item.start)) / 1000 / 60 / 60 * 3}px` }}></div>)}</div> : <div className='blue' style={{ top: `${key > 3 ? 40 * key + 95 : 40 * key + 15}px`, width: `${((moment(item.end) - moment(item.start)) / 1000 / 60 / 60 - weekend(moment(item.start), moment(item.end)) * 24) * 3}px`,left: `${(((moment(item.start) - moment(now)) / (1000 * 60 * 60 * 24)) - weekend(moment(now), (moment(item.start)))) * 72}px` }}></div>)}
          </div>
        </div>
      </div>
      }
      {
        props.state.current === 2 && props.state.current1 === 2 && <div className='title'>
          <div className='title_time1' style={{ width: `${zhou.length * 336}px`}}>
            {
              <div className='title_tian'>{count.map(item => <span style={{ width: `${moment(item).daysInMonth() * 48}px` }}>{item}</span>)}</div>
            }
            {
              <div className='di'>{zhouweekday.map(data => <span style={{ width: `336px`}}>{moment(data).format("DD")}～{moment(data).subtract(-6, "days").format("DD")}日{ }</span>)}</div>
            }
          </div>
          <div className='qwe'>
            <div style={{ width: `${zhou.length * 336}px`, height: `${props.state.List.length < 21 ? 100 : props.state.List.length * 40 + 8}${props.state.List.length < 21 ? '%' : 'px'}`, position: 'absolute' }}>
              {zhouweekday.map(data => <div className='xian' style={{ width: '336px'}}
              ></div>)}
              {
                props.state.iskong ? props.state.List.map((item, key) => <div className='blue' style={{ width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60 * 2}px`, left: `${(moment(item.start) - moment(weekdaynow)) / 1000 / 60 / 60 * 2}px`, top: `${15 + 40 * key}px` }}></div>) : props.state.List.map((item, key) => item.children ? <div className='blue' style={{width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60 * 2}px`, left: `${(moment(item.start) - moment(weekdaynow)) / 1000 / 60 / 60 * 2}px`, top: `${15 + 40 * key}px` }}>{item.children.map((data, key) => <div className='blue' style={{ width: `${(moment(data.end) - moment(data.start)) / 1000 / 60 / 60 * 2}px`, left: `${(moment(data.start) - moment(item.start)) / 1000 / 60 / 60 * 2}px`, top: `${38 + 40 * key}px` }}></div>)}</div> : <div className='blue' style={{ width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60 * 2}px`, left: `${(moment(item.start) - moment(now)) / 1000 / 60 / 60 * 2}px`, top: `${key > 3 ? 95 + 40 * key : 15 + 40 * key}px` }}></div>)
              }
              {
                <div className='jintian' style={{width: '48px', left: `${moment().diff(moment(weekdaynow), 'days') * 48}px`}}></div>
              }
            </div>
          </div>
        </div>
      }
      {
        props.state.current === 2 && props.state.current1 === 1 && <div className='title'>
          <div className='title_time1' style={{ width: `${zhou.length * 240}px,`}}>
            {
              <div className='title_tian'>{count.map(item => <span style={{ width: `${moment(item).daysInMonth() * 35}px`}}>{item}</span>)}</div>
            }
            {
              <div className='di'>{zhouweekday.map(data => <span style={{ width: `240px`}}>{moment(data).format("DD")}～{moment(data).subtract(-4, "days").format("DD")}日{ }</span>)}</div>
            }
          </div>
          <div className='qwe'>
            <div style={{ width: `${zhou.length * 240}px`, height: `${props.state.List.length < 21 ? 100 : props.state.List.length * 40 + 8}${props.state.List.length < 21 ? '%' : 'px'}`, position: 'absolute' }}>
              {zhouweekday.map(data => <div className='xian' style={{ width: '240px'}} ></div>)}
              {
                props.state.iskong ? props.state.List.map((item, key) => <div className='blue' style={{width: `${((moment(item.end) - moment(item.start)) / 1000 / 60 / 60 - weekend(moment(item.start), moment(item.end)) * 24) * 2}px`, left: `${((moment(item.start) - moment(now)) / 1000 / 60 / 60 - weekend(moment(now), moment(item.start)) * 24) * 2}px`, top: `${15 + 40 * key}px` }}></div>) : props.state.List.map((item, key) => item.children ? <div className='blue' style={{ width: `${((moment(item.end) - moment(item.start)) / 1000 / 60 / 60 - weekend(moment(item.start), moment(item.end)) * 24) * 2}px`, left: `${((moment(item.start) - moment(now)) / 1000 / 60 / 60 - weekend(moment(now), moment(item.start)) * 24) * 2}px`, top: `${15 + 40 * key}px` }}>{item.children.map((data, key) => <div className='blue' style={{width: `${((moment(data.end) - moment(data.start)) / 1000 / 60 / 60 - weekend(moment(data.start), moment(data.end)) * 24) * 2}px`, left: `${((moment(data.start) - moment(item.start)) / 1000 / 60 / 60 - weekend(moment(item.start), moment(data.start)) * 24) * 2}px`, top: `${38 + 40 * key}px` }}></div>)}</div> : <div className='blue' style={{width: `${((moment(item.end) - moment(item.start)) / 1000 / 60 / 60 - weekend(moment(item.start), moment(item.end)) * 24) * 2}px`, left: `${((moment(item.start) - moment(now)) / 1000 / 60 / 60 - weekend(moment(now), moment(item.start)) * 24) * 2}px`, top: `${key > 3 ? 95 + 40 * key : 15 + 40 * key}px` }}></div>)
              }
              {
                <div className='jintian' style={{width: '48px', left: `${((moment().diff(moment(now), 'days')) - weekend(moment(now), moment())) * 48}px`}}>{moment().diff(moment(now), 'days')}</div>
              }
            </div>
          </div>
        </div>
      }
      {props.state.current === 3 && props.state.current1 === 2 && <div className='title'>
        <div className='title_time2' style={{ width: `${year.length * 365 * 24}px`}}>
          {
            <div className='title_tian'>{year.map(item => <span style={{ width: `${365 * 24}px`}}>{moment(item).format("YYYY")}</span>)}</div>
          }
          {
            <div className='di'>{count.map(data => yue.map(item => <span style={{ width: `${24 * moment(item).daysInMonth()}px` }}>{moment(item).format("MM")}月</span>))}</div>
          }
        </div>
        <div className='qwe'>
          <div style={{ width: `${(year.length + 1) * 365 * 24}px`, height: `${props.state.List.length < 21 ? 100 : props.state.List.length * 40 + 8}${props.state.List.length < 21 ? '%' : 'px'}`, position: 'absolute' }}>
            {count.map(item => yue.map(data => <div className='xian' style={{ width: `${24 * moment(data).daysInMonth()}px`}}></div>))}
            {
              props.state.iskong ? props.state.List.map((item, key) => <div className='blue' style={{ width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60}px`, left: `${(moment(item.start) - moment(now)) / 1000 / 60 / 60}px`, top: `${15 + 40 * key}px` }}></div>) : props.state.List.map((item, key) => item.children ? <div className='blue'  style={{width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60}px`, left: `${(moment(item.start) - moment(now)) / 1000 / 60 / 60}px`, top: `${15 + 40 * key}px` }}>{item.children.map((data, key) => <div className='blue'  style={{width: `${(moment(data.end) - moment(data.start)) / 1000 / 60 / 60}px`, left: `${(moment(data.start) - moment(item.start)) / 1000 / 60 / 60}px`, top: `${38 + 40 * key}px` }}></div>)}</div> : <div className='blue'  style={{width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60}px`, left: `${(moment(item.start) - moment(now)) / 1000 / 60 / 60}px`, top: `${key > 3 ? 95 + 40 * key : 15 + 40 * key}px` }}></div>)
            }
            {
              <div className='jintian' style={{ width: '24px', left: `${(Math.floor((moment() - moment(now)) / 1000 / 60 / 60))}px`}}></div>
            }
          </div>
        </div>
      </div>
      }
      {props.state.current === 3 && props.state.current1 === 1 && <div className='title'>
        <div className='title_time2'>

          {
            <div className='title_tian'>{year.map(item => <span style={{ width: `${(365 - weekend(moment(item).startOf("year"), moment(item).endOf("year"))) * 24}px`}}>{moment(item).format("YYYY")}</span>)}</div>
          }
          {
            <div className='di'>{count.map(data => yue.map(item => <span style={{ width: `${24 * (moment(item).daysInMonth() - weekend(moment(item).startOf("month"), moment(item).endOf("month")))}px` }}>{moment(item).format('MM')}月</span>))}</div>
          }
        </div>
        <div className='qwe'>
          <div style={{ width: `${year.length * (365 - 96) * 24}px`, height: `${props.state.List.length < 21 ? 100 : props.state.List.length * 40 + 8}${props.state.List.length < 21 ? '%' : 'px'}`, position: 'absolute' }}>
            {count.map(item => yue.map(data => <div className='xian' style={{ width: `${24 * (moment(data).daysInMonth() - weekend(moment(data).startOf("month"), moment(data).endOf("month")))}px` }}></div>))}
            {
              props.state.iskong ? props.state.List.map((item, key) => <div className='blue'  style={{width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60 - weekend(moment(item.start), moment(item.end)) * 24}px`, left: `${(moment(item.start) - moment(now)) / 1000 / 60 / 60 - weekend(moment(now), moment(item.start)) * 24}px`, top: `${15 + 40 * key}px` }}></div>) : props.state.List.map((item, key) => item.children ? <div className='blue'  style={{width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60 - weekend(moment(item.start), moment(item.end)) * 24}px`, left: `${(moment(item.start) - moment(now)) / 1000 / 60 / 60 - weekend(moment(now), moment(item.start)) * 24}px`, top: `${15 + 40 * key}px` }}>{item.children.map((data, key) => <div className='blue'  style={{width: `${(moment(data.end) - moment(data.start)) / 1000 / 60 / 60 - weekend(moment(data.start), moment(data.end)) * 24}px`, left: `${(moment(data.start) - moment(item.start)) / 1000 / 60 / 60 - weekend(moment(data.start), moment(item.start)) * 24}px`, top: `${38 + 40 * key}px` }}></div>)}</div> : <div className='blue'  style={{width: `${(moment(item.end) - moment(item.start)) / 1000 / 60 / 60 - weekend(moment(item.start), moment(item.end)) * 24}px`, left: `${(moment(item.start) - moment(now)) / 1000 / 60 / 60 - weekend(moment(now), moment(item.start)) * 24}px`, top: `${key > 3 ? 95 + 40 * key : 15 + 40 * key}px` }}></div>)
            }
            {
              <div className='jintian' style={{ width: '24px', left: `${((moment() - moment(now)) / 1000 / 60 / 60) - (weekend(moment(now), moment()) * 24)}px`}}></div>
            }
          </div>
        </div>
      </div>
      }
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    state
  }
}
export default connect(mapStateToProps)(Gantetu)