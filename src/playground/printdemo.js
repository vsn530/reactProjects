console.log('printdemo is running')
import React, { Component, useRef } from 'react';
import {render} from 'react-dom';
import ReactToPrint from 'react-to-print';


class PrintThisComponent extends Component{
    componentDidMount(){
        console.log('print this component mounted');
    }
    render(){
        
        return (
        <div>
        <button onClick={() => window.print()}>PRINT</button>

        <p>Click above button opens print preview with these words on page</p>
        </div>)
    }
}

class ComponentToPrint extends React.Component {
    render() {
        debugger;
      return (
        <table>
          <thead>
            <tr>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>column 1</td>
            <td>column 2</td>
            <td>column 3</td>
            <td>column 4</td>
            <td>column 5</td>
            <td>column 3</td>
            <td>column 1</td>
            <td>column 2</td>
            <td>column 8</td>
            </tr>
            <tr>
            <td>column 1</td>
            <td>column 2</td>
            <td>column 3</td>
            <td>column 4</td>
            <td>column 5</td>
            <td>column 3</td>
            <td>column 1</td>
            <td>column 2</td>
            <td>column 8</td>
            </tr>
            <tr>
            <td>column 1</td>
            <td>column 2</td>
            <td>column 3</td>
            <td>column 4</td>
            <td>column 5</td>
            <td>column 3</td>
            <td>column 1</td>
            <td>column 2</td>
            <td>column 8</td>
            </tr>
            <tr>
            <td>column 1</td>
            <td>column 2</td>
            <td>column 3</td>
            <td>column 4</td>
            <td>column 5</td>
            <td>column 3</td>
            <td>column 1</td>
            <td>column 2</td>
            <td>column 8</td>
            </tr>
            <tr>
            <td>column 1</td>
            <td>column 2</td>
            <td>column 3</td>
            <td>column 4</td>
            <td>column 5</td>
            <td>column 3</td>
            <td>column 1</td>
            <td>column 2</td>
            <td>column 8</td>
            </tr>
          </tbody>
        </table>
      );
    }
  }

  const Example = ()=> {
      const componentRef = useRef();
      return (
          <div>
            <ReactToPrint 
                trigger ={()=> <button>Print this out!</button>}
                content = {()=> componentRef.current}
            />

            <ComponentToPrint ref = {componentRef}/>
          </div>
      )
  }

  /* class Example extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} />

           <PrintThisComponent ref ={el => (this.componentRef = el)} /> 
        </div>
      );
    }
  } */

render(<Example />, document.getElementById('app'));