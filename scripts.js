let likes = 0;
const buttonLike = document.getElementById("button-like");

buttonLike.addEventListener("click", handleClick);

function handleClick() {
    likes += 1;
    buttonLike.textContent = `Like (${likes})`;
}