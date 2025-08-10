# S.I.S. – Sistema Integrado de Socios

## Desarrollo de Software – TP Final

### Desarrollo de Sistema de Administración de Socios para Club Deportivo

**Alumnos:**
- Aita Jerónimo
- Mactavish Tomás
- Fernández Nicolás
- Rugiero Fausto

**Docentes:**
- Badino Marcelo
- Leibouski Ariel
- Viera Sergio

---

## Documentación del Proyecto

### Objetivo del proyecto
Gestionar socios y actividades de un club deportivo mediante una plataforma web segura y escalable.

---

## Alcance
- Arquitectura **MVC**.
- Servidor desplegado localmente con posibilidad de migración a la nube.
- Gestión por parte de un **administrador** con interfaz web para escritorio.
- Interfaces web específicas para **socios** y **miembros del staff**.
- Autenticación JWT y gestión de perfiles de usuario.

---

## Actores
- Administrador
- Socio
- Miembro de Staff

---

## Funcionamiento

### Administración del sistema
El administrador dispone de acceso completo al sistema y puede:
- Visualizar y gestionar todas las actividades del club.
- Acceder al listado completo de socios y sus historiales.
- Consultar información detallada de todos los miembros del staff.
- Revisar todos los pagos realizados por socios.
- Controlar los pagos efectuados a miembros del staff.
- Configurar parámetros generales (cuotas base, porcentajes, períodos de pago).

### Registro y acceso de socios
Para registrarse:
1. El interesado acude al club y completa un formulario de registro.
2. El administrador crea la cuenta en el sistema.
3. El socio accede con credenciales.

El socio puede:
- Consultar y actualizar información personal.
- Revisar historial de actividades y pagos.
- Gestionar inscripciones a actividades, eventos y servicios.
- Ver valor actualizado de su cuota mensual (cuota base + actividades).
- Comprobar estado de pagos (al día o atrasado).
- Pagar presencialmente, por transferencia bancaria o subir comprobante.
- El administrador verifica y valida todos los pagos.

### Registro y acceso de miembros del staff
Para registrarse:
1. El interesado completa un formulario y presenta su CV.
2. El administrador registra al nuevo miembro y publica la actividad correspondiente.

El miembro de staff puede:
- Ver socios inscriptos en sus actividades.
- Consultar compensación económica mensual (según inscriptos y porcentaje de retención).
- Mantener un histórico de compensaciones recibidas.
- El administrador registra los pagos correspondientes.

---

## Requisitos

### Requisitos Funcionales

**Administrador**
1. RF1: Registrar nuevos socios o miembros de staff (nombre, apellido, DNI, correo, teléfono).
2. RF2: Modificar información.
3. RF3: Dar de baja manteniendo historial.
4. RF4: Consultar historial de socio.
5. RF5: Registrar pago de cuota.
6. RF6: Consultar estado de pago de cuota.
7. RF7: Publicar actividades.
8. RF8: Modificar actividad y notificar inscriptos.
9. RF9: Archivar clase/evento finalizado.
10. RF10: Validar comprobantes de pago.
11. RF11: Registrar pagos a miembros del staff.

**Socio**
12. RF12: Consultar historial personal.
13. RF13: Modificar información personal.
14. RF14: Subir comprobante de pago.
15. RF15: Inscribirse a actividades.

**Miembro de Staff**
16. RF16: Consultar listado de socios inscriptos.
17. RF17: Consultar monto a cobrar.
18. RF18: Consultar actividades (iniciadas, finalizadas, archivadas o eliminadas).
19. RF19: Consultar historial de compensaciones.

**Sistema**
20. RF20: Generar recordatorios de pago a socios (email).

---

### Requisitos No Funcionales

**Rendimiento**
- RNF1: Respuesta <2s para 95% de solicitudes bajo carga normal.
- RNF2: Consultas indexadas y formato WebP para imágenes.

**Alta Disponibilidad**
- RNF3: Uptime 99.9% (máx. 8.76h inactividad/año).
- RNF4: Backups diarios.

**Seguridad**
- RNF5: Autenticación JWT y perfiles.
- RNF6: HTTPS.
- RNF7: Cifrado Bcrypt para contraseñas.
- RNF8: Campos de auditoría en base de datos.

**Usabilidad**
- RNF9: Interfaz UX/UI intuitiva.

---

## Casos de Uso

### Administrador

#### CU001 – Registrar nuevo socio
**Actor:** Administrador  
**Descripción:** Permite dar de alta nuevos socios ingresando información personal.  
**Flujo normal:**
1. Presionar “Registrar socio”.
2. Se muestra formulario con campos requeridos.

#### CU008 – Consultar estado de pago
**Actor:** Administrador  
**Descripción:** Visualiza el estado de pago del socio.  
**Flujo normal:**
1. Presionar “Estado de pago”.
2. Se muestra “Al día” si está pago, “Pendiente” si está antes del vencimiento o “No Pagado” si venció.

#### CU009 – Publicar Actividad
**Actor:** Administrador  
**Descripción:** Permite dar de alta nuevas actividades.  
**Flujo normal:**
1. Presionar “Publicar actividad”.
2. Formulario para tipo de actividad, monto, fecha/s, etc.

---

### Usuario

#### CU014 – Inscribirse a actividad
**Actor:** Usuario  
**Descripción:** Muestra listado de servicios disponibles.  
**Flujo normal:**
1. Presionar “Contratar actividad”.
2. Listado con valor, profesor/responsable y botón de inscripción.

#### CU015 – Consultar valor de cuota
**Actor:** Usuario  
**Descripción:** Muestra detalle de la cuota (servicios, actividades, etc.).  
**Flujo normal:**
1. Presionar “Consultar valor de cuota”.
2. Se visualiza el detalle.

---

### Profesor

#### CU017 – Consultar inscriptos a actividad
**Actor:** Profesor  
**Descripción:** Visualiza listado de inscriptos a una actividad.  
**Flujo normal:**
1. Seleccionar una actividad activa.
2. Se listan socios inscriptos.

---

## Diagramas
> Incluir diagramas de casos de uso según documento original.
