
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
            el.style.fontWeight = "normal"
            if(item == window.location.href.split('#')[1])
            {
                let color = "#0b48a3b7"
                if(document.body.getAttribute('class') == 'dark') color = "#5984c4b7"
                el.style.borderBottom = "3px solid " + color
                el.style.color = color
                el.style.fontWeight = "bold"
                document.getElementsByTagName('title')[0].innerHTML = `Mike D. Pascal - ${el.children[0].innerHTML}`
            }
        })
    })
}

window.addEventListener('hashchange', ()=>{
    set_menu_item()
})

// window.addEventListener('scroll', ()=>{
//     navigation.forEach(item => {
//         if(window.scrollY >= document.getElementById(`${item}`).offsetTop && window.scrollY <= (document.getElementById(`${item}`).offsetTop + document.getElementById(`${item}`).offsetHeight))
//         {
//             if(window.location.href.split('#')[1] != item)
//             {
//                 window.history.pushState(0, 0, `#${item}`)
//                 document.getElementById(`${item}`).style.animation = 'teste 2s linear infinite'
//                 setTimeout(()=>{
//                     document.getElementById(`${item}`).style.animation = 'none'
//                 }, 2000)
//                 set_menu_item()
//             }
//         }
//     })
// })

document.querySelectorAll('.toggle-theme-btn').forEach(el => {
    el.addEventListener('click', ()=>{
        set_menu_item()
    })
})

window.history.pushState(0, 0, "#home")
set_menu_item()

