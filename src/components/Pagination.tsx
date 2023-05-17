import { useState } from 'react'
import '../styles/Pagination.css'
import Album from '../type'
import AlbumList from './AlbumList'
import ReactPaginate from 'react-paginate'

type Props = {
  albums: Album[]
}

const Pagination = (props: Props) => {
  const { albums } = props

  const itemsPerPage = 6
  const [itemsOffSet, setItemsOffSet] = useState(0)
  const endOffset = itemsOffSet + itemsPerPage
  const currentAlbums = albums.slice(itemsOffSet, endOffset)
  const pageCount = Math.ceil(albums.length / itemsPerPage)
  const handlePageClick = (e: { selected: number }) => {
    const newOffset = e.selected * itemsPerPage % albums.length
    setItemsOffSet(newOffset)
  }
  return (
    <div className='albumWrapper'>
      <AlbumList currentAlbums={currentAlbums} />
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        nextLabel="next >"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination
