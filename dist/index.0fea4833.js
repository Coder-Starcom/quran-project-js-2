var e=globalThis,t={},n={},a=e.parcelRequire94c2;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequire94c2=a),(0,a.register)("gFScX",function(e,t){Object.defineProperty(e.exports,"default",{get:()=>n,set:void 0,enumerable:!0,configurable:!0});var n={controller:null,init(e){this.controller=e,this.pageContent=document.getElementById("page-content"),this.surahDetails=document.getElementById("surah-details"),this.pageNumberElement=document.getElementById("page-number"),this.prevButton=document.getElementById("prev"),this.nextButton=document.getElementById("next"),this.pageInput=document.getElementById("page-input"),this.currentPage=1,this.updatePage()},async updatePage(){this.pageContent.innerHTML="Loading...",this.surahDetails.innerHTML="";let e=await QuranController.getQuranPageData(this.currentPage);this.pageContent.innerHTML=e,this.pageNumberElement.textContent=`Page ${this.currentPage}`,this.prevButton.disabled=1===this.currentPage,this.nextButton.disabled=this.currentPage===QuranModel.maxPages},displaySurahDetails(e,t,n){e&&(this.surahDetails.innerHTML=`
    <table>
    <tr><td><span>${e.englishName}</span></td><td><span>${e.englishNameTranslation}</span></td><td><span>Type:</span> ${e.revelationType}</td><td><span>Total Ayahs: </span>${e.numberOfAyahs}</td></tr>
    <tr>
    <td colspan=2><span>Juz:</span> ${t||"Unknown"}</td>
        <td colspan = 2><span>Hizb:</span> ${Math.floor(n/4)} ${n%4}/4 </td>
    </tr>
    </table>
    `)},changePage(e){this.currentPage+=e,this.updatePage()},jumpToPage(){let e=parseInt(this.pageInput.value,10);e>=1&&e<=QuranModel.maxPages?(this.currentPage=e,this.updatePage()):alert("Please enter a valid page number between 1 and 604.")}}}),a("gFScX");
//# sourceMappingURL=index.0fea4833.js.map
