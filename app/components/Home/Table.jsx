import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Address
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ROI
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Years
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amount
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Avail Loan
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
      {data?.map((rowData, rowIndex) => (
  <tr key={rowIndex}>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rowData.address}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rowData.roi}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rowData.max_time}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rowData.amount}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      <button className="text-red-600">Avail Now</button>
    </td>
  </tr>
))}

      </tbody>
    </table>
  );
};

export default Table;
