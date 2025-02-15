document.addEventListener("DOMContentLoaded", ()=>{
    QuranView.init();
    document.getElementById("prev").addEventListener("click", ()=>QuranView.changePage(-1));
    document.getElementById("next").addEventListener("click", ()=>QuranView.changePage(1));
    document.getElementById("jump-btn").addEventListener("click", ()=>QuranView.jumpToPage());
});

//# sourceMappingURL=index.1c974c2f.js.map
