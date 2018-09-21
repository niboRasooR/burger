import React, {Component } from 'react';
import Aux from '../hoc/Aux';
import styles from './Layout.css';
import Toolbar from './Navigation/Toolbar'
import SideDrawer from './Navigation/SideDrawer/SideDrawer'
class Layout extends Component {

  state = {
    showSideDrawer: true
  }
  sideDrawerClosed = () =>{
    this.setState({ showSideDrawer: false});
  }

  sideDrawerOpened = () => {
    console.log("SIDE DRAWER OPENING");
    this.setState({showSideDrawer: true});
  }

  toggleHandler = ()=>{
    console.log("TOGGLE HANDLER");
    
    // V OI OLLA ODOTTAMATTOMIA VAIKUTUKSIA: EI HYVÄ
    //if(!this.state.showSideDrawer) this.sideDrawerOpened();
    //else this.sideDrawerClosed();

    // KÄYTÄ PREVSTATE
    this.setState( (previousState) =>{
      return { showSideDrawer: !previousState.showSideDrawer }
    });
  }

  render(){
    return(
          <Aux>
            <Toolbar clickedMenu={this.toggleHandler}/>
            <SideDrawer 
                open={this.state.showSideDrawer} 
                clicked={this.sideDrawerClosed} 
                closed={this.sideDrawerClosed}/>
              <main className={styles.Content}>
                {this.props.children}
              </main>
          </Aux>
    );
  };
}


export default Layout;