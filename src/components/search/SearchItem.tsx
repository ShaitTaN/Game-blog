import { FC } from "react"
import { IPost } from "../../models/IPost"

interface Props{
	searchedItems: IPost[]
} 

const SearchItems: FC<Props> = ({searchedItems}) => {
  return (
    <div className="search__items">
      {searchedItems.map(item => <div className="search__item">
          <img src={item.imageSrc}/>
          <div className="search__item-info">
            <p>{item.title}</p>
            <span>{item.data}</span>  
          </div>
        </div>
       )}
     </div>
  )
}

export default SearchItems