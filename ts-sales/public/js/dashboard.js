
if (typeof window !== 'undefined') {

  const btn = document.querySelector('.mobile-menu-button')
const sidebar = document.querySelector('.sidebar')

btn.addEventListener('click', () => {
  sidebar.classList.toggle("-translate-x-full")
})

} else {
  console.log(typeof window)
}
