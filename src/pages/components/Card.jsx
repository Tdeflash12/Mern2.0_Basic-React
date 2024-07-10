import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

 const Card = ({ book }) => {
 
  return (


    <div class="max-w-sm rounded overflow-hidden shadow-lg my-20" key={book._id}>
      <img class="w-full" src={book.imageUrl ? book.imageUrl : "data:image/jpeg;base64,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"} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{book.bookName}</div>
        <p class="text-gray-700 text-base">
          Rs.{book.bookPrice}
        </p>
        <p class="text-black-700 text-base">
          {book.isbrNumber}
        </p>
<Link to={`/book/${book._id}`}> See More</Link>
      </div>
    </div>




  )
}
export default Card
