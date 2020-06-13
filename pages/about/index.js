class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'status',
            loading: false
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ loading: true })}>Add class</button>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

const About1 = () => {

    const [state, setState] = React.useState(() => ({
        total: 2,
        langs: ['python', 'java']
    }))

    const addLenag = () => setTimeout(() => {
        setState((prevState) => ({
            total: prevState.langs.length + 1,
            langs: [...prevState.langs, 'js']
        }))
    }, 2000)

    return (
        <div>
            <button onClick={addLenag}>Add About1</button>
            <button onClick={() => setState({ total: 0, langs: [] })}>Clear</button>
            {JSON.stringify(state)}
        </div>
    )
}

const About = () => {

    const [estado, setEstado] = React.useState({ estado: 'hello', loading: false })

    console.log(estado)

    return (
        <div>
            <button onClick={() => setEstado({
                ...estado,
                loading: true
            })}>Add</button>
            {JSON.stringify(estado)}
            <ClassState />
            <About1 />
        </div>
    )
}

export default About