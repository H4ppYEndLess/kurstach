const filterBox = document.querySelectorAll(".hero-card");
const buttons = document.querySelectorAll('.f')

document.querySelector('.nav').addEventListener('click', event => {
    if (!event.target.classList.contains('f')){
        return
    }
    
    let filterClass = event.target.dataset.f;

    buttons.forEach(elem=>{
        if(elem.classList.contains('nav__filter_active')){
        elem.classList.remove('nav__filter_active')
    }
    });
    event.target.classList.toggle('nav__filter_active');

    filterBox.forEach(elem=>{
        elem.classList.remove('off')
        if(!elem.classList.contains(filterClass) && filterClass !== 'all'){
            elem.classList.add('off')   
        }
        
    });
});