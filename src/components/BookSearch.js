import React, {useState} from "react";

  const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "language": "English",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "language": "Italian",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },

]

const BookSearch = () => {
const [filters, setFilters] = useState({
      author:"",
      country:"",
      pages:"",
      title:"",
      year:""
    })
 
  
const handleChange = (e) => {
  const {name, value} = e.target;
  setFilters((prev)=>({...prev, [name]:value}))
}

const FilteredBooks = books.filter((book) =>{
  return Object.keys(filters).every((key) => filters[key]?book[key].toString().toLowerCase().includes(filters[key].toLowerCase()) : true )
} )

  return (
    <>
      <h1>Book Search</h1>
      <form>
      <input 
        data-testid="author"
        type="text" 
        name="author" 
        placeholder="author"
        value={filters.author}
        onChange={handleChange}
        />
         <input 
        data-testid="title"  
        type="text" 
        name="title" 
        placeholder="title"
        value={filters.title}
        onChange={handleChange}
        />
         <input
        data-testid="country"
        type="text" 
        name="country" 
        placeholder="country"
        value={filters.country}
        onChange={handleChange}XW
        />
         <input
         data-testid="language"
        type="text" 
        name="language" 
        placeholder="language"
        value={filters.language}
        onChange={handleChange}
        />
            <input
        data-testid="year"
        type="text" 
        name="year" 
        placeholder="year"
        value={filters.year}
        onChange={handleChange}
        />
      
      </form>
      <div>
        <h2>Search Results </h2>
      </div>
      {FilteredBooks.map((book,index)=>{
        return(
          <div key={index} style={{border:"1px solid #ccc", margin:"10px", padding:"10px"}}>
            <p><strong>Title :</strong>{book.title} </p>
            <p><strong>Author :</strong>{book.author} </p>
            <p><strong>Country :</strong>{book.country} </p>
            <p><strong>Language :</strong>{book.language} </p>
            <p><strong>Year :</strong>{book.year} </p>
            <p><strong>Pages :</strong>{book.pages} </p>
            
            </div>
        )
      })}



    </>
  );
};

export default BookSearch;