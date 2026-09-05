# Manual Editorial y Guía de Gestión de Contenido: Pelotón B
**Portal Oficial:** [https://www.pelotonb.com](https://www.pelotonb.com)  
**Panel de Administración:** [https://www.pelotonb.com/admin](https://www.pelotonb.com/admin)

---

## 1. Credenciales de Acceso para Redacción

### Cuenta de Administrador Principal (Evelyn Saldarreaga)
- **Rol:** Directora Editorial / Administradora del Sitio
- **URL de Acceso:** `https://www.pelotonb.com/admin`
- **Usuario / Correo Electrónico:** `director@pelotonb.com`
- **Contraseña Temporal Inicial:** `PelotonB.2026!Admin`

> [!IMPORTANT]
> **Seguridad:** Al iniciar sesión por primera vez, se recomienda cambiar esta contraseña temporal desde el menú de perfil por una clave personal segura.

---

## 2. Activación de Tina Cloud (Paso Único de 2 Minutos para Producción)

Para que el panel web de `pelotonb.com/admin` pueda guardar directamente los cambios en GitHub y publicarlos en Vercel a costo \$0/mes de por vida:

1. **Ingreso a Tina Cloud:**
   * Entra a [https://app.tina.io](https://app.tina.io) e inicia sesión con tu cuenta de GitHub (`m1gu`).
2. **Vincular el Proyecto:**
   * Haz clic en **New Project**.
   * Selecciona el repositorio de GitHub: **`m1gu/peloton-b`**.
   * Rama principal: `main`.
3. **Copiar las 2 Claves a Vercel:**
   * Tina Cloud te mostrará dos valores:
     - `Client ID`
     - `Read-only Token`
   * Ve a tu panel de **Vercel** > Proyecto `peloton-b` > **Settings** > **Environment Variables**.
   * Agrega:
     * Nombre: `NEXT_PUBLIC_TINA_CLIENT_ID` | Valor: *(Tu Client ID)*
     * Nombre: `TINA_TOKEN` | Valor: *(Tu Read-only Token)*
   * Haz clic en **Save** y luego en **Deployments** > **Redeploy** para aplicar los cambios.
4. **Dar acceso a Evelyn Saldarreaga:**
   * En Tina Cloud > Tu Proyecto > pestaña **Users** > haz clic en **Invite User**.
   * Escribe el correo: `director@pelotonb.com` y asígnale el rol de **Admin**.
   * Evelyn recibirá la invitación oficial para ingresar a `https://www.pelotonb.com/admin`.

---

## 3. Guía Paso a Paso: Cómo Crear y Editar Contenido

### Paso 1: Ingreso al Panel
1. Abre tu navegador y dirígete a: **`https://www.pelotonb.com/admin`**.
2. Ingresa con tu usuario y contraseña.
3. En el menú lateral izquierdo verás la sección: **Noticias y Crónicas**.

### Paso 2: Crear una Nueva Crónica
1. Haz clic en el botón superior derecho: **`+ New Post`** (Nueva Noticia).
2. Completa los campos estructurados:
   - **Titular (Title):** El titular periodístico principal de gran impacto tipográfico.
   - **Subtítulo / Bajada:** Resumen de una o dos líneas que contextualiza la noticia.
   - **Categoría Principal:** Selecciona en el desplegable: `Softball`, `Baseball` o `Noticias`.
   - **Subcategoría / Etiqueta:** Especifica el alcance (ej. *Femenino / Internacional*, *Serie Mayor*, *Sabermetría*, *Prospectos*).
   - **Fotografía Principal (Hero Image):** Sube la imagen desde tu computadora o selecciona una del archivo.
   - **Pie de Foto y Crédito:** Describe la acción y el autor fotográfico (ej. *Molinete en la 6ta entrada. Foto: Evelyn Saldarreaga / Pelotón B*).
   - **Autor / Redactor:** Selecciona en la lista (*Evelyn Saldarreaga*, *Abel Saldarreaga*, *Miguel Rodríguez*).
   - **Fecha de Publicación:** Fecha del evento o emisión.
   - **Tiempo de Lectura:** Estimado (ej. *5 min de lectura*).
   - **Extracto:** Párrafo corto que se muestra en la portada del sitio.

### Paso 3: Agregar Citas Destacadas (Pull Quotes)
Si la crónica incluye declaraciones clave de un atleta o entrenador:
- En la sección **Cita Destacada (Pull Quote)**:
  - **Texto de la cita:** Escribe la declaración entre comillas.
  - **Autor de la cita:** Nombre y cargo del declarante.

### Paso 4: Insertar Videos (YouTube o Vimeo)
- En la sección **Video Embebido**:
  - Selecciona si es `youtube` o `vimeo`.
  - Pega el enlace de incrustación (`https://www.youtube.com/embed/...`).
  - Escribe el título del reporte audiovisual.

### Paso 5: Escribir el Cuerpo de la Noticia
- En el área principal de **Cuerpo de la Crónica**, dispones de un editor visual enriquecido:
  - Formato de texto: Negritas, cursivas, encabezados de sección (H2, H3).
  - Listas con viñetas o numeradas.
  - Enlaces a fuentes externas o documentos oficiales.

### Paso 6: Guardar y Publicar
1. Haz clic en el botón superior: **Save** (Guardar).
2. En ese instante ocurre la magia del sistema:
   - TinaCMS genera automáticamente un commit en GitHub.
   - Vercel detecta la actualización y reconstruye la web en segundo plano.
   - En aproximadamente **30 segundos**, la nueva crónica estará disponible para todos los lectores en **pelotonb.com**.

---

## 4. Método Alternativo Inmediato: Redacción con tu Agente Antigravity

Si en algún momento prefieres no entrar al panel web y redactar de forma conversacional:
1. Puedes escribirle a tu asistente Antigravity en este chat:
   > *"Publica una crónica sobre la final del campeonato de softball femenino con este texto, autor Evelyn Saldarreaga y este enlace de foto/video"*.
2. El agente se encarga de formatear el contenido, validar la compilación y enviarlo a GitHub para que Vercel lo publique automáticamente.
