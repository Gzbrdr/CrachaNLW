const linksSocialMedia = {
  github: 'gzbrdr',
  youtube: '/channel/UCyAlel5JZwaL8S79APFqLMw',
  instagram: 'gabrielzbardini',
  twitter: 'gzbrdr'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    console.log(li.children)

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
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
    })
}
getGitHubProfileInfos()
