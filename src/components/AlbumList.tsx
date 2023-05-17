import '../styles/AlbumList.css'
import Album from '../type'

type Props = {
  currentAlbums: Album[]
}

const AlbumList = (props: Props) => {
  const { currentAlbums } = props
  return (
    <div className='albumGridWrapper'>
      {currentAlbums.map((album) => (
        <div key={album.id} className='imgDiv'>
          <img src={album.url} />
        </div>
      ))}
    </div>
  )
}

export default AlbumList
