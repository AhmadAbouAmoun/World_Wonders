const section = document.querySelector("section");
let i = 0;
const world_wonders = async () => {
    try {
        const response = await fetch("https://www.world-wonders-api.org/v0/wonders");
        const data = await response.json();

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
                localStorage.setItem("value", value);
                window.location.href = "details.html";
            });
        });
    }
};
world_wonders();
