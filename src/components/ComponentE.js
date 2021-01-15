import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {
  render() {
    return (
      <div>
        <ComponentF />
      </div>
    )
  }
}

// ContextType
// class ComponentE extends Component {
// 
//   si on veut on peut remplacer la ligne 31 par:
//   static contextType = UserContext
// 
//   render() {
//     return (
//       <div>
//          Component E context {this.context}
//         <ComponentF />
//       </div>
//     )
//   }
// }

//Autres: voir userContext bas du fichier pour context type
ComponentE.contextType = UserContext

export default ComponentE
