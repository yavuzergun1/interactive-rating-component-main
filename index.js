const submitButton= document.querySelector('.onayla');
const mainContainer= document.querySelector('.container-main');
const ratingContainer= document.querySelector('.container-rating');
const ratings= document.querySelector('.nums');

// const thankUContainer= document.querySelector('container-thankU');

ratings.addEventListener('click',ratingYaz);
let rating = undefined;

function ratingYaz(e){
    
e.preventDefault();
console.log(e.target.textContent);
return rating= e.target.textContent;
}

submitButton.addEventListener('click', thankU);

function thankU(e){
    e.preventDefault();
    if (rating){ 
    const thankU= document.createElement('div');
    thankU.className='container-thankU';
    thankU.innerHTML= `<img src="images/illustration-thank-you.svg" alt="">
    <div class="selected"> 
      <p>You selected ${rating} out of 5</p>
    </div>
    
      <h1>Thank you!</h1>
      
    
      <p> We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!
      </p>`;
    mainContainer.replaceChild(thankU, ratingContainer);
  } else{
  const warn= document.createElement('div');
  warn.className='container-warn';
  warn.innerHTML= `<img src="images/circle-exclamation-solid.svg" alt="" <i class="fa-solid fa-circle-exclamation"></i>>
  
    <h1>Please select any rating!</h1>
    
  `;
  mainContainer.replaceChild(warn, ratingContainer);

  }
}