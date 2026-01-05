# Proyecto: Aplicación web de agencia de viajes — Búsqueda de vuelos y paquetes

Este repositorio ilustra buenas prácticas de colaboración en GitHub para un proyecto full stack.
Incluye una funcionalidad base de *búsqueda de vuelos* y plantillas de Issues/PR, CODEOWNERS,
reglas de CI y un guion de video.

## Flujo de trabajo propuesto (GitHub Flow)
1. Crear rama de trabajo a partir de `main` (ej.: `feature/flight-search`).
2. Commits pequeños con mensajes **Conventional Commits** (ej.: `feat(flights): agregar filtro por fecha`).
3. Abrir **Pull Request** vinculando a un Issue (ej.: `Closes #12`) y solicitar revisión.
4. Superar checks de CI y resolver comentarios.
5. Merge a `main` y despliegue.

## Estructura
- `src/web/` HTML/CSS/JS mínimo para búsqueda de vuelos.
- `api/mock/` datos JSON simulados.
- `.github/` plantillas y workflows.
- `docs/` lista de evidencias y guion de video.

## Cómo probar localmente (estático)
- Abrir `src/web/index.html` en tu navegador o usar una extensión tipo *Live Server*.

