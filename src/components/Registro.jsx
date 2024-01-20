import Alert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";

const Registro = ({ error, setError }) => {
  return (
    <>
      <h1>Crea una cuenta</h1>
      <section className="botones">
        <SocialButton facebook={'facebookF'} />
        <SocialButton github={'github'} />
        <SocialButton linkedin={'linkedin'} />
      </section>
      <main>
        <Formulario error={error} setError={setError} />
      </main>
      <section>
        <Alert error={error} />
      </section>
    </>
  );
};

export default Registro;