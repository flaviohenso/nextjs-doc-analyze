
const Pedidos = ({ orders }) => {
    console.log(orders)
    return (
        <div>
            <p>Pedidos</p>
            <table>
                <thead>
                    <tr>
                        <th>dados 1</th>
                        <th>dados 1</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <th>{order.title}</th>
                            <th>{order.imagen_url}</th>
                        </tr>
                    ))}
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>
    )
}

//This gets called on every request
export async function getServerSideProps() {
    //Fetch data from external API
    const response = await fetch('http://192.168.100.154:3333/itens')
    const orders = await response.json()

    console.log(orders)

    //Pass data to the page via props
    return {
        props: {
            orders,
        },
    }
}

export default Pedidos