


import React from 'react';
import './App.css';
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      newItem: ""

    }
  }


  addItem(todovalue) {
    if (todovalue != "") {
      const newItem = {  // create a newitem with unique id
        id: Date.now(),
        value: todovalue,
        isDone: false
      };

      const ulist = [...this.state.list] //all
      ulist.push(newItem)
      this.setState({
        list: ulist,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id != id);
    this.setState({
      list: updatedlist
    })
  }

  updateInput(input) {
    this.setState({ newItem: input })
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist });
  }






  render() {
    return (
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-3"  >
              <div className="card">
                <h1 className="text-center heading">ToDo APP</h1>
                <div className="card-body">



                  <span><input type="text" autoFocus name="todo" id="inp" className="form-control" value={this.state.newItem} onChange={e => this.updateInput(e.target.value)} placeholder="Enter a to-do task here " />
                    <div align="center"><div className="line"></div><button type="button" className="btn btn-plus btn-warning" disabled={!this.state.newItem.length} onClick={() => this.addItem(this.state.newItem)}><b className="plus">+</b></button></div></span>




                  <div>
                    <ul>
                      {this.state.list.map(item => {
                        return (
                          <li key={item.id}>
                            {item.value}
                            <button className="btn btn-light del" onClick={() => this.deleteItem(item.id)}><b>-</b></button>
                          </li>
                        )
                      })}

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
// import React from "react";
// // import logo from "./LCO-logo-white.png";
// import "./App.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newItem: "",
//       list: []
//     };
//   }

//   addItem(todoValue) {
//     if (todoValue !== "") {
//       const newItem = {
//         id: Date.now(),
//         value: todoValue,
//         isDone: false
//       };
//       const list = [...this.state.list];
//       list.push(newItem);

//       this.setState({
//         list,
//         newItem: ""
//       });
//     }
//   }

//   deleteItem(id) {
//     const list = [...this.state.list];
//     const updatedlist = list.filter(item => item.id !== id);
//     this.setState({ list: updatedlist });
//   }

//   updateInput(input) {
//     this.setState({ newItem: input });
//   }

//   render() {
//     return (
//       <div>
//         {/* <img src={logo} width="100" height="100" className="logo" /> */}
//         <h1 className="app-title">LCO ToDo App</h1>
//         <div className="container">
//           Add an Item....
//           <br />
//           <input
//             type="text"
//             className="input-text"
//             placeholder="Write a Todo"
//             required
//             value={this.state.newItem}
//             onChange={e => this.updateInput(e.target.value)}
//           />
//           <button
//             className="add-btn"
//             onClick={() => this.addItem(this.state.newItem)}
//             disabled={!this.state.newItem.length}
//           >
//             Add Todo
//           </button>
//           <div className="list">
//             <ul>
//               {this.state.list.map(item => {
//                 return (
//                   <li key={item.id}>
//                     <input
//                       type="checkbox"
//                       name="idDone"
//                       checked={item.isDone}
//                       onChange={() => {}}
//                     />
//                     {item.value}
//                     <button
//                       className="btn"
//                       onClick={() => this.deleteItem(item.id)}
//                     >
//                       Delete
//                     </button>
//                   </li>
//                 );
//               })}
//               <li>
//                 <input type="checkbox" name="" id="" />
//                 Record youtube videos
//                 <button className="btn">Delete</button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
