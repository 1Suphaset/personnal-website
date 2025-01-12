import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const SHEET_ID = '1T7auS28FAmpH1gFSrcgU62O7ZhGarZLs39NAdJ8z_-w';
const API_KEY = 'AIzaSyCxOsIGHXyC41K0yuIfo_Z_6oHXoK6xLFk';

const Sheet = () => {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const initGapi = () => {
      gapi.load('client', () => {
        gapi.client.init({
          apiKey: API_KEY,
        }).then(() => {
          return gapi.client.load('sheets', 'v4');
        }).then(() => {
          return gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: SHEET_ID,
            range: 'Sheet1!B6:B',
          });
        }).then((response) => {
          const rows = response.result.values;
          setData(rows);
        }).catch((error) => {
          console.error('Error loading data:', error);
        });
      });
    };

    initGapi();
  }, []);

  return (
    <div>
      <h1>Data from Google Sheet</h1>
      <table border="1">
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sheet;
