import StaticNavBar from "../components/StaticNavBar";
import ContentArea from "../components/ContentArea";

function home() {

    return (
        <div className={'root-child'} id={'root-child-home'}>

            <StaticNavBar/>

            <ContentArea type={'entire'} content={<p>Test test!</p>}/>

        </div>
    );

}

export default home;