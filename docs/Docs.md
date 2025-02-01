# Documentación de la API de Gmail con JavaScript

## Introducción
Esta documentación describe la implementación de la API de Gmail utilizando JavaScript. La API permite interactuar con los correos electrónicos de una cuenta de Google, enviando y recibiendo mensajes de manera programática.

## Requisitos Previos
Antes de comenzar, asegúrate de tener lo siguiente:

- Una cuenta de Google.
- Acceso a Google Cloud Console.
- Habilitación de la API de Gmail en el proyecto de Google Cloud.
- Configuración de credenciales OAuth 2.0.
- Un servidor local o entorno de desarrollo con soporte para JavaScript.

## Configuración de la API de Gmail

### 1. Habilitar la API de Gmail
1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente.
3. Navega a **API y Servicios** > **Biblioteca**.
4. Busca "Gmail API" y habilítala.

### 2. Configurar Credenciales
1. En **API y Servicios**, ve a **Credenciales**.
2. Crea una nueva credencial de tipo **OAuth 2.0**.
3. Configura la pantalla de consentimiento con la información de tu aplicación.
4. Descarga el archivo `credentials.json` y guárdalo en tu proyecto.

## Implementación en JavaScript

### 1. Cargar el Cliente de Google
```javascript
function loadGmailApi() {
    gapi.client.load('gmail', 'v1', () => {
        console.log('Gmail API cargada correctamente');
    });
}
```

### 2. Autenticación del Usuario
```javascript
function authenticate() {
    return gapi.auth2.getAuthInstance().signIn().then(() => {
        console.log("Usuario autenticado");
    });
}
```

### 3. Enviar un Correo Electrónico
```javascript
function sendEmail() {
    const email = `
From: me
To: destinatario@example.com
Subject: Prueba API Gmail

Este es un correo enviado desde la API de Gmail con JavaScript.
`;
    const base64EncodedEmail = btoa(email).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    
    gapi.client.gmail.users.messages.send({
        'userId': 'me',
        'resource': {
            'raw': base64EncodedEmail
        }
    }).then(response => {
        console.log("Correo enviado", response);
    }).catch(error => {
        console.error("Error al enviar correo", error);
    });
}
```

## Conclusión
Esta documentación proporciona una guía básica para integrar la API de Gmail en una aplicación JavaScript. Se pueden agregar más funcionalidades, como la gestión de etiquetas y la recuperación de correos electrónicos, según las necesidades del proyecto.
