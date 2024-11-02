const value = localStorage.getItem("value");
const section = document.querySelector("section");

const display_data = async () => {
    try {
        const response = await fetch("https://www.world-wonders-api.org/v0/wonders");
        const data = await response.json();
        const world_wonder = data[value];
        section.style.backgroundImage = `url(${world_wonder.links.images[1]})`;

        section.innerHTML = `<div class="center">${world_wonder.name}</div>
        <p>Summary:${world_wonder.summary}</p>
        <p><a href=${world_wonder.links.google_maps}>Location On Google Maps</a></p>
        <p>for more info related to ${world_wonder.name} <a href=${world_wonder.links.wiki}>Click Here</a></p>
        `;

        console.log(world_wonder);
    } catch (e) {
        console.log(e);
    }
};
display_data();
