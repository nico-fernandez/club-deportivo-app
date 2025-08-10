import React from 'react';

const AdminActivityManagement = ({ classes }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Gestión de Actividades</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Publicar/Modificar Actividad</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cargo por Inscripción</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fechas/Horarios</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Miembro del Staff</label>
            <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
          </div>
        </form>
        <div className="mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 mr-2" disabled>Editar</button>
          <button className="bg-yellow-600 text-white py-2 px-4 rounded font-medium hover:bg-yellow-700" disabled>Archivar</button>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Actividades Publicadas</h3>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actividad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {classes.map((classItem) => (
                <tr key={classItem.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{classItem.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{classItem.instructor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{classItem.date} {classItem.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">Activo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminActivityManagement;