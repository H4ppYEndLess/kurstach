const filterBox = document.querySelectorAll(".wallpapers");
const buttons = document.querySelectorAll(".boob")

document.querySelector('[filtered]').addEventListener('click', event => {
    if (!event.target.classList.contains('boob')){
        return
    }

    let filterClass = event.target.dataset.f;
    buttons.forEach(elem=>{
        elem.classList.add('disabled')
    })
    event.target.classList.toggle('disabled')

    filterBox.forEach(elem=>{
        elem.classList.remove('off')
        if(!elem.classList.contains(filterClass)){
            elem.classList.add('off')   
        }
        
    });
});