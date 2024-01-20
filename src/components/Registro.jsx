import Alert from "./Alert"
import Formulario from "./Formulario"
import SocialButton from "./SocialButton"



const Registro = ({ error, setError }) => {
    return (
        <>
            <h1>Crea tu cuenta</h1>
            <main className="botones">
                <SocialButton facebook={'facebookF'} />
                <SocialButton github={'github'} />
                <SocialButton linkedin={'linkedin'} />
            </main>
            {/*  error={error}
            setError={setError} */}
            <section>
                <Alert /> {/*pasar por prop el error */}
            </section>
        </>
    )
}

export default Registro