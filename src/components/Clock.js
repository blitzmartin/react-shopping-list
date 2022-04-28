class Clock extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            date: new Date().toLocaleTimeString
        }
    }

    render () {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString}.</h2>
            </div>
        )
    }
}