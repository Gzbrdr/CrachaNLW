const linksSocialMedia = {
  github: 'gzbrdr',
  youtube: '/channel/UCyAlel5JZwaL8S79APFqLMw',
  instagram: 'gabrielzbardini',
  twitter: 'gzbrdr'
}
function changeSocialMediaLinks() {
  for (let a of socialLinks.children) {
    const li = a.children[0]
    const parentLink = li.parentNode
    const socialKey = li.getAttribute('class')
    parentLink.href = `https://${socialKey}.com/${linksSocialMedia[socialKey]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      username.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userImage.src = data.avatar_url
      userImage.alt = `Foto de ${data.name}`
    })
}
getGitHubProfileInfos()
