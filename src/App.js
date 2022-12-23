import './App.css';
import { useEffect, useState } from 'react';
import Loading from './loading';
import Tours from './tours';

const url = 'https://course-api.com/react-tours-project'

function App(){
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState({})

  const removeTours = (id) => {
    tours.filter((tour) => id!=tour.id)
  }


  const fetchTours = async() => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(true)
      console.log(error);
    }}


    useEffect(() => {
      fetchTours()
    },[])



    if (loading){
      return (
      <main>
        <Loading />
      </main>)
    }


    if (tours.length===0){
      return (
        <main>
          <div className='title'>
            <h1>no Tours left</h1>
            <button className='btn' onClick={() => {fetchTours()}}>refresh</button>
          </div>
        </main>
      )
    }
    return (
      <main>
        <Tours tours={tours} removeTour={removeTours} />
      </main>
    )

  
}
export default App