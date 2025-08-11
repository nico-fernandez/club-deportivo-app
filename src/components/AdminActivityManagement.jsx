import React, { useState } from 'react';
import ActivityModal from './ActivityModal';

const AdminActivityManagement = ({ classes, onActivitySave }) => {
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [modalMode, setModalMode] = useState('create');

  const handleCreateActivity = () => {
    setModalMode('create');
    setSelectedActivity(null);
    setShowActivityModal(true);
  };

  const handleEditActivity = (activity) => {
    setModalMode('edit');
    setSelectedActivity(activity);
    setShowActivityModal(true);
  };

  const handleSaveActivity = (activityData, mode) => {
    if (onActivitySave) {
      onActivitySave(activityData, mode);
    }
  };

  const handleArchiveActivity = (activityId) => {
    // Implementar lógica para archivar actividad
    console.log('Archivar actividad:', activityId);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestión de Actividades</h2>
        <button
          onClick={handleCreateActivity}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 flex items-center"
        >
          <span className="mr-2">+</span>
          Crear Actividad
        </button>
      </div>

      {/* Tabla de Actividades */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actividad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instructor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha y Hora
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Capacidad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Inscritos
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {classes.map((classItem) => (
              <tr key={classItem.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="font-medium text-gray-900">{classItem.title}</div>
                    {classItem.description && (
                      <div className="text-sm text-gray-500">{classItem.description}</div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{classItem.instructor}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {new Date(classItem.date).toLocaleDateString('es-ES', { 
                      weekday: 'short', 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="text-sm text-gray-500">{classItem.time}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{classItem.capacity}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-900">{classItem.enrolled || 0}</span>
                    <span className="text-sm text-gray-500 ml-1">/ {classItem.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${((classItem.enrolled || 0) / classItem.capacity) * 100}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Activo
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEditActivity(classItem)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleArchiveActivity(classItem.id)}
                    className="text-yellow-600 hover:text-yellow-900"
                  >
                    Archivar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para crear/editar actividad */}
      <ActivityModal
        isOpen={showActivityModal}
        onClose={() => setShowActivityModal(false)}
        activity={selectedActivity}
        mode={modalMode}
        onSave={handleSaveActivity}
      />
    </div>
  );
};

export default AdminActivityManagement;