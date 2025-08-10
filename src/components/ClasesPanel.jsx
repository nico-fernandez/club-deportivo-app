import React from 'react';

const ClassesPanel = ({ classes, enrollClass, myClasses }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Clases Disponibles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map(classItem => {
          const isEnrolled = myClasses.some(c => c.id === classItem.id);
          const isFull = classItem.enrolled >= classItem.capacity;
          
          return (
            <div key={classItem.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{classItem.title}</h3>
                <p className="text-gray-600 mb-2">Instructor: {classItem.instructor}</p>
                <p className="text-gray-600 mb-2">{classItem.date} - {classItem.time}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">Cupos: {classItem.enrolled}/{classItem.capacity}</span>
                  {isFull && <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Completo</span>}
                </div>
                
                <button
                  onClick={() => enrollClass(classItem.id)}
                  disabled={isEnrolled || isFull}
                  className={`w-full py-2 px-4 rounded font-medium ${
                    isEnrolled 
                      ? 'bg-green-100 text-green-800 cursor-default'
                      : isFull
                        ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isEnrolled ? 'Inscrito' : isFull ? 'Clase Llena' : 'Inscribirse'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClassesPanel;