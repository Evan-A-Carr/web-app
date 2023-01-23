import ResourceList from './ResourceList';

/*
* type = intro, dist, spec, rsrc, SFX, or custom<br>
* name = Name of the trait<br>
* value = Dice value OR custom text<br>
* desc_help = How the trait helps the PC OR benefit of SFX<br>
* desc_hurt = How the trait hurts the PC OR activation of SFX
*/
function TraitBox({type, name, value, desc_help, desc_hurt})
{
    /*
    Introduction
    name = Name of the PC
    value = Subtitle of the PC
    desc_help = Description of the PC
     */

    // Make sure type is in correct case
    type = type.toLowerCase();

    // Introduction
    if (type === 'intro')
    {
        return (
            <div className={'box'}>
                <div className={'box-title'}>
                    <div id={'pc-name'}>{name}</div>
                    <div id={'pc-subtitle'}>{value}</div>
                </div>

                <div className={'box-content'}>{desc_help}</div>
            </div>
        )
    }


    // Distinction
    else if (type === 'dist')
    {
        return (
            <div className={'box'}>
                <div className={'box-title'}>{name} ({value})</div>
                <div className={'box-content'}>{desc_help}</div>
                <div className={'box-content'}>Hinder: {desc_hurt}</div>
            </div>
        )
    }

    // Specialization
    else if (type === 'spec')
    {
        return (
            <div className={'box'}>
                <div className={'box-title'}>{name} ({value})</div>
                <div className={'box-content'}>{desc_help}</div>
            </div>
        )
    }

    /*
    Resource(s)
    name = Optional custom name of box<br>
    value = List of resource objects in an array
    */
    else if (type === 'rsrc')
    {
        return (<ResourceList customTitle={name} rsrcList={value}/>);
    }

    /*
    Special Effects
    desc_hurt = activation description
    desc_help = benefit description
    value = general lore description
     */
    else if (type === 'SFX')
    {
        return <div className={'box'}>

            <div className={'box-title'}>{name}</div>
            <div className={'box-content'}>Activation: {desc_hurt}</div>
            <div className={'box-content'}>Benefit: {desc_help}</div>
            <div className={'box-content'}>{value}</div>

        </div>
    }

    // Custom Box
    else if (type === 'custom')
    {
        // Name is not empty, null, nor undefined, include it
        if (name !== '' && name !== null && name !== undefined)
        {
            return (
                <div className={'box'}>
                    <div className={'box-title'}>{name}</div>
                    <div className={'box-content'}>{value}</div>
                </div>
            )
        }

        // Name wasn't defined, exclude it
        else
        {
            return (
                <div className={'box'}>
                    <div className={'box-content'}>{value}</div>
                </div>
            )
        }
    }
}

export default TraitBox;