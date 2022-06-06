import { createStore } from 'redux';
const reducer=(preState={
    isopen:false,
    List:[
        {
            main:"产品设计吖吖",
            date:"今天",
            start:"9:00",
            end:"18:00"
        },
        {
            main:"需求调研需求调研需求",
            date:"周三",
            start:"9:00",
            end:"18:00"
        }, 
        {
            main:"场景分析场景分析",
            time:"2天",
            start:"周五",
            end:"周六",

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
    maxtime:"2022-08-27"
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
            newState.List=newState.List.concat({main:data.name,start:data.timestart,end:data.timeend,time:data.day})
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