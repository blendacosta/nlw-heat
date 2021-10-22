// with 'github' all user information is taken; for the social network links replace in the object below

const linksSocialMedia = {
  github: 'blendacosta',
  youtube: '',
  instagram: '',
  facebook: '',
  twitter: ''
};

const changeSocialMediaLinks = () => {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
};

changeSocialMediaLinks();

const getGitHubProfileInfos = () => {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
      document.title = `${data.name} - DoWhile 2021`
    });
};

getGitHubProfileInfos();
