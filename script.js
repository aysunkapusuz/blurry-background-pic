const loadNum = document.querySelector('.loading_num')
const main = document.querySelector('.main_section')
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num -in_min)*(out_max-out_min)/ (in_max-in_min) + out_min;
}

let loading = 0
let int = setInterval(blurring, 30)


function blurring(){
    loading++

    if(loading>99){
        clearInterval(int)
    }


    loadNum.innerText = `${loading}%`
    loadNum.style.opacity = scale(loading, 0, 100, 1, 0)
    main.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`

}

