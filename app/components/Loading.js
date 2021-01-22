import React from 'react'
import PropTypes from 'prop-types'

const styles = {
	content: {
		fontSize: '35px',
		textAlign: 'center',
		margin: '20px auto'
	}
}

export default class Loading extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			content: props.text
		}
	}

	componentDidMount() {
		const { speed, text } = this.props

		this.interval = window.setInterval(() => {
			this.state.content === text + '...'
				? this.setState({ content: text })
				: this.setState(( { content } ) => ({
					content: content + '.'
				}))
		}, speed)
	}

	componentWillUnmount() {
		window.clearInterval(this.interval)
	}

	render() {
		return (
			<p style={styles.content}>
				{this.state.content}
			</p>
		)
	}
}

Loading.propTypes = {
	speed: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired
}

Loading.defaultProps = {
	text: 'Loading',
	speed: 300
}
