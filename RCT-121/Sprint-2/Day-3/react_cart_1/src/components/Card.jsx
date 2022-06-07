export const ProductCard = ({child1,child2}) => {
    return (
        <>
            <div className="ProductCard">
                <div>{ child1}</div>
                <div>{child2}</div>
            </div>
        </>
    )
}

export const ProductDiv = ({children}) => {
    return (
        <>
            <div>{ children}</div>
        </>
    )
}