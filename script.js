document.getElementById('block').addEventListener('click', function(event){
    let target = event.target;
    if (target.className == 'block'){
        let s = document.getElementsByClassName('coll');
        closeColl();
        s[0].style.display = 'block';
    }
})

document.querySelector('.hide').addEventListener('click', function(event){
    let target = event.target;
    if(target.className != 'block' && target.className != 'coll'){
        closeColl();
    }
})

function closeColl(){
    let coll = document.getElementsByClassName('coll');
    for(let i = 0; i < coll.length; i++){
        coll[i].style.display = 'none';
    }
}