# darwinmartinez94.github.io
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notificación Tinder</title>
    <link rel="icon" href="tinder-logo.png" type="image/png">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
        }
        h1 {
            color: #FF5864;
        }
    </style>
</head>
<body>
    <h1>¡Entraste a mi aplicación!</h1>
    <p>Esta es una notificación simulada con el logo de Tinder.</p>

    <script>
        // Solicitar permiso para mostrar notificaciones
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }

        // Mostrar notificación al cargar la página
        window.onload = function() {
            if (Notification.permission === "granted") {
                new Notification("Entraste a mi aplicación", {
                    icon: "tinder-logo.png",
                    body: "¡Bienvenido!"
                });
            }
        };
    </script>
</body>
</html>
