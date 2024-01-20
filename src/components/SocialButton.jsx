import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton = ({ facebook, github, linkedin }) => {
    return (
        <>
            {facebook && <FontAwesomeIcon icon={faFacebookF} size="2x" />}
            {github && <FontAwesomeIcon icon={faGithub} size="2x" />}
            {linkedin && <FontAwesomeIcon icon={faLinkedin} size="2x" />}
        </>
    )
}

export default SocialButton
