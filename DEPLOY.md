# 🚀 Deploy con GitHub Actions

## Configuración para GitHub Pages

### 1. Preparación del Repositorio

1. **Crear el repositorio en GitHub:**
   - Ve a GitHub y crea un nuevo repositorio llamado `Visual_Castle_Restaurant`
   - Sube tu código al repositorio

2. **Configurar GitHub Pages:**
   - Ve a Settings > Pages
   - En "Source", selecciona "Deploy from a branch"
   - Selecciona la rama `gh-pages` y la carpeta `/ (root)`
   - Guarda la configuración

### 2. Configuración de GitHub Actions

El workflow ya está configurado en `.github/workflows/deploy.yml` y se ejecutará automáticamente cuando:

- Hagas push a la rama `main` o `master`
- Crear un Pull Request

### 3. Pasos para el Deploy

1. **Subir el código a GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Verificar el deploy:**
   - Ve a la pestaña "Actions" en tu repositorio
   - Verifica que el workflow se ejecute correctamente
   - Una vez completado, tu sitio estará disponible en:
     `https://[tu-usuario].github.io/Visual_Castle_Restaurant/`

### 4. Configuración de Dominio Personalizado (Opcional)

Si quieres usar un dominio personalizado:

1. Ve a Settings > Pages
2. En "Custom domain", ingresa tu dominio
3. Agrega un archivo `CNAME` en la carpeta `public/` con tu dominio

### 5. Troubleshooting

**Problema:** El sitio no se muestra correctamente
- Verifica que la rama `gh-pages` se haya creado
- Revisa los logs en la pestaña Actions
- Asegúrate de que el `base` en `vite.config.js` coincida con el nombre del repositorio

**Problema:** Las rutas no funcionan
- Verifica que estés usando `BrowserRouter` en lugar de `HashRouter`
- Asegúrate de que el `base` esté configurado correctamente

### 6. Variables de Entorno

Si necesitas variables de entorno para producción, agrégalas en:
Settings > Secrets and variables > Actions > Repository secrets

### 7. Monitoreo

- Revisa regularmente la pestaña Actions para ver el estado de los deploys
- Configura notificaciones en GitHub para recibir alertas sobre fallos en el deploy 