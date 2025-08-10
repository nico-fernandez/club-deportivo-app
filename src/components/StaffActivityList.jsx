import React from 'react';

const StaffActivityList = ({ myClasses }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Mis Actividades</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-4">
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled>
            <option value="all">Todas</option>
            <option value="initiated">Iniciadas</option>
            <option value="finished">Finalizadas</option>
            <option value="archived">Archivadas</option>
            <option value="deleted">Eliminadas</option>
          </select>
        </div>
        <div className="space-y-4">
          {myClasses.map((classItem) => (
            <div key={classItem.id} className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold">{classItem.title}</h3>
              <p>Fecha: {classItem.date} {classItem.time}</p>
              <p>Estado: Iniciada</p>
              <h4 className="mt-2 font-medium">Socios Inscriptos</h4>
              <ul className="list-disc list-inside">
                <li>Juan Pérez</li>
                <li>María García</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffActivityList;