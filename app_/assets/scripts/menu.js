
const navigation = [
    // document.querySelectorAll('.m-op-01'),
    // document.querySelectorAll('.m-op-02'),
    // document.querySelectorAll('.m-op-03'),
    // document.querySelectorAll('.m-op-04'),
    // document.querySelectorAll('.m-op-05'),
    // document.querySelectorAll('.m-op-06')
    "home",
    "about",
    "skills",
    "experience",
    "contact",
    "dashboard"
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
            const location = window.location.href.split('/')
            location.forEach(slice =>{
                if(slice == item)
                {
                    let color = "#0b48a3b7"
                    if(document.body.getAttribute('class') == 'dark') color = "#5984c4b7"
                    el.style.borderBottom = "3px solid " + color
                    el.style.color = color
                    el.style.fontWeight = "bold"
                }
            })
        })
    })
}

window.addEventListener('hashchange', ()=>{
    set_menu_item()
})

set_menu_item()

