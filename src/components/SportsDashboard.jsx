import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Notification from './Notification';
import HomePanel from './HomePanel';
import ClassesPanel from './ClasesPanel';
import MyClassesPanel from './MyClasesPanel';
import PaymentsPanel from './PaymentsPanel';
import MembersPanel from './MembersPanel';
import InstructorsPanel from './InstructorsPanel';
import ReportsPanel from './ReportsPanel';
import ConfigPanel from './ConfigPanel';
import MemberModal from './MemberModal';
import ProfessorProfile from './ProfesorProfile';
import AdminSocioHistory from './AdminSocioHistory';
import StaffActivityList from './StaffActivityList';
import AdminActivityManagement from './AdminActivityManagement';

const SportsDashboard = () => {
    const [userRole, setUserRole] = useState('socio');
    const [activeView, setActiveView] = useState('inicio');
    const [notification, setNotification] = useState(null);
    const [classes, setClasses] = useState([
        { id: 1, title: 'Yoga', instructor: 'Ana García', date: '2025-05-02', time: '10:00', capacity: 15, enrolled: 8 },
        { id: 2, title: 'Natación', instructor: 'Carlos Mendoza', date: '2025-05-03', time: '16:00', capacity: 10, enrolled: 10 },
        { id: 3, title: 'Tenis', instructor: 'Laura Pérez', date: '2025-05-04', time: '09:00', capacity: 8, enrolled: 5 },
        { id: 4, title: 'Fútbol', instructor: 'Roberto Suárez', date: '2025-05-05', time: '18:00', capacity: 22, enrolled: 18 }
    ]);
    const [myClasses, setMyClasses] = useState([{ id: 2, title: 'Natación', instructor: 'Carlos Mendoza', date: '2025-05-03', time: '16:00' }]);
    const [payments, setPayments] = useState([
        { id: 1, month: 'Marzo 2025', status: 'Pagado', amount: '$50', date: '2025-03-01' },
        { id: 2, month: 'Abril 2025', status: 'Pagado', amount: '$50', date: '2025-04-01' },
        { id: 3, month: 'Mayo 2025', status: 'Pendiente', amount: '$50', date: '-' }
    ]);
    const [members, setMembers] = useState([
        { id: 1, name: 'Juan Pérez', email: 'juan@email.com', phone: '+1234567890', status: 'Activo', lastPayment: '2025-04-01' },
        { id: 2, name: 'María García', email: 'maria@email.com', phone: '+1234567891', status: 'Activo', lastPayment: '2025-04-01' },
        { id: 3, name: 'Carlos López', email: 'carlos@email.com', phone: '+1234567892', status: 'Inactivo', lastPayment: '2025-02-01' }
    ]);
    const [instructors] = useState([
        { id: 1, name: 'Ana García', specialty: 'Yoga', email: 'ana.garcia@club.com', experience: '5 años', status: 'Activo' },
        { id: 2, name: 'Carlos Mendoza', specialty: 'Natación', email: 'carlos.mendoza@club.com', experience: '8 años', status: 'Activo' },
        { id: 3, name: 'Laura Pérez', specialty: 'Tenis', email: 'laura.perez@club.com', experience: '3 años', status: 'Activo' }
    ]);
    const [paymentFile, setPaymentFile] = useState(null);
    const [showMemberModal, setShowMemberModal] = useState(false);
    const [newMember, setNewMember] = useState({ name: '', email: '', phone: '' });
    const [professorProfile, setProfessorProfile] = useState(instructors.find(i => i.name === 'Prof. Martínez') || { name: 'Prof. Martínez', specialty: '', email: '', experience: '', status: 'Activo' });
    const [isEditing, setIsEditing] = useState(false);
    const [selectedSocio, setSelectedSocio] = useState(null);

    const renderPanel = () => {
        switch (activeView) {
            case 'inicio':
                return <HomePanel userRole={userRole} myClasses={myClasses} payments={payments} />;
            case 'clases':
                if (userRole === 'socio') {
                    return <ClassesPanel classes={classes} myClasses={myClasses} />;
                } else {
                    return <AdminActivityManagement classes={classes} />;
                }
            case 'misClases':
                return <MyClassesPanel classes={myClasses} />;
            case 'pagos':
                if (userRole === 'socio') {
                    return <PaymentsPanel payments={payments} paymentFile={paymentFile} />;
                } else {
                    return (
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-6">Administración de Pagos</h2>
                            <div className="bg-white rounded-lg border border-gray-200 p-6">
                                <p className="text-gray-600">Vista de administración de todos los pagos del club.</p>
                            </div>
                        </div>
                    );
                }
            case 'socios':
                if (userRole === 'admin') {
                    return (
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-6">Gestión de Socios</h2>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="Buscar socio..."
                                    className="px-4 py-2 border border-gray-300 rounded-lg w-64"
                                />
                                <button
                                    onClick={() => setShowMemberModal(true)}
                                    className="ml-4 bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700"
                                >
                                    + Nuevo Socio
                                </button>
                            </div>
                            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Último Pago</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {members.map((member) => (
                                            <tr key={member.id}>
                                                <td className="px-6 py-4 whitespace-nowrap font-medium">{member.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{member.email}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 py-1 text-xs rounded-full ${member.status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                        }`}>
                                                        {member.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">{member.lastPayment}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <button
                                                        onClick={() => setSelectedSocio(member)}
                                                        className="text-blue-600 hover:text-blue-800 mr-3"
                                                    >
                                                        Ver Historial
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {selectedSocio && <AdminSocioHistory socio={selectedSocio} onClose={() => setSelectedSocio(null)} />}
                        </div>
                    );
                }
                return <MembersPanel members={members} />;
            case 'profesores':
                return <InstructorsPanel instructors={instructors} />;
            case 'reportes':
                return <ReportsPanel members={members} classes={classes} />;
            case 'configuracion':
                return <ConfigPanel />;
            case 'crearClase':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-6">Crear Nueva Clase</h2>
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Instructor</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" value="Prof. Martínez" disabled />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Fecha</label>
                                    <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Hora</label>
                                    <input type="time" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Capacidad</label>
                                    <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
                                </div>
                            </form>
                        </div>
                    </div>
                );
            case 'asistencia':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-6">Registrar Asistencia</h2>
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 bg-gray-50" disabled>
                                <option>Selecciona una clase</option>
                                {myClasses.map((classItem) => (
                                    <option key={classItem.id} value={classItem.id}>{classItem.title} - {classItem.date} {classItem.time}</option>
                                ))}
                            </select>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Alumnos Presentes</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'horario':
                return (
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-6">Mi Horario</h2>
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Día</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clase</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {myClasses.map((classItem) => (
                                        <tr key={classItem.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{new Date(classItem.date).toLocaleDateString('es-ES', { weekday: 'long' })}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{classItem.time}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{classItem.title}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'perfil':
                if (userRole === 'profesor') {
                    return <ProfessorProfile profile={professorProfile} isEditing={isEditing} setIsEditing={setIsEditing} />;
                } else if (userRole === 'socio') {
                    return (
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-6">Mi Perfil</h2>
                            <div className="bg-white rounded-lg border border-gray-200 p-6 max-w-2xl mx-auto">
                                <div className="flex items-center mb-6">
                                    <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-2xl">
                                        S
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-semibold">Juan Pérez</h3>
                                        <p className="text-gray-600">Socio</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                                        <input type="text" value="Juan Pérez" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" value="juan@email.com" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                                        <input type="tel" value="+1234567890" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return <div className="p-6"><h2 className="text-xl font-semibold">Contenido en desarrollo</h2></div>;
            case 'staffActivities':
                return <StaffActivityList myClasses={myClasses} />;
            case 'staffCompensation':
                return <StaffCompensation myClasses={myClasses} />;
            default:
                return <div className="p-6"><h2 className="text-xl font-semibold">Contenido en desarrollo</h2></div>;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto" style={{ width: '280px' }}>
                <Sidebar userRole={userRole} activeView={activeView} setActiveView={setActiveView} setUserRole={setUserRole} />
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header userRole={userRole} activeView={activeView} />
                {notification && <Notification type={notification.type} message={notification.message} />}
                <main className="flex-1 overflow-y-auto">
                    {renderPanel()}
                </main>
            </div>
            {showMemberModal && <MemberModal newMember={newMember} setNewMember={setNewMember} setShowMemberModal={setShowMemberModal} />}
        </div>
    );
};

export default SportsDashboard;