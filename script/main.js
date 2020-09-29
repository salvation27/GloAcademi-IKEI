// 'use strict'

const btnBurger = document.querySelector('.btn-burger')
const catalog = document.querySelector('.catalog')
const catalogClose = document.querySelector('.btn-close')
// const overlay = document.querySelector('.overlay')
const catalogList = document.querySelector('.catalog-list')
const subCatalog = document.querySelector('.subcatalog')
const btnReturn = document.querySelector('.btn-return')
const subCatalogHeader = document.querySelector('.subcatalog-header')

const overlay = document.createElement('div')
overlay.classList.add('overlay')
document.body.insertAdjacentElement('beforeend',overlay)

// открытие меню
const openMenu  = () =>{
  catalog.classList.add('open')
  overlay.classList.add('active')
}
btnBurger.addEventListener('click',openMenu)

// закрытие меню

const closeMenu  = () =>{
  catalog.classList.remove('open')
  overlay.classList.remove('active')
  returnSub()
}

catalogClose.addEventListener('click',closeMenu)


const overlayClose= () => {
  catalog.classList.remove('open')
  overlay.classList.remove('active')
  returnSub()
}

overlay.addEventListener('click',overlayClose)


// =======================

// делегирование

const openSubMenu = (e) => {
    const target = e.target
    e.preventDefault()
    const itemList = target.closest('.catalog-list__item')
    if(itemList){
      subCatalog.classList.add('subopen')
      subCatalogHeader.innerHTML = itemList.innerHTML 
    }
  }


catalogList.addEventListener('click',openSubMenu)

const returnSub = () => {
  subCatalog.classList.remove('subopen')
}

btnReturn.addEventListener('click',returnSub)