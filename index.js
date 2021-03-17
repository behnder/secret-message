const {
  hash
} = window.location;
const message = atob(hash.replace('#', ''));

if (message) {
  document.querySelector("#message-form").classList.add('hide')
  document.querySelector("#message-show").classList.remove('hide')

  document.querySelector('h1').innerHTML = message
}

document.querySelector("form").addEventListener('submit', (event) => {

  document.querySelector("#message-form").classList.add("hide")
  document.querySelector("#link-form").classList.remove("hide")

  event.preventDefault()
  const input = document.querySelector('#message-input')


  const encrypted = btoa(input.value);

  const shareLink = document.querySelector("#link-input");
  shareLink.value = `${window.location}#${encrypted}`
  shareLink.select();

})