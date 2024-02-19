
const navigation = [
    // document.querySelectorAll('.m-op-01'),
    // document.querySelectorAll('.m-op-02'),
    // document.querySelectorAll('.m-op-03'),
    // document.querySelectorAll('.m-op-04'),
    // document.querySelectorAll('.m-op-05')
    "home",
    "about",
    "skills",
    "exps",
    "contact"
]

function set_menu_item()
{
    navigation.forEach((item, i)=>{
        let items = document.querySelectorAll(`.m-op-0${i+1}`)
        items.forEach((el)=>{
            el.style.borderBottom = "2px solid transparent"
            el.style.color = "darkgray"
            el.style.width = "100%"
            el.style.textAlign = "left"
            if(item == window.location.href.split('#')[1])
            {
                el.style.borderBottom = "2px solid #245dcf"
                el.style.color = "#245dcf"
            }
        })
    })
}

window.addEventListener('hashchange', ()=>{
    set_menu_item()
})


window.addEventListener('scroll', ()=>{
    navigation.forEach(item => ()=>{
        console.log(window.scrollY, document.getElementById(`${item}`).offsetTop)
        if(window.scrollY >= document.getElementById(`${item}`).offsetTop)
        {
            window.location.href = `#${item}`
        }
    })
})

window.location.href = "#home"
set_menu_item()

