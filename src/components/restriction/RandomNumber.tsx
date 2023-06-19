type RandomNumberType = {
    value: number,
}

// the & operator means that this PositiveType will contain all types of RandomNumberType and this isPositive boolean.
type PositiveType = RandomNumberType & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
}

// the never type below means if you set isNegative, you cannot set isPositive nor isZero as prop.
type Negativetype = RandomNumberType & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never
}

type ZeroType = RandomNumberType & {
    isZero: boolean,
    isPositive?: never, 
    isNegative?: never
}

type RandomNumberProp = PositiveType | Negativetype | ZeroType

export const RandomNumber = ({value: value, isPositive, isNegative, isZero}:RandomNumberProp)=> {
    return (
        <div>
            {value} {isPositive && "positive"} {isNegative && "negative"} {" "}
            {isZero && "zero"}
        </div>
    )
}