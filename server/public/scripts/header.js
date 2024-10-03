const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'
headerLogo.className = 'logo'

const headerTitleWrapper = document.createElement('div')
const headerTitle = document.createElement('h1')
headerTitle.textContent = 'LobbyLens'

const headerDesc = document.createElement('span')
headerDesc.textContent = 'A tool to track lobbying efforts of companies.'

headerLeft.appendChild(headerLogo)
headerTitleWrapper.appendChild(headerTitle)
headerTitleWrapper.appendChild(headerDesc)
headerLeft.appendChild(headerTitleWrapper)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'



const headerButton = document.createElement('button')
headerButton.textContent = 'Home'
    
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)