import React from 'react';

const PaymentsPanel = ({ payments, handleFileUpload, submitPayment, paymentFile }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Pagos de Cuota</h2>
      
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mes</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Pago</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap">{payment.month}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    payment.status === 'Pagado' ? 'bg-green-100 text-green-800' : payment.status === 'En revisión' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {payments.some(p => p.status === 'Pendiente') && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Subir Comprobante de Pago</h3>
          <p className="text-gray-600 mb-4">Para el mes: {payments.find(p => p.status === 'Pendiente')?.month}</p>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Selecciona el comprobante:
            </label>
            <input 
              type="file" 
              onChange={handleFileUpload}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          
          {paymentFile && (
            <div className="bg-blue-50 p-3 rounded-lg mb-4">
              <p className="text-sm">Archivo seleccionado: {paymentFile.name}</p>
            </div>
          )}
          
          <button
            onClick={submitPayment}
            disabled={!paymentFile}
            className={`py-2 px-4 rounded font-medium ${
              paymentFile
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Enviar Comprobante
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentsPanel;