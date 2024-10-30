


export default function Pagination(props){

    const {count} = props

    return (
        <ul className="pagination">
            <li>{'<'}</li>
            {new Array(count).fill(null).map((_,ind) => ind + 1).map(el => 
                <li>
                    {el}
                </li>
            )}
            <li>{'>'}</li>
        </ul>
    )
}