const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =    `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                                <div class="data">
                                                    <h1>${user.name ?? 'Não possui nome cadastrado 😢'}<h1>
                                                    <p>${user.bio ?? 'Não possui bio cadastrado 😢'} </p>
                                                </div>
                                        </div>
                                            <div class="follow">
                                                <p class="followers">
                                                👥Seguidores: ${user.followers}
                                                </p>
                                                <p class="following">
                                                🤜🤛 Seguindo: ${user.following}
                                                </p>
                                            </div>`
        if (user.repositories.length > 0) {
            let repositoriesItens = ''
            user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a>

                                    <ul>
                                        <li class="list icons">🍴${repo.forks}</li>
                                        <li class="list icons">⭐${repo.stargazers_count}</li>
                                        <li class="list icons">👀${repo.watchers}</li>
                                        <li class="list icons">💻${repo.language ??' - '}</li>
                                    </ul>
                                    </li>`)

            this.userProfile.innerHTML += `<div class="repositories  section">
                                                <h2> Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItem = ''
            user.events.forEach (event => eventsItem +=
             ` <li class="list"> 
                   <h3 class="events">${event.repo.name}</h3><h3 class="events-message"> - ${event.payload.description ?? ' Não possui descrição 😢' }</h3>
                </li>
               `
               )
    
            if(user.events.length > 0){
                this.userProfile.innerHTML +=
                                                `<div >
                                                <h2>Últimos Eventos</h2>
                                                <ul>${eventsItem}</ul>
                                                </div>`
            }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }