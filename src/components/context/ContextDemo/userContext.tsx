import { createContext } from 'react'

// 1, create the context. Context is used to share values to child component under a nested condition
// context can avoid passing value layer by layer.
const UserContext = createContext("");

// provider is used at places that need to pass data below.
const UserProvider = UserContext.Provider;
// consumer is used at places that receive the passed data from above.
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer, UserContext};