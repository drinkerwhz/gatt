import moment from 'moment';
import { createStore } from 'redux';
const reducer=(preState={
    isopen:false,
    List:[
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"场景分析场景分析",
            day:2,
            start:moment('2022-06-10 00:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-11 24:00').format("YYYY-MM-DD HH:mm"),
            daystart:"周五",
            dayend:"周六",

        },
        {
            main:'路径设计设计',
            day:5,
            start:moment('2022-01-27 00:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-01-31 00:00').format("YYYY-MM-DD HH:mm"),
            children:[
                {
                    main:'需求调研设计',
                    day:2,
                    start:moment('2022-01-27 00:00').format("YYYY-MM-DD HH:mm"),
                    end:moment('2022-01-28 00:00').format("YYYY-MM-DD HH:mm"),
                },
                {
                    main:'设计吖吖',
                    day:3,
                    start:moment('2022-01-29 00:00').format("YYYY-MM-DD HH:mm"),
                    end:moment('2022-01-31 00:00').format("YYYY-MM-DD HH:mm"),
                },  
            ]
        },
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 
        {
            main:"产品设计吖吖",
            start:moment('2022-06-09 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-09 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周四',
            dayend:"周四"
        },
        {
            main:"需求调研需求调研需求",
            start:moment('2022-06-10 09:00').format("YYYY-MM-DD HH:mm"),
            end:moment('2022-06-10 18:00').format("YYYY-MM-DD HH:mm"),
            day:1,
            daystart:'周五',
            dayend:"周五"
        }, 

    ],
    iskong:true,
    current:1,
    current1:2,
    mintime:"2022-01-27",
    maxtime:"2023-01-27",
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
            return newState
        default:
            return preState
    }
}
const store=createStore(reducer)
export default store