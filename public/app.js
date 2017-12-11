const cats = [
  {
    name: 'Garfield',
    favouriteFood: 'Lasange',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Garfield_the_Cat.svg/1200px-Garfield_the_Cat.svg.png'
  },
  {
    name: 'Pussy Galore',
    favouriteFood: 'Bombs',
    imageSrc: 'https://s-media-cache-ak0.pinimg.com/originals/08/f1/b9/08f1b93eed29deafc6dfe2d81d5e9fe8.jpg'
  }
]

const app = function () {
  for (let cat of cats) {
    addCat(cat.name, cat.favouriteFood, cat.imageSrc)
  }
}

const addCat = function (name, favouriteFood, imgSrc) {
  const list = createElement('ul', null, 'cat')
  const nameLi = createElement('li', name, 'name')
  const favFoodLi = createElement('li', favouriteFood, 'food')
  const imageLi = createElement('li')

  const img = createElement('img')
  addAttrToElement(img, 'src', imgSrc)

  appendElement(img, imageLi)
  appendElement(nameLi, list)
  appendElement(favFoodLi, list)
  appendElement(imageLi, list)

  document.querySelector('#cats').appendChild(list)
}

const createElement = function (element, text, className) {
  const elem = document.createElement(element)

  if (text) {
    elem.innerText = text
  }

  if (className) {
    elem.classList.add(className)
  }

  return elem
}

const appendElement = function (elem, parent) {
  parent.appendChild(elem)
}

const addAttrToElement = function (element, attr, value) {
  element[attr] = value
}

document.addEventListener('DOMContentLoaded', app)