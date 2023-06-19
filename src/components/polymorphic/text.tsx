// 2, we need a type that extends generic html type
type TextOwnProp<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg',
    color?: 'primary' | 'secondary',
    children: React.ReactNode,
    // 3, call it E
    as?: E
}

// 1, to achieve polymorphic and restore native html attribute, we need to create a compound type that include 
// the html prop.
// 4, add extend to types.
// 5, use Omit to resolve component collision, since the children can be any type.
type TextProp<E extends React.ElementType> = TextOwnProp<E> & Omit<React.ComponentProps<E>, keyof TextOwnProp<E>>

// 6, specify what default type to be extended, and add generic type.
export const Text = <E extends React.ElementType = "div">({size, color, children, as}: TextProp<E>) => {
    const Component = as || 'div';
    return (
        <Component className={`class-with-${size}-${color}`}> 
            {children}
        </Component>
    )
}