import Image from "next/image"
function Card({ text, id, setDragged, list }) {
    console.log(list);
    function handleDragStart(event) {
      setDragged({
        data: {
          text, id
        }
        ,
        list: event.target.closest('[data-list]').dataset.list
      })
    console.log("asdsd",event.target.closest('[data-list]').dataset.list);    
}
  
    return (
      <div draggable onDragStart={handleDragStart} className="bg-slate-100 text-slate-900 rounded-md p-3 flex flex-col gap-4 hover:cursor-grab">
        <div className="flex justify-between ">
          <p className="font-medium">{text}</p>
        </div>
        <div className="flex justify-between">
      
        </div>
      </div>
    )
  }
  
  export default Card