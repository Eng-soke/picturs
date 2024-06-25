const imageSlider = document.querySelector("#image1")
const nextElement   = document.querySelector("#next")
const prevElement   = document.querySelector("#prev")
const number = document.querySelector("#number")
const Dhamaad = document.querySelector("#dhama")

const images = [
    "https://images.pexels.com/photos/2564889/pexels-photo-2564889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/615277/pexels-photo-615277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6054897/pexels-photo-6054897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9172444/pexels-photo-9172444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/302276/pexels-photo-302276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

]



let indexNumber = 0
imageSlider.src = images[indexNumber]
nextElement.addEventListener("click", ()=>{
    if(indexNumber <= images.length -1){
        
        
        imageSlider.src = images[indexNumber]
        indexNumber++
        number.innerHTML = indexNumber
    }

    if(indexNumber == images.length - 0){
        Dhamaad.innerHTML= "Dhamaad"
      
    
    }
    
})



prevElement.addEventListener("click", ()=>{
    if(indexNumber >0){
        indexNumber --
        imageSlider.src= images[indexNumber]
        number.innerHTML--
    }
    if(indexNumber == images.length - 1){
        Dhamaad.innerHTML= ""
      
    
    }
  
})

