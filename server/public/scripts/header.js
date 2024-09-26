const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'
headerLogo.className = 'logo'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'LobbyLens'

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerDesc = document.createElement('p')
headerDesc.textContent = 'Uncover the truth behind corporate influence—explore company ethics and lobbying at a glance'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
    
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
headerContainer.appendChild(headerDesc)

header.appendChild(headerContainer)