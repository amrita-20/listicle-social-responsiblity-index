const renderCompaniesData = async () => {
    const response = await fetch('/company');
    const data = await response.json();
    const mainContent = document.getElementById('main-content')
    const cardContent = document.getElementById('card-content')
    if(data){
        data.map(company => {
            const card = document.createElement('div')
            card.classList.add('card')
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            topContainer.style.backgroundImage = `url(${company.logo_url})`
            const name = document.createElement('h3')
            name.textContent = company.company_name
            bottomContainer.appendChild(name)
            const missionStatement = document.createElement('p')
            missionStatement.textContent = 'Industry: ' + company.mission_statement
            bottomContainer.appendChild(missionStatement)
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/company/${company.id}`
            bottomContainer.appendChild(link)
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            cardContent.appendChild(card)
        })
    }else{
        const message = document.createElement('h2')
        message.textContent = 'No Companies Available 😞'
        cardContent.appendChild(message)
    }
}
const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../error.html'
}
else {
    renderCompaniesData()
}
