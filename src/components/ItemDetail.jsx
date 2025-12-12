import ItemCount from "./ItemCount"

export default function ItemDetail({item}) {

    return (
        <div>
            <h2>{item?.title}</h2>
            <img src={item?.img} />
            <p>{item?.price}</p>
            <p>{item?.description}</p>
            <ItemCount item = {item}/>
        </div>
    )
}