import { ReactNode } from "react"

// similar to c++ template, where T can represent any type, we use <T> to create component that accept generic types.
type ListPorp<T> = {
    items: T[],
    onClick: (value: T) => void
}

// To export this function component that accepts any types, make sure to make generic T extends basic object type {}
export const List = <T extends {}>({items, onClick}: ListPorp<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index)=>{
                return (
                    <div key={index} onClick={()=> onClick(item)}>
                        {/* infer item type as reactnode */}
                        {item as ReactNode}
                    </div>
                )
            })}
        </div>
    )
}

// To export this function component that only accepts string or number, make sure to make generic T extends 
// either number or string like below: 
// export const List = <T extends number | string>({items, onClick}: ListPorp<T>) => {
//     return (
//         <div>
//             <h2>List of items</h2>
//             {items.map((item, index)=>{
//                 return (
//                     <div key={index} onClick={()=> onClick(item)}>
//                         {/* infer item type as reactnode */}
//                         {item as ReactNode}
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// To export this function component that only accepts object with certain key, we make T extends an object with id key.
// export const List = <T extends {id: number}>({items, onClick}: ListPorp<T>) => {
//     return (
//         <div>
//             <h2>List of items</h2>
//             {items.map((item, index)=>{
//                 return (
//                     <div key={item.id} onClick={()=> onClick(item)}>
//                         {/* infer item type as reactnode */}
//                         {item.id}
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }