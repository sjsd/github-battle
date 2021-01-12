import React from 'react'

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
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

        return (
            <ul className='flex-center'>
                {languages.map((language) => (
                    <li key={language}>
                        <button
                            className='btn-clear nav-link'
                            style={language === this.state.selectedLanguage ? { color: '#0A2472' } : null}
                            onClick={() => this.updateLangugage(language)}
                        >
                            {language}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}