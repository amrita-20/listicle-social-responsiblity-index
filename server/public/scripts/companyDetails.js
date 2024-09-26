

const renderCompanyData = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/company');
    const data = await response.json()
    const giftContent = document.getElementById('company-content')

    let companyData = data.find(company => company.id === requestedID)

    if (companyData) {
        document.getElementById('image').src = companyData.logo_url
        document.getElementById('name').textContent = companyData.company_name
        document.getElementById('moneySpent').textContent = 'Money spend lobbying: ' + companyData.usd_spend_lobbying_2021
        document.getElementById('description').textContent = companyData.mission_statement
        document.title = `Social Responsiblity Index - ${companyData.company_name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Data Available 😞'
        giftContent.appendChild(message)
    }
}

renderCompanyData();