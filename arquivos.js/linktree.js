const userName = document.getElementById('user-name');
const userImg = document.getElementById('user-img');
const linksContainer = document.querySelector('.wrap-links');

const userData = {
    name: "Seu Nome",
    imgUrl: "https://static.vecteezy.com/system/resources/previews/021/548/095/non_2x/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg",
    links: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/",
            icon: "fa-brands fa-linkedin"
        },
    ]
};

userName.textContent = "Linktree " + userData.name;
userImg.src = userData.userImg;

function renderLinks() {
    linksContainer.innerHTML = '';

    userData.links.forEach(link => {
       const linkHTML = `
            <a class="link-social" href="${link.url}" target="_blank">
                <i class="${link.icon}"></i>
                <h3>${link.name}</h3>
            </a>
        `;
         linksContainer.innerHTML += linkHTML; 
    });
}

renderLinks();
