import React, {Component} from 'react';

import './front.css';

class Menu extends Component {
  render () {
    return (
      <div className="menu-page main-item">
        <table className="menu">
          <thead>
            <tr>
              <th colSpan="2">Platter</th>
            </tr>
          </thead>
          <tbody className="menu-text">
            <tr>
              <td>Lamb Over Rice</td>
              <td>$6.00</td>
            </tr>
            <tr>
              <td>Falafel Over Rice</td>
              <td>$6.00</td>
            </tr>
            <tr>
              <td>Chicken Over Rice</td>
              <td>$6.00</td>
            </tr>
            <tr>
              <td>Fish Over Rice</td>
              <td>$6.00</td>
            </tr>
            <tr>
              <td>Kebab Over Rice</td>
              <td>$6.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Menu;
