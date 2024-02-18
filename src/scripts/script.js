
const navigation = [
    document.querySelectorAll('.m-op-01'),
    document.querySelectorAll('.m-op-02'),
    document.querySelectorAll('.m-op-03'),
    document.querySelectorAll('.m-op-04'),
    document.querySelectorAll('.m-op-05')
]

navigation.forEach((els, i)=>{
    els.forEach((el)=>{
        el.addEventListener('click', ()=>{
            select(i)
        })
    })
})

function select(i_)
{
    navigation.forEach((els, i)=>{
        els.forEach((el)=>{
            el.setAttribute('class', 'm-op-01 border-transparent text-gray-600 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium')
            if(i_ == i)
            {
                document.getElementsByTagName('title')[0].innerHTML = `Mike D. Pascal - ${el.children[0].innerHTML}`
                el.setAttribute('class', 'm-op-01 border-indigo-600 text-indigo-600 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium')
            }
        })
    })
}

select(0)
