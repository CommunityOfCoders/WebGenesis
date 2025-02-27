const MenuBtn = document.querySelector('.menu-btn')
const CloseBtn = document.querySelector('.cls-btn')
const SideBar = document.querySelector('.sidebar')
const OutSide = document.querySelector('.outside')
const SubMenu = document.querySelector('.submenu')
const Dropdown = document.querySelector('.dropdown')

MenuBtn.addEventListener('click',()=>{
    SideBar.classList.add('active')
})

CloseBtn.addEventListener('click',()=>{
    SideBar.classList.remove('active')
    SubMenu.style.display = 'none'
})

OutSide.addEventListener('click',()=>{
    SideBar.classList.remove('active')
    SubMenu.style.display = 'none'
})

Dropdown.addEventListener('click', () => {
    SubMenu.style.display = SubMenu.style.display === 'block' ? 'none' : 'block';
});