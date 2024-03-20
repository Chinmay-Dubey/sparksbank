import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      customerinfo:[]
    };
    this.API_URL="http://localhost:5038/";
  }


  componentDidMount(){
    this.refreshCustomerinfo();
  }

  async refreshCustomerinfo() {
    fetch(this.API_URL+"api/sparksbank/GetCustomers").then(response=>response.json()).then(data=>{
      this.setState({customerinfo:data});
    })
  }

  render() {

    const title = "SparksBank"
    const{customerinfo}=this.state;

    return (
      <div className="App">
        <Header
          title = {title}
        />
        <Content 
          className="contentt"
          customerinfo = { customerinfo }
        />
        <Footer />
      </div>
    );
  }

}

export default App;
