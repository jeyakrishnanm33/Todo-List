function Card({id=0, title="default title", desc="default desc"}){
    return(
        <div className="min-w-sm bg-slate-300 m-2 p-4 rounded-2xl shadow-2xl">
            <h3 className="font-semibold uppercase text-2xl">{id}.{title}</h3>
            <p className="p-2 pb-4 text-gray-700">{desc}</p>
            <div className="flex justify-end gap-2">
                <button className="bg-orange-200">Edit</button>
                <button className="bg-red-500">Delete</button>
            </div>

        </div>
    )

}

export default Card;