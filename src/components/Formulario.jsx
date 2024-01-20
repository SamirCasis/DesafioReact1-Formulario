import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = () => {

    const [data, setData] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const validarDatos = (e) => {
        e.preventDefault();

        const { nombre, email, password, confirmPassword } = data
        const validacionDatos = !nombre || !email || !password || !confirmPassword
        const validarPassword = password !== confirmPassword

        validacionDatos ?
            setError({
                error: true,
                msg: 'completa todos los campos',
                color: 'danger',
            }) :
            setError({
                error: false,
                msg: 'cuenta validada!',
                color: 'success',
            });

        if (validarPassword) {
            setError({
                error: true,
                msg: 'Las contraseñas no coinciden',
                color: 'danger'
            })
        }
        return
    }



    setData({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }


    return (
        <>
            <Form
                className="formulario"
                onSubmit={(e) => validarDatos(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Formulario
