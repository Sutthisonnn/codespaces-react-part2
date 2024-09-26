import { useEffect, useState } from "react";
//function Item({name,isPacked}){
//   if(isPacked) return (<li>{name} ✔ </li>)
//   return (<li>{name}</li>);
//}

//function Item({name,isPacked}){
//   return (<li>
//        {isPacked ? name + ' ✔' : name}
//    </li>);
//}

function Item({name,isPacked=false}){
    return (<li>
       {name}{isPacked && ' ✔'}</li>);
}

//export default function ItemsList(){
//    return (<ui>
//        <Item name="Sunglass" isPacked={true}/>
//        <Item name="Sunblock" isPacked={true}/>
//        <Item name="Swimming suit" isPacked={false}/>
//        <Item name="Towel" isPacked={false}/>
//    </ui>);
//}

export default function ItemsList(){

    const [keyword, setKeyword] = useState("");

    useEffect(()=>{
        console.log("this component is loaded")
    })

    const Items=[{name:"Sunglass", isPacked:true},
        {name:"Sunblock", isPacked:false},
        {name:"Swimming suit", isPacked:false},
        {name:"Powerbank", isPacked:false},
        {name:"Tower", isPacked:true}
    ];

    const filterList=Items.filter(i=>i.name.toLowerCase().includes(keyword.toLocaleLowerCase()))
    const ItemsList=filterList.map(i=><Item key={i.name}
    name={i.name} isPacked={i.isPacked}/>)
    return (<>
    <input type="text" value={keyword} onChange={e=>setKeyword(e.target.value)}/>
    <ui>
        {ItemsList}
    </ui></>);


}

