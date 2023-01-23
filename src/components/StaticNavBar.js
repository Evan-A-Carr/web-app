import { Link } from "react-router-dom";

function StaticNavBar()
{
    return (
        <div className={'side-bar'}>

            <Link to={'/home'} className={'side-bar-pageLink'}>Home</Link>
            <br/>
            <Link to={'/tt_app'} className={'side-bar-pageLink'}>TT-RPG App</Link>

            <div className={'side-bar-section'}>
                <div className={'side-bar-header'}>Contact Information</div>
                Evan Carr
                <br/><a className={'side-bar-section-link'} href={'mailto:evan.alexander.carr@gmail.com'} target={'_blank'} rel={'noopener noreferrer'}>evan.alexander.carr@gmail.com</a>
                <br/><a className={'side-bar-section-link'} href={'tel:870-330-2675'} target={'_blank'} rel={'noopener noreferrer'}>870-330-2675</a>
                <br/><a className={'side-bar-section-link'} href={'https://www.linkedin.com/in/evan-a-carr/'} target={'_blank'} rel={'noopener noreferrer'}>linkedin.com/in/evan-a-carr/</a>
                <br/><a className={'side-bar-section-link'} href={'https://github.com/Evan-A-Carr'} target={'_blank'} rel={'noopener noreferrer'}>github.com/Evan-A-Carr</a>
            </div>

        </div>
    )
}

export default StaticNavBar;