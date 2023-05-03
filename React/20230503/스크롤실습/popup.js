const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.btn-close')
const article = document.querySelector('.popup')

// 첫번째 포커스 요소
const firstLi = article.querySelector('ul li:first-child a')
// 마지막 포커스 요소
const lastLi = article.querySelector('ul li:last-child a')

const options = article.querySelectorAll('li a')

const paths = document.querySelectorAll('path')

const dim = document.querySelector('.dim')

function openPopup(){
    article.classList.add('active')
    firstLi.focus()
}

function closePopup(){
    article.classList.remove('active')
}

btnOpen.addEventListener('click',openPopup)
btnClose.addEventListener('click',closePopup)

btnClose.addEventListener('keydown',function(e){
    // tab만 눌렀을때 (shift+tab일땐 실행 안됨)
    if((!e.shiftKey) && e.key === 'Tab'){
        e.preventDefault() // 원래 기본 동작을 막음
        firstLi.focus()
    }
    if(e.key==='ArrowDown'){
        firstLi.focus()
    }
    if(e.key==='ArrowUp'){
        lastLi.focus()
    }
})

firstLi.addEventListener('keydown',function(e) {
    // shift+tab일땐 실행 됨
    if(e.shiftKey && e.key === 'Tab'){
        e.preventDefault()
        btnClose.focus()
    }
})

dim.addEventListener('click',closePopup)
document.addEventListener('keydown',function(e){
    if(article.classList.contains('active') && e.key==='Escape'){
        closePopup()
    }
})

options.forEach((e,i)=>{
    e.addEventListener('keydown',function(event){
        if(event.key==='ArrowDown'){
            if(i!==options.length-1){
                e.parentElement.nextElementSibling.querySelector('a').focus()
            }
            else{
                btnClose.focus()
            }
        }
        if(event.key==='ArrowUp'){
            if(i!==0){
                e.parentElement.previousElementSibling.querySelector('a').focus()
            }
            else{
                btnClose.focus()
            }
        }
        if(event.key==='Enter'){
            idx = findidx()
            if(idx !== i){
                if(idx !== null){
                    paths[idx].style.display=''
                }
                paths[i].style.display='block'
            }    
            closePopup()   
        }
    })
    e.addEventListener('click',function(event){
        idx = findidx()
        if(idx !== i){
            if(idx !== null){
                paths[idx].style.display=''
            }
            paths[i].style.display='block'
        }
        closePopup()
    })
})
function findidx(){
    idx = null
    for(let i = 0;i<paths.length;i++){
        if(paths[i].style.display==='block'){
            idx=i;
        }
    }
    return idx;
}


// 접근성
// 키보드 접근성 
// esc
// 키보드로 이동
// 닫기에서 탭 눌렀을 때 첫번째 메뉴로 이동하게
// 첫번째 메뉴에서 쉬프트탭을 눌렀을 때 닫기
// 모달 외를 클릭했을 때 메뉴 닫기

