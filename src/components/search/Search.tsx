import React, { FC } from 'react'
import { IPost } from '../../models/IPost'
import { useGetPostsQuery } from '../../store/posts/posts.api'
import './search.scss'
import SearchItems from './SearchItem'


const Search: FC = () => {
  const [value, setValue] = React.useState('')
  const [searchedItems, setSearchedItems] = React.useState<IPost[]>([])
  const {data,isLoading,isError} = useGetPostsQuery()

  const handleSearch = (query:string) => {
    if(query.length > 1 && data){
      const result = data.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
      setSearchedItems(result)
    }
    if(!query){
      setSearchedItems([])
    }
  }
  
  React.useEffect(() => {
    handleSearch(value)
  }, [value])
  
  return (
    <div className="search">
      <input 
        className="search__input"
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Search..."
        />
      <SearchItems searchedItems={searchedItems}/>
    </div>
  )
}



export default Search