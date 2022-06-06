export default function myBind(styles){
     return function cx(className)
     { 
         return styles[className] 
    }
}