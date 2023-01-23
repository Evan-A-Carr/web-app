function ContentArea({type, content})
{
    // Make sure type is in correct case
    type = type.toLowerCase();

    // Boxes that are 1x1 and are in a 3 width grid
    if(type === 'singles')
    {
        return (
            <div className={'content-area'} id={'singles-area'}>{content}</div>
        )
    }

    // Content should take up the entire area
    else if (type === 'entire')
    {
        return (
            <div className={'content-area'} id={'entire-area'}>{content}</div>
        )
    }
}

export default ContentArea;