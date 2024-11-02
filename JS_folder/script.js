const section = document.querySelector("section");
let i = 0;
const world_wonders = async () => {
    try {
        const response = await fetch("https://www.world-wonders-api.org/v0/wonders");
        const data = await response.json();

        console.log(data);
        data.forEach((element) => {
            section.innerHTML += ` <div class="book">
        <div class="details">
        <p>name:${element.name}</p>
        <button value=${i} class="btn">More Info</button>
        </div>
    <div class="cover">
          <img src=${element.links.images[0]} alt="" />
    </div>
    <div></div>`;
            i++;
        });
    } catch (e) {
        console.error(e);
    } finally {
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const value = button.value;
                console.log(value);
            });
        });
    }
};
world_wonders();

function ShareData() {
    var user_name = document.getElementById("username").value;
    var option = document.getElementById("Character").value;
    if (user_name) {
        localStorage.setItem("username", user_name);
        localStorage.setItem("character", option);
        window.location.href = "Game.html";
    } else alert("Please first enter a user name");
}
