import { useState } from "react"
import Card from "../components/Card";

function TodoPage(){
    const [inputValue,setInputValue]=useState("");
    const [items,setItems]=useState([]);
    function handleAdd(){
        if(inputValue.trim()!="")
       {
        items.push(inputValue);
        setItems([...items]);
        setInputValue("");
    }
    }
    return(
        <>
        <main className="w-screen min-h-screen mt-10 flex flex-col justify-center items-center">
        <h1>Todo App</h1>
        <section>
            <input value={inputValue} onChange={ (e)=>setInputValue(e.target.value)} className="bg-black" type="text" />
            <button onClick={handleAdd} className="bg-red-400">Add</button>
        </section>
        <section> 
            <ol className="list-decimal pl-5">
               { items.map((value,index) => {
                    return <Card key={index} id={index+1} title={value}/>
                })}
            </ol>
        </section>


        </main>
        </>

    )
}

export default TodoPage;