import { useState, useEffect } from 'react'
import './App.css'
import ButtonComponent from './components/Button'
import CounterComponent from './components/Counter'
import { fetchData } from './api/items'

function App() {

  const [items, setItems] = useState([])
  const [fetching, setFetching] = useState(true)

  // function to fetch data
  const fetchItems = async ()=>{
    try{
      let items = await fetchData('https://dummyjson.com/products?limit=10')
      console.log(items)
      setItems(items?.products)
      setFetching(false)
    }
    catch(error){
      alert('Somthing went wrong')
      setFetching(false)
    }
  }

  useEffect(()=>{
    fetchItems()

  },[fetching])

  return (
    <>
      <div className="">
        <CounterComponent/>
      </div>
      <div className='fetchMain '>
        This shows the fetching of data.
        <br />
        <ButtonComponent label='Refetch' onClickHandler={()=>setFetching(true)}/>
      </div>
      <div className='result'>
        {fetching ? <img className='loading' src='https://media.tenor.com/NqKNFHSmbssAAAAi/discord-loading-dots-discord-loading.gif' alt='loading' width={50} height={20}></img> :
          <ul>
            {items.map((item: any) => {
              return <li className='card' key={item.id}>
                <img src={item.thumbnail} alt="product" width={40} height={40} />
                <div className=''>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            })}
          </ul>}
      </div>
    </>
  )
}

export default App
