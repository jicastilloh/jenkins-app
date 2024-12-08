// pipeline {
//     agent any

//     tools {
//         nodejs "NodeJS" // Usa la versión de Node.js configurada en Jenkins
//     }

//     // environment {
//     //     CI = 'true' // Variable de entorno para identificar que estamos en CI
//     // }

//     stages {
//         stage('Checkout') {
//             steps {
//                 echo 'Clonando el repositorio...'
//                 git url: 'https://github.com/jicastilloh/jenkins-app.git', branch: 'main'
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 echo 'Instalando dependencias...'
//                 sh 'npm install'
//             }
//         }

//         stage('Build') {
//             steps {
//                 echo 'Construyendo el proyecto...'
//                 sh 'npm run build'
//             }
//         }
//     }

//     post {
//         success {
//             echo 'Pipeline completado con éxito!'
//         }
//         failure {
//             echo 'El pipeline falló. Revisa los logs.'
//         }
//     }
// }
pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'remote-server-password', 
                                                 usernameVariable: 'REMOTE_USER', 
                                                 passwordVariable: 'REMOTE_PASS')]) {
                    sh """
                    sshpass -p $REMOTE_PASS ssh -o StrictHostKeyChecking=no $REMOTE_USER@192.168.0.14 "mkdir pruebaconexion"
                    """
                }
            }
        }
    }
}
