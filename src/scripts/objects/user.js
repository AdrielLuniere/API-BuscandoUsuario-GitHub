const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    following: '',
    followers: '',
    repositories: [],
    publicRepos: '',
    events: [],

    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.following = gitHubUser.following
        this.followers = gitHubUser.followers
        this.publicRepos = gitHubUser.public_repos

    },

    setRepositories(repositories) {
        this.repositories = repositories
    },

    setEvents(event) {
        this.events = event
    }

}
export { user } 