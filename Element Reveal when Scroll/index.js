const MyObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-animation");
        }
        else{
            entry.target.classList.remove("show-animation");
        }
    });
}, {
    root: null,
    threshold: 0.3,
});


const hiddenElements = document.querySelectorAll(".animation");
hiddenElements.forEach((element)=> {
    MyObserver.observe(element)
});