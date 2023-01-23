import TraitBox from "../components/TraitBox";
import StaticNavBar from '../components/StaticNavBar'
import ContentArea from "../components/ContentArea";

function tt_app() {

    const rsrc_1 = {
        rName: 'Weakest, Most Available Resource',
        dVal: 'd6',
        desc: 'Insert a brief description of the weakest, most available resource.',
        minAmt: 0,
        maxAmt: 3,
        currAmt: 3
    };

    const rsrc_2 = {
        rName: 'Middle-ground Resource',
        dVal: 'd8',
        desc: 'Insert a brief description of the middle-ground resource.',
        minAmt: 0,
        maxAmt: 2,
        currAmt: 2
    };

    const rsrc_3 = {
        rName: 'Strongest, Least Available Resource',
        dVal: 'd10',
        desc: 'Insert a brief description of the strongest, least available resource.',
        minAmt: 0,
        maxAmt: 1,
        currAmt: 1
    };

    const testResourceList = [rsrc_1, rsrc_2, rsrc_3];

    const defaultContent = [

        <TraitBox
            type={'intro'}
            name={'Character Name'}
            value={'Subtitle'}
            desc_help={'Insert a detailed description of the character.'}
        />,

        <TraitBox
            type={'dist'}
            name={'Distinction 1'}
            value={'d8'}
            desc_help={'Brief desc. on how this helps the PC'}
            desc_hurt={'Brief desc. on how this hinders the PC'}
        />,

        <TraitBox
            type={'dist'}
            name={'Distinction 2'}
            value={'d8'}
            desc_help={'Brief desc. on how this helps the PC, Brief desc. on how this helps the PC, Brief desc. on how this helps the PC,' +
                'Brief desc. on how this helps the PC, Brief desc. on how this helps the PC, Brief desc. on how this helps the PC,' +
                'Brief desc. on how this helps the PC, Brief desc. on how this helps the PC, ' +
                'Brief desc. on how this helps the PC, Brief desc. on how this helps the PC'}
            desc_hurt={'Brief desc. on how this hinders the PC'}
        />,

        <TraitBox
            type={'dist'}
            name={'Distinction 3'}
            value={'d8'}
            desc_help={'Brief desc. on how this helps the PC'}
            desc_hurt={'Brief desc. on how this hinders the PC'}
        />,

        <TraitBox
            type={'spec'}
            name={'Specialization'}
            value={'d10'}
            desc_help={'Brief desc. on an area the character specializes in'}
        />,

        <TraitBox
            type={'rsrc'}
            value={testResourceList}
        />,

    ];

    return (
        <div className={'root-child'} id={'root-child-tt_app'}>

            <StaticNavBar/>

            <ContentArea type={'singles'} content={defaultContent}/>

        </div>
    );
}

export default tt_app;