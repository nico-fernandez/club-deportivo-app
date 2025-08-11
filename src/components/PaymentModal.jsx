import React, { useState, useEffect } from 'react';

const PaymentModal = ({ isOpen, onClose, members = [], onSave, payment = null, mode = 'create' }) => {
  const [formData, setFormData] = useState({
    memberId: '',
    amount: '',
    month: '',
    paymentMethod: 'efectivo',
    notes: '',
    date: new Date().toISOString().split('T')[0]
  });

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  useEffect(() => {
    if (payment && mode === 'edit') {
      setFormData({
        memberId: payment.memberId.toString(),
        amount: payment.amount.replace('$', ''),
        month: payment.month,
        paymentMethod: payment.paymentMethod || 'efectivo',
        notes: payment.notes || '',
        date: payment.date
      });
    } else {
      setFormData({
        memberId: '',
        amount: '',
        month: `${months[currentMonth]} ${currentYear}`,
        paymentMethod: 'efectivo',
        notes: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  }, [payment, mode, currentMonth, currentYear, months]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.memberId || !formData.amount || !formData.month) {
      alert('Por favor complete todos los campos obligatorios');
      return;
    }

    const member = members.find(m => m.id === parseInt(formData.memberId));
    const paymentData = {
      id: payment ? payment.id : Date.now(),
      memberId: parseInt(formData.memberId),
      memberName: member.name,
      month: formData.month,
      amount: `$${formData.amount}`,
      status: 'Pagado',
      date: formData.date,
      paymentMethod: formData.paymentMethod,
      notes: formData.notes
    };

    onSave(paymentData, mode);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {mode === 'create' ? 'Registrar Pago' : 'Editar Pago'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Socio *
              </label>
              <select
                required
                value={formData.memberId}
                onChange={(e) => setFormData({...formData, memberId: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Seleccionar socio</option>
                {members.filter(m => m.status === 'Activo').map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.name} - {member.email}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mes *
              </label>
              <select
                required
                value={formData.month}
                onChange={(e) => setFormData({...formData, month: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {months.map((month, index) => (
                  <option key={index} value={`${month} ${currentYear}`}>
                    {month} {currentYear}
                  </option>
                ))}
                {months.map((month, index) => (
                  <option key={`next-${index}`} value={`${month} ${currentYear + 1}`}>
                    {month} {currentYear + 1}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monto *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de Pago *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Método de Pago
              </label>
              <select
                value={formData.paymentMethod}
                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="efectivo">Efectivo</option>
                <option value="tarjeta">Tarjeta de Crédito/Débito</option>
                <option value="transferencia">Transferencia Bancaria</option>
                <option value="cheque">Cheque</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notas Adicionales
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Información adicional sobre el pago..."
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {mode === 'create' ? 'Registrar Pago' : 'Guardar Cambios'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
