import React from 'react';

const MyClassesPanel = ({ classes, cancelEnrollment }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Mis Clases</h2>
      
      {classes.length === 0 ? (
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <p className="text-gray-600">No tienes clases inscritas. Explora las clases disponibles para inscribirte.</p>
          <button className="mt-3 bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700">Ver Clases Disponibles</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map(classItem => (
            <div key={classItem.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{classItem.title}</h3>
                <p className="text-gray-600 mb-2">Instructor: {classItem.instructor}</p>
                <p className="text-gray-600 mb-4">{classItem.date} - {classItem.time}</p>
                
                <button
                  onClick={() => cancelEnrollment(classItem.id)}
                  className="w-full py-2 px-4 rounded font-medium bg-red-600 text-white hover:bg-red-700"
                >
                  Cancelar Inscripción
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyClassesPanel;