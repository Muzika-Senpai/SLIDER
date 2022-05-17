

let slider = document.querySelector(".picture-container");
let images = document.querySelectorAll(".picture");

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

let current = 0;

console.log(images.length);


function makeSelectors(){

    console.log("The makeSelector function is launched");

        let selector = document.createElement("div");
        document.querySelector(".slide-nav").appendChild(selector);
        selector.classList.add("selector");
        selector.classList.add("selected");
        selector.addEventListener("click", showImage);

        console.log("first Selector is created");    

        const selectors = [selector];

        console.log("current length of selectors is " + selectors.length);

    for( i = 1 ; i <= images.length -1; i++){

        let selector = document.createElement("div");
        document.querySelector(".slide-nav").appendChild(selector);
        selector.classList.add("selector");
        selector.addEventListener("click", showImage);
        selectors.push(selector);

        console.log("current length of selectors is " + selectors.length);

    }

    function showImage(event){

        console.log("Selector has been clicked");

        let imageWidth = images[current].offsetWidth; 

        for ( i = 0 ; i <= selectors.length -1; i++ ){
            
            selectors[i].classList.remove("selected");
            // images[i].classList.add("hidden");
            
        }
        
        event.target.classList.add("selected");

        for( i = 0 ; i <= selectors.length -1; i++ ){

            if(selectors[i].classList.contains("selected")){

            // images[i].classList.remove("hidden");

                current = i;

                currentImageWidth = ((current + 1)*imageWidth)-imageWidth;

                slider.style.transform="translatex(-"+currentImageWidth+"px)";


            }

        }
        
    }

    
}

function prevImage(){

    console.log("previous button was clicked");

    let selector = document.querySelectorAll(".selector");
    let imageWidth = images[current].offsetWidth; 
    
    console.log( "current width of the image is" + " " + imageWidth + "px" );


    for( i = 0 ; i < selector.length; i++ ){

        if( selector[i].classList.contains("selected")){

            current = i;

        }

    }

    // images[current].classList.add("hidden");
    selector[current].classList.remove("selected");

    current --; 

    if( current < 0 ){


        console.log("condition 1 is triggered")
        current = images.length - 1;

        console.log(images[current]);


    }else if( current >= images.length){

        console.log("condition 2 is triggered")
        current = 0;

        currentImageWidth = (current*imageWidth)-imageWidth;

        slider.style.transform="translatex(-"+currentImageWidth+"px)";

        // images[current].classList.add("hidden");

        // console.log(images[current]);

    }

    // images[current].classList.remove("hidden");

    currentImageWidth = (current*imageWidth);

    slider.style.transform="translatex(-"+currentImageWidth+"px)";
    
    selector[current].classList.add("selected");

}

function nextImage(){

    console.log("Next button was clicked");

    let selector = document.querySelectorAll(".selector");

    let imageWidth = images[current].offsetWidth;



    for( i = 0 ; i < selector.length; i++ ){

        if( selector[i].classList.contains("selected")){

            current = i;

        }

    }


    currentImageWidth = (current +1)*imageWidth;

    console.log(currentImageWidth);

    slider.style.transform="translatex(-"+currentImageWidth+"px)";
    

    selector[current].classList.remove("selected");

    
    // images[current].classList.add("hidden");
    // images[current].classList.remove("show");

    current ++;

        console.log(images[current]);

        if( current >= images.length){

            current = 0;

            // images[current].classList.add("hidden");
            // images[current].classList.remove("show");

            currentImageWidth = (current)*imageWidth;

            console.log(currentImageWidth);
 
            slider.style.transform="translatex(-"+currentImageWidth+"px)";

            console.log(images[current]);

        }

    // images[current].classList.remove("hidden"); 
    // images[current].classList.add("show");  
    selector[current].classList.add("selected");

}

function autoSlide(){

    console.log("AutoSlide function is launched");    

    setInterval(nextImage, 5000);

} 

document.addEventListener('keydown', function(e) {
    
    switch (e.keyCode) {

        case 37:
            prevImage();
            break;

        case 39:
            nextImage();
            break;

    }

});

//autoSlide();
makeSelectors();
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

