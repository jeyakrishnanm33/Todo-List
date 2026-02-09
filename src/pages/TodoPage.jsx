import { useState } from "react";
function TodoPage(){
    const[inputValue, setInputValue]=useState("");
    const[items, setItems]=useState(["apple","Orange"]);
    function handleAdd(){
        if(inputValue.trim()!=""){
            items.push(inputValue);
            setItems([...items]);
            setInputValue("");
        }
    }
    return(
        
        <>
            <main>
                <h1>To Do App</h1>
                <section>
                    <input value={inputValue} onChange={(event)=> setInputValue(event.target.value)} className="bg-black" type="text" />
                    <button className="bg-red-400" onClick={handleAdd}>add</button>
                    
                </section>
                <section>
                    <ol className="list-decimal pl-5">
                        {
                            items.map((value,index)=>{
                                return <li key={index}>{value}</li>
                            })
                        }
                    </ol>
                </section>
            </main>
        </>
    )
}
export default TodoPage;