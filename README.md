# S.I.S. – Sistema Integrado de Socios

## Documentación del Proyecto

Este proyecto fue desarrollado como resolución del **Trabajo Práctico Final** de la asignatura **Desarrollo de Software**.

**Grupo 8**
- Aita Jerónimo
- Fernández Nicolás
- Mactavish Tomás
- Rugiero Fausto

**Profesores**
- Badino Marcelo
- Leibovski Ariel
- Viera Sergio

**Universidad Tecnológica Nacional – Facultad Regional Delta**

---

## Proyecto

**Nombre:** Sistema Integrado de Socios (S.I.S.)  
**Objetivo:** Desarrollar un sistema que permita la gestión de socios y eventos de un club deportivo.

---

## Alcance

- El sistema será **distribuido**, con servidor y base de datos desplegados localmente y posibilidad de migrar a la nube.
- Será controlado por un **administrador** dentro del club.
- Interfaz web accesible vía navegador en computadoras de escritorio.
- Interfaz específica para **socios** y otra para **miembros de staff**.

---

## Análisis

### Funcionamiento del Sistema

#### Administración
El usuario **administrador** del sistema posee acceso completo y puede:

##### Registro y acceso de socios
1. El interesado se presenta en el club y completa un formulario de registro.
2. El administrador crea su cuenta en el sistema.
3. Una vez registrado, el socio puede acceder remotamente con sus credenciales.
4. El socio puede:
   - Ver y modificar el listado de socios y sus datos personales, historiales y pagos realizados.
   - Ver y modificar el listado de miembros de staff y pagos efectuados a ellos.
   - Ver y modificar las actividades disponibles en el club (clases, eventos, servicios).
   - Configurar parámetros del sistema (valor base de cuota, porcentaje de retención).
   - Ver y modificar su información personal y credenciales.

El pago de la cuota puede realizarse:
- Por transferencia bancaria.
- En efectivo en el club.

El administrador es responsable de **verificar y acreditar** el pago de la cuota mensual.

##### Registro y acceso de miembros de staff
- "Miembro de staff": usuario que dirige una actividad en el club (ej. profesor de fútbol, director de festival).
- Para registrarse, debe presentarse en el club, completar un formulario con la actividad a dirigir y presentar su CV.
- El administrador registra los pagos efectuados a miembros de staff.

El miembro de staff puede:
- Ver su historial de actividades y pagos.
- Gestionar sus inscripciones a actividades.
- Ver el valor de su cuota mensual (valor base + cargos por actividades).
- Subir comprobante de pago de cuota mensual.
- Ver listados de socios inscriptos a sus actividades.
- Ver el valor de compensación económica mensual asociada a cada actividad (según inscriptos y porcentaje de retención).
- Ver historial de compensaciones recibidas.

---

## Requisitos

### Requisitos Funcionales

#### Administrador
1. **RF1:** Registrar nuevo socio o miembro de staff con datos básicos (nombre, apellido, DNI, correo, teléfono).
2. **RF2:** Modificar información de socio o miembro de staff.
3. **RF3:** Dar de baja socios o miembros de staff (manteniendo historial).
4. **RF4:** Consultar historial de un socio (datos, pagos, actividades, valor de cuota, estado de pago).
5. **RF5:** Registrar pago de cuota mensual de un socio.
6. **RF6:** Consultar estado de pago de cuota de un socio.
7. **RF7:** Publicar actividad (descripción, cargo por inscripción, fechas/horarios, miembro de staff a cargo).
8. **RF8:** Modificar actividad publicada y notificar a inscriptos.
9. **RF9:** Archivar actividad finalizada.
10. **RF10:** Validar comprobante de pago subido por un socio.
11. **RF11:** Registrar pago efectuado a un miembro de staff.

#### Socio
12. **RF12:** Consultar su historial.
13. **RF13:** Modificar su información personal.
14. **RF14:** Subir comprobante de pago.
15. **RF15:** Inscribirse en actividades disponibles.

#### Miembro de Staff
16. **RF16:** Consultar listado de socios inscriptos a sus actividades.
17. **RF17:** Consultar monto a cobrar por eventos a su cargo.
18. **RF18:** Consultar actividades a su cargo (iniciadas, finalizadas, archivadas o eliminadas).
19. **RF19:** Consultar historial de compensaciones.

#### Sistema
20. **RF20:** Generar recordatorios automáticos de pago a socios.

---

### Requisitos No Funcionales

**Rendimiento**
- **RNF1:** Respuesta < 2s para 95% de solicitudes en carga normal.
- **RNF2:** Respuesta < 30s para 100% de solicitudes en carga alta (subida/bajada de archivos).
- **RNF3:** Consultas indexadas y uso de formato WebP en imágenes.

**Disponibilidad**
- **RNF4:** Uptime 99.9% (máx. 8.76 horas inactivo/año).
- **RNF5:** Backups diarios de base de datos.

**Seguridad**
- **RNF6:** Autenticación JWT y perfiles de usuario.
- **RNF7:** Comunicación HTTPS.
- **RNF8:** Cifrado de contraseñas con Bcrypt.
- **RNF9:** Campos de auditoría en base de datos.

**Usabilidad**
- **RNF10:** Interfaces web simples e intuitivas.

---

## Diagramas de Casos de Uso
> Incluye diagramas que representan los casos de uso principales definidos en este documento.

---

## Notas de Diseño
Esta sección queda como placeholder para avances futuros del proyecto.

---
