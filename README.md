# Game of Thrones Angular Project

## Descripción

Este proyecto fue desarrollado como parte del curso de Desarrollo con Angular en la UTN.BA. Es una aplicación web basada en la popular serie *Game of Thrones*, utilizando la API de ThronesAPI ([https://thronesapi.com/api/](https://thronesapi.com/api/)). El objetivo del proyecto es implementar un sistema de navegación entre páginas y consumir datos de una API externa, aplicando buenas prácticas de desarrollo con Angular.

---

## Características

El proyecto consta de tres páginas principales, cada una con temáticas relacionadas con *Game of Thrones*:

1. **Home**:

   - Una introducción al mundo de *Game of Thrones*.
   - Incluye un video de fondo inmersivo relacionado con la serie.

2. **Characters**:

   - Muestra una lista de personajes obtenida desde la API de ThronesAPI.
   - Incluye información relevante como el nombre, imagen y descripción del personaje.

3. **Contact**:

   - Un formulario simple de contacto.
   - Diseñado para que los usuarios puedan enviar mensajes o consultas relacionadas con el sitio.

---

## Tecnologías utilizadas

- **Framework principal**: Angular
- **Lenguajes**: TypeScript, HTML, CSS
- **API externa**: [ThronesAPI](https://thronesapi.com/api/)
- **Estilos**: CSS puro
- **Herramientas adicionales**:
  - Visual Studio Code para el desarrollo
  - Angular CLI para la configuración del proyecto

---

## Configuración y uso

### Requisitos previos

- Node.js (v14 o superior)
- Angular CLI instalado globalmente

### Pasos para ejecutar el proyecto localmente

1. Clonar el repositorio:

   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-repositorio>
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar el servidor de desarrollo:

   ```bash
   ng serve
   ```

4. Abrir la aplicación en el navegador:

   ```
   http://localhost:4200
   ```

---

## Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── characters/
│   │   │   ├── contact/
│   ├── assets/
│   └── environments/
```

---

## Funcionalidades principales

- **Consumo de API**:

  - Uso de servicios de Angular para conectarse a ThronesAPI.
  - Obtención de datos dinámicos para la página de personajes.

- **Sistema de rutas**:

  - Navegación entre las tres páginas principales utilizando Angular Router.

- **Diseño responsivo**:

  - Adaptación del contenido a diferentes dispositivos.

- **Elementos interactivos**:

  - Video de fondo en la página principal.
  - Formulario funcional en la página de contacto.

---

## Futuras mejoras

- Agregar funcionalidades adicionales, como:
  - Una página con detalles específicos de cada personaje.
  - Integración de más datos desde ThronesAPI.
  - Diseños más complejos y personalizados para cada página.

---

## Autor

**Sebastián Ravenna**\
Curso de Desarrollo con Angular, UTN.BA

Si tenés algún comentario o sugerencia, no dudes en contactarme a través de la página de Contact.

