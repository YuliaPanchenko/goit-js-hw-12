import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import getImages from "./js/pixabay-api"
import renderImages from "./js/render-functions"


const form = document.querySelector(".gallery-form");
const btnElem= document.querySelector(".btn");
const list = document.querySelector(".gallery");
const loader = document.querySelector(".js-loader");
const btnLoadMore = document.querySelector(".load-more")

let inputValue = "";
let currentPage = 1;
let maxPage = 1;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

form.addEventListener("submit", async (e)=> {
  e.preventDefault();
  inputValue = e.target.elements.text.value.trim();
  console.log(inputValue);
  currentPage = 1;
  if (inputValue === ""){
    iziToast.error({
      message: 'Please enter a search query!',
    });
    return;
  }
  hideLoadBtn();
  showLoader();
  try {
    const data = await getImages(inputValue, currentPage)
    if (data.hits.length === 0) {
      list.innerHTML = '';
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoader();
      return;
    }
    maxPage = Math.ceil(data.totalHits / 15);
    const markup = renderImages(data.hits);
    list.innerHTML = markup;
    updateBtnStatus();

    lightbox.refresh();
  } catch {
    iziToast.error({
    title: 'Error',
    message: 'Catch error',
    });
  }
    hideLoader();

    e.target.elements.text.value = "";
});

btnLoadMore.addEventListener("click", async (e)=> {
  currentPage++;
  showLoader();
  try{
    const data = await getImages(inputValue, currentPage)
    const markup = renderImages(data.hits);
    list.insertAdjacentHTML("beforeend", markup);
    updateBtnStatus();
    lightbox.refresh();
    skipOldElements();
  } catch {
    iziToast.error({
    title: 'Error',
    message: 'Catch error',
    });
  }
  hideLoader();
});

function updateBtnStatus() {
  if(currentPage >= maxPage){
    hideLoadBtn();
    iziToast.info({
    message: 'We are sorry, but you have reached the end of search results.',
  });
  } else {
    showLoadBtn();
  }
}

function showLoader(){
  loader.classList.remove("hidden");
}

function hideLoader(){
  loader.classList.add("hidden")
}

function showLoadBtn(){
  btnLoadMore.classList.remove("hidden");
}

function hideLoadBtn(){
  btnLoadMore.classList.add("hidden")
}

function skipOldElements(){
  const liElem = list.children[0];
  if (liElem) {
    const height = liElem.getBoundingClientRect().height;
    window.scrollBy({
      top: height * 2,
      behavior: "smooth",
    });
  }
}