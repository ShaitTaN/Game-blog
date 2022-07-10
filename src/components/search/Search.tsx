import React, { FC } from 'react'
import './search.scss'

interface Props{
	posts: []
}

const Search: FC = () => {
  const [value, setValue] = React.useState('')
  const [searchedItems, setSearchedItems] = React.useState([])
  
  // const handleSearch = (query) => {
  //   let data = [...posts]
  //   if(query.length > 1){
  //     data = data.filter(post => post.title.includes(query))
  //     setSearchedItems(data)
  //   }
  //   if(!query){
  //     setSearchedItems([])
  //   }
  // }
  
  // React.useEffect(() => {
  //   handleSearch(value)
  // }, [value])
  
  return (
    <div className="search">
      <input 
        className="search__input"
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Search..."
        />
      {/* <SearchItems searchedItems={searchedItems}/> */}
    </div>
  )
}

// const SearchItems = ({searchedItems}) => {
//   return (
//     <div className="search__items">
//       {searchedItems.map(item => <div className="search__item">
//           <img src='https://mangalib.me/uploads/cover/i-alone-level-up/cover/SiIlhsGKHZR5_thumb.jpg'/>
//           <div className="search__item-info">
//             <p>{item.title}</p>
//             <span>4.8</span>  
//           </div>
//         </div>
//        )}
//      </div>
//   )
// }

export default Search