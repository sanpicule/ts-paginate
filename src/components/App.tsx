import { useEffect, useState } from 'react'
import '../styles/App.css'
import axios from 'axios'
import Album from '../type'
import Pagination from './Pagination'

function App() {
  const [albums, setAlbums] = useState<Album[]>([])
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
      setAlbums(res.data)
    }
    getData()
  }, [])
  return (
    <> 
      <Pagination albums={albums} />
    </>
  )
}

export default App
