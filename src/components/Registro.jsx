import Alert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = ({ error, setError }) => {
  return (
    <main className="registro">
      <h1>Crea una cuenta</h1>
      <section className="botones mt-3">
        <SocialButton facebook={'facebookF'} />
        <SocialButton github={'github'} />
        <SocialButton linkedin={'linkedin'} />
      </section>
      <p className="mt-3">O usa un correo para registrarte</p>
      
        <Formulario error={error} setError={setError} />
      
      <section>
        <Alert error={error} setError={setError} />
      </section>
      </main>
  );
};

export default Registro;