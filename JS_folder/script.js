const section = document.querySelector("section");
const world_wonders = async () => {
    const response = await fetch("https://www.world-wonders-api.org/v0/wonders");
    const data = await response.json();
    console.log(data);
    data.forEach((element) => {
        section.innerHTML += `<div class="card">
        <div >
          <a href=${element.links.images[0]}><img src=${element.links.images[0]} alt="" /></a>
        </div>
        <div class="divider"></div>
        <div class="details">
        <p>name:${element.name}</p>
        <p>summary:${element.summary}</p>
        <a href=${element.links.google_maps}>Location on Map</a>
        </div>
        
    </div> `;
    });
};
world_wonders();
