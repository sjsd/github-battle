import React from 'react'

function LanguageNav ({ selected, onUpdateLanguage}) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
        <ul className='flex-center'>
            {languages.map((language) => (
                <li key={language}>
                    <button
                        className='btn-clear nav-link'
                        style={language === selected ? { color: '#0A2472' } : null}
                        onClick={() => onUpdateLanguage(language)}
                    >
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All'
        }

        this.updateLangugage = this.updateLangugage.bind(this);
    }

    updateLangugage(selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    } 

    render() {
        const { selectedLanguage } = this.state

        return (
            <React.Fragment>
                <LanguageNav 
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLangugage}
                />
            </React.Fragment>

        )
    }
}