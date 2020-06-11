import Link from 'next/link'


import Login from './login'
import Logo from './components/logo/Logo'

const HomePage = () => {
    return (
        <div className='container'>
            <div className='imageLogin'>
                <Logo />
                <span>Owners</span>
                <strong>Questionnaire</strong>
                <div class="copirith">
                    <p>© 2018 Do Up English.</p><p> Todos os direitos reservados a Do Up English</p>
                </div>
            </div>
            <div className="contentLogin">
                <Login />
                <div className='forgotLogin'>
                    <Link href="/pedidos">
                        <a>Forgot your login?</a>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HomePage