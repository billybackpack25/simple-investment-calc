import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';

const Table = ({ data, headers, subHeaders, noData, format }) => {
  const getValue = (value, columnKey) =>
    columnKey in format ? format[columnKey](value) : value;

  const makeHtmlCell = (value) => <td>{value}</td>;
  const makeHtmlRow = (value, key) => <tr key={key}>{value}</tr>;

  const tableEntries = data.map((row) =>
    makeHtmlRow(
      Object.keys(row).map((columnKey, idx) =>
        makeHtmlCell(getValue(row[columnKey], columnKey))
      )
    )
  );

  return (
    <table className={styles.result}>
      {headers && (
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {subHeaders && (
          <tr>
            {subHeaders.map((subHeader) => (
              <td>{subHeader}</td>
            ))}
          </tr>
        )}
        {data.length === 0 && (
          <tr>
            <td colSpan='5' style={{ textAlign: 'center' }}>
              {noData ? noData : 'No data'}
            </td>
          </tr>
        )}
        {tableEntries}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(PropTypes.string),
  subHeaders: PropTypes.arrayOf(PropTypes.string),
  noData: PropTypes.string,
  format: PropTypes.object,
};

Table.defaultProps = {
  data: [],
  format: {},
};

export default Table;
