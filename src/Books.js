import React from 'react';

const Books = (props) => {

    const { book } = props;

    return(
        <li>
            <div className="book">
                <div className="book-top">
                    { (book.imageLinks && book.imageLinks.thumbnail) ?
                        (<div className="book-cover"
                            style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                        </div>) :

                        (<div className="book-cover"
                            style={{ width: 128, height: 192, backgroundColor: 'black' }}>
                        </div>)

                    }
                    <div className="book-shelf-changer">
                        <select name={book.id}  value={book.shelf} onChange={(e) => props.changeShelf(book, e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}
                </div>
                    { book.authors && ( <div className="book-authors">{book.authors.join()}</div>)}
            </div>
        </li>
    )
}

export default Books;