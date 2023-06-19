// we include the native button eleemnt type into our defined button type by using "&" and <>.
type ButtonProp = {
    variant: "primary" | "secondary",
    // note: this children below can be string or even another html element like a div
    children: string 
    // to exclude children to be another html element, we can use Omit keyword like exclude to 
    // exclude the html type (which is represented by the children property)
} & Omit<React.ComponentProps<'button'>, 'children'>

// we deconstruct the property to include mainly what we want and native children property and the rest of the property
export const CustomButton = ({variant, children, ...rest}: ButtonProp)=> {
    return <button className={`class-with-${variant}`} {...rest}>
        {/* not children can only be string */}
        {children}
    </button>
}