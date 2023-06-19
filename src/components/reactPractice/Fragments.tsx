import { Fragment } from "react"

export const FragmentDemo = ()=> {
    return (
        // 1, the fragment will prevent the extra enclosing div from showing up.
        // 2, fragment can thus naturally allow certain tags to use with their combo tags, like enclosing td tag within fragment and insert such component into a table from another component. 
        // 3, can accept key property for map().
        <Fragment>
            Fragment Demo
        </Fragment>
    )
}