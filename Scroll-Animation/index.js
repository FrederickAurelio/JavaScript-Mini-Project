const MyObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-animation");
        }
        else{
            entry.target.classList.remove("show-animation");
        }
    });
});




const hiddenElements = document.querySelectorAll(".animation");
hiddenElements.forEach((element)=> {
    MyObserver.observe(element)
});