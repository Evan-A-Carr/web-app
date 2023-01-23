/*
* customTitle = Optional string, custom title of box instead of 'Resources'<br>
* rsrcList = Array containing objects containing resource information:
* One resource object has the following properties:
* - rName: string
* - dVal: string formatted as d#, dice value of resource
* - desc: string, brief description of resource
* - currAmt: int, current amount left of resource
* - minAmt: int, minimal amount of resource possible, default of 0
* - maxAmt: int, maximum amount of resource possible, default of 3
*/
function ResourceList({customTitle, rsrcList})
{
    // Create an empty array for xml storage
    const rsrcDivList = [];

    // For each resource in the provided list, push a new Resource component into rsrcDivList
    for(let i = 0; i < rsrcList.length; i++)
    {
        rsrcDivList.push(<Resource rsrcOBJ={rsrcList[i]}/>);
    }

    // Custom title is not empty, null, nor undefined, include it
    if (customTitle !== '' && customTitle !== null && customTitle !== undefined)
    {
        // Return the list of Resource components (rsrcDivList) with a custom title
        return (
            <div className={'box'}>
                <div className={'box-title'}>{customTitle}</div>
                {rsrcDivList}
            </div>
        )
    }
    else
    {
        // Return the list of Resource components (rsrcDivList) with the default title
        return (
            <div className={'box'}>
                <div className={'box-title'}>Resources</div>
                {rsrcDivList}
            </div>
        )
    }
}

function Resource({rsrcOBJ})
{
    return (
        <div className={'box-content'}>
            <div>
                {/** Return a select element w/ # of options equal to range from minAmt to maxAmt **/}
                <span className={'resource-name'}>{rsrcOBJ['rName']} </span>
                (<span className={'dice-value'}>{rsrcOBJ['dVal']}</span>)
                <select className={'resource-dropdown'} value={rsrcOBJ['currAmt']}>
                    {
                        (() => {
                            const optionList = [];

                            for (let i = rsrcOBJ['maxAmt']; i > rsrcOBJ['minAmt'] - 1; i--)
                            {
                                optionList.push(<option value={i}>{i}</option>);
                            }

                            return (optionList);
                        })()
                    }
                </select>
                <div>{rsrcOBJ['desc']}</div>
            </div>
        </div>
    )
}

export default ResourceList;
