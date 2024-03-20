import React, { useState } from 'react';
import CustomerList from './CustomerList';

const Content = ({ customerinfo }) => {

  return (
    <div className='table-container'>
      <h1>Customer Information List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Identification type</th>
            <th>Identification Number</th>
            <th>Name</th>
            <th>Current Balance</th>
          </tr>
        </thead>
        <tbody>
          {customerinfo.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.identificationType}</td>
              <td>{item.identificationNumber}</td>
              <td>{item.Name}</td>
              <td>{item.currBalance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className='adding-new-customers'>
        <form>
            <label htmlFor="newName">Name:</label>
            <input
              type="text"
              id="newName"
              required
            />
            <label htmlFor="newIdentificationType">Identification Type: </label>
            <input
              list="newIdentificationTypeOptions"
              name="newIdentificationType"
              required
            />
            <datalist id="newIdentificationTypeOptions">
              <option value="SSid" />
              <option value="Tax card" />
              <option value="Passport" />
              <option value="Driver's License" />
              <option value="Other" />
            </datalist>
            <label htmlFor="newIdentificationNumber">identification Number</label>
            <input 
              type='text'
              id="newIdentificationNumber"
              required
            />
            <input type='submit' value="Submit"></input>
            <input type='reset' value="Reset"></input>
        </form>
      </div> */}
    </div>
    );
}

export default Content
