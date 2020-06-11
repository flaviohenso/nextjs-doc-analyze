import Button from "../components/loginButton/Button"

const FormLogin = () => {
    return (
            <form className="formConroll">
                    <h2>Please enter your username and password to login.</h2>
                    <input type='text' className='inputControll' placeholder='User name'></input>
                    <input type='text' className='inputControll' placeholder='Password'></input>
                    <Button/>
            </form>
    )
}

export default FormLogin