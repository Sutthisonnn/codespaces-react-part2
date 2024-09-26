import {useRef,useState } from "react";

const BmiText=({bmi})=>{
    if(bmi<18.5)
        return (<h1>UnderWeight</h1>);
    if(bmi>30)
        return (<h1>OverWeight</h1>);
    return (<h1>Normal</h1>);
}

export default function BMI(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [Bmi,setBmi]=useState(0);
    const calBmi=()=>{
        let W=W_input.current.value;
        let H=H_input.current.value/100;
        setBmi(W / Math.pow(H,2));
    }
    return (
    <>
        <h3>BMI CALCULATOR</h3>
        Weight:
        <input type="text" ref={W_input} /> kg.<br/>
         Height:
        <input type="text" ref={H_input} /> cm.<br/>
        <button onClick={()=>calBmi()}>Calculate!</button> <br/>
        Bmi value: {Bmi.toFixed(2)}
        <BmiText bmi={Bmi}/>    
    </>
    );
}