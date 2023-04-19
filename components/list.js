import React from 'react'

const List = ({children, name, handleDrop, id}) => {

    function handleDragOver(event) {
        event.preventDefault()
      }
  return (
    <div data-list={id} onDragOver={handleDragOver} onDrop={handleDrop} className="p-4 bg-slate-400 rounded-md flex-1">{name}
        {children}
    </div>
  )
}

export default List