import { useState, useEffect } from "react"
import Card from '@/components/card'
import List from '@/components/list'
import Layout from "@/components/layout"

const todoList = [
    {
      text: 'Comprar una suscripción a LeonidasEsteban.com',
      id: 'todoList-task-1'
    },
    {
      text: 'Iniciar mi primer proyecto en CSSMaster.com',
      id: 'todoList-task-2'
    }
  ]
  const inProgressList = [
    {
      text: 'Ver los live live coding en youtube.com/LeonidasEsteban',
      id: 'inProgressList-task-2'
    }
  ]
  
  const doneList = [
    {
      text: 'Proyecto de Trello 🎤',
      id: 'doneList-task-2'
    }
  ]

const preferencias = ({dataProps}) => {
    const [dragged, setDragged] = useState(null)
    const [listOflists, setListOfLists] = useState({
        todoList,
        inProgressList,
        doneList,
      })

      function handleDrop(event) {
        event.preventDefault()
        const list = event.currentTarget.dataset.list
      
        const listOflistsClone = structuredClone(listOflists)
        const newList = listOflistsClone[dragged.list].filter(item => item.id !== dragged.data.id)
        listOflistsClone[dragged.list] = newList
        listOflistsClone[list].push(dragged.data)
        setListOfLists(listOflistsClone)
      }

    
  return (
    <Layout data={dataProps}>

     
            <List
           name="TODO"
           handleDrop={handleDrop}
           id="todoList"
        >
          {
            listOflists.todoList.map((item, index) => (
              <Card setDragged={setDragged} {...item} key={item.id} />
            ))
          }
        </List>

        <List
          name="In progress"
          handleDrop={handleDrop}
          id="inProgressList"
        >
          {
            listOflists.inProgressList.map((item, index) => (
              <Card setDragged={setDragged} {...item} key={item.id} />
            ))
          }
        </List>

          
        <List
          name="Done"
          handleDrop={handleDrop}
          id="doneList"
        >
          {
            listOflists.doneList.map((item, index) => (
              <Card setDragged={setDragged} {...item} key={item.id} />
            ))
          }
        </List>
      
       

        </Layout>
  )
}

export async function getStaticProps() {
    const res = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await res.json();
    const { results, info } = data;
    
    const dataProps   = results.sort((a, b) => a.name.localeCompare(b.name));
    console.log("desde la fssssu",dataProps);
    return {
      props: {
        dataProps
      }
    }
  }
export default preferencias