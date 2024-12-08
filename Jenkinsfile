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


// pipeline {
//     agent any

//     stages {
//         stage('Deploy') {
//             steps {
//                 withCredentials([usernamePassword(credentialsId: 'remote-server-password', 
//                                                  usernameVariable: 'REMOTE_USER', 
//                                                  passwordVariable: 'REMOTE_PASS')]) {
//                     sh """
//                     sshpass -p $REMOTE_PASS ssh -o StrictHostKeyChecking=no $REMOTE_USER@192.168.0.14 "mkdir pruebaconexion"
//                     """
//                 }
//             }
//         }
//     }
// }


pipeline {
    agent any

    environment {
        REMOTE_SERVER = '192.168.0.14'  // IP del servidor remoto
        GIT_REPO = 'https://github.com/jicastilloh/jenkins-app.git' // URL de tu repositorio
        REMOTE_PATH = '/home/administrator/nueva-app'  // Ruta donde quieres clonar el repositorio
    }

    stages {
        stage('Connect and Deploy') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'remote-server-password', 
                                                  usernameVariable: 'REMOTE_USER', 
                                                  passwordVariable: 'REMOTE_PASS')]) {
                    script {
                        // Comando SSH para conectarse y realizar todas las acciones
                        sh """
                        sshpass -p $REMOTE_PASS ssh -o StrictHostKeyChecking=no $REMOTE_USER@${REMOTE_SERVER} '
                            source /home/administrator/.nvm/nvm.sh && \
                            
                            nvm use 20.18.0 && \

                            cd ${REMOTE_PATH} || mkdir -p ${REMOTE_PATH} && cd ${REMOTE_PATH} && \
                            git clone ${GIT_REPO} . && \
                            npm install && \
                            npm run build && \
                            pm2 start dist/main.js --name "nestjs-app"
                        '
                        """
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'El proyecto se desplegó y se ejecutó con PM2 correctamente en el servidor remoto.'
        }
        failure {
            echo 'Hubo un error al intentar desplegar el proyecto en el servidor remoto.'
        }
    }
}
