import React, {Component} from 'react';
import CodeSearch from './dashboard/search';
import searchCode from './dashboard/searchCode';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plusCode: 'Your code will appear here!'
    }
  }

  render() {
    const { plusCode } = this.state;
    return (
      <CodeSearch
        onClick={
          (lat, long) => {
            let plusCode = searchCode(lat, long);
            this.setState({
              plusCode
            });
          }
        }
        plusCode={plusCode}
      />
    );
  }
}

export default Dashboard;