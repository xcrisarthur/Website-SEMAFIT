import {useNavigate} from "react-router-dom"

const Footer = () => {
    const navigate = useNavigate()
    return (
        <>
            <h3>THIS IS FOOTER</h3>
            <button onClick = {() => navigate('/')}>
                Check About
            </button>
        </>
    )
}

export default Footer