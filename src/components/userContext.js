import React from 'react'

//on peut mettre la value dans App.js ou par défaut dans le createContext
//si on dans App.js on commente le userprovider, ça affichera la defaultvalue
const UserContext = React.createContext('DefaultValue')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer}

//Autres: pour utiliser context type dans componentE on doit export default UserContext
export default UserContext