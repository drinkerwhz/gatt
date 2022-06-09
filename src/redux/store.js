import moment from 'moment';
import { createStore } from 'redux';
const reducer=(preState={
    isopen:false,
    List:[
        {
            main:"产品设计吖吖",
            date:"今天",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            date:"周三",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"场景分析场景分析",
            day:2,
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-11 18:00').format("YYYY-MM-DD HH:mm"),
            daystart:"周五",
            dayend:"周六",

        },
        {
            main:'路径设计设计',
            time:'5天',
            start:"1/27",
            end:"1/31",
            children:[
                {
                    main:'需求调研设计',
                    time:'2天',
                    start:"1/27",
                    end:"1/28",
                },
                {
                    main:'设计吖吖',
                    time:'3天',
                    start:"1/29",
                    end:"1/31",
                },  
            ]
        },
    ],
    iskong:true,
    current:1,
    current1:1,
    mintime:"2022-01-27",
    maxtime:"2023-01-27"
},action)=>{
    let {type,data}=action
    let newState={...preState}
    switch(type){
        case 'change_open':
            newState.isopen=!newState.isopen
            return newState
        case 'change_jixu':
            newState.isopen=true
            return newState
        case 'add_list':
            newState.List=newState.List.concat({main:data.name,start:data.start,end:data.end,day:data.day,daystart:data.timestart,dayend:data.timeend})
            return newState
        case 'change_kong':
            newState.iskong=!newState.iskong
            return newState
        case 'change1':
            newState.current=data
            return newState
        case 'change2':
            newState.current1=data
            return newState
        case 'min':
            newState.mintime=data
            console.log(newState.mintime);
            return newState
        default:
            return preState
    }
}
const store=createStore(reducer)
export default store