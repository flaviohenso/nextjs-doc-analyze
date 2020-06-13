

const Menu = () => {
    const [name, setName] = React.useState('')

    const [count, setCount] = React.useState(() => {
        console.log('useState: initialState')
        return 0
    })

   /*  React.useEffect(() => {
        const segundos = setInterval(() => {
            console.log(1)
        }, 2000); */
        /* O return só é usando quando precisa limpar o useEffect, importante informar nos parametros do useEffect um array vazio []
            isso indica que o retorno só deve ser retornado quando o componente for desmontado*/
       /*  return () => clearInterval(segundos)
    },[])  */


    React.useEffect(() => {
        console.log('useEffect: Build')
    },[])

    React.useEffect(() => {
        console.log('useEffect: name')
        document.title = `${document.title} ${name}`
    },[name])

    React.useEffect(() => {
        console.log('useEffect: count')
        document.title = `${count} cliques`
    },[count]) 

    console.log('RENDER')

    return (
        <div>
            <h1>Aprendendo useState</h1>
            <div>
                {name} voçê cliclou no botão <strong>{count}</strong> vezes
            </div>
            <button onClick={() => setCount(prevState => prevState + 1)}>
                Add +
                </button>
            <button onClick={() => setName('Flavio')}>
                alter name
                </button>
        </div>
    )
}

export default Menu