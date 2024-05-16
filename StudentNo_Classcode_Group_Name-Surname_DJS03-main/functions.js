import { books, authors, genres, BOOKS_PER_PAGE } from './data.js'


//function to display the books
export const displayBooks = (listOfBooks)=>{

    const starting = document.createDocumentFragment()

for (const { author, id, image, title } of listOfBooks.slice(0, BOOKS_PER_PAGE)) {
    const element = document.createElement('button')
    element.classList = 'preview'
    element.setAttribute('data-preview', id)

    element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `

    starting.appendChild(element)
}

document.querySelector('[data-list-items]').appendChild(starting)
}


//function to create options 
export const options = (list,target,innerText) => {
    const genreHtml = document.createDocumentFragment()
    const firstGenreElement = document.createElement('option')
    firstGenreElement.value = 'any'
    firstGenreElement.innerText = innerText
    genreHtml.appendChild(firstGenreElement)
    
    for (const [id, name] of Object.entries(list)) {
        const element = document.createElement('option')
        element.value = id
        element.innerText = name
        genreHtml.appendChild(element)
    }
    
    document.querySelector(target).appendChild(genreHtml)
    }


 //function to open or close modal when eventlistener for 'click' is triggered 
export const openModal = (target)=>{
   let key = Object.keys(target)
   let value = Object.values(target)

   document.querySelector(key[0]).addEventListener('click',()=>{
         document.querySelector(value[0][0]).open = value[0][1]
       //    console.log(value[0][0])
           }
       )
}
