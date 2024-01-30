document.getElementById('toggle').addEventListener('click',()=>{
    const manuBar = document.getElementById('manubar');
    manuBar.classList.remove('hidden');

    document.getElementById('manu-cross').addEventListener('click', ()=>{
        manuBar.classList.add('hidden');
    })
})