pipeline {
    agent any
    tools {
        nodejs 'Node-22.11'
    }
    environment {
        IMAGE_NAME = 'express-api'
        DOCKER_USERNSME = ''
        DOCKER_PASSWORD = ''
    }
    stages {
        stage('Fetch') {
            steps {
                cleanWs()
                git url: 'https://github.com/KavishkaSasindu/express-api-CI-CD.git', branch: 'main'
            }
        }
        stage('install dependencies') {
            steps {
                script{
                    dir('api') {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    dir('api') {
                        sh 'npm run build'
                    }
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    dir('api') {
                        sh 'npm test'
                    }
                }
            }
        }
        stage('build image') {
            steps {
                script {
                    dir('api') {
                        sh 'docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} .'
                    }
                }
            }
        }
        stage("push image docker hub") {
            steps {
                script {
                    sh '''
                        trivy image ${IMAGE_NAME}:${BUILD_NUMBER}
                        docker login -u ${DOCKER_USERNSME} -p ${DOCKER_PASSWORD}
                        docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${DOCKER_USERNSME}/${IMAGE_NAME}:${BUILD_NUMBER}
                        docker push ${DOCKER_USERNSME}/${IMAGE_NAME}:${BUILD_NUMBER}
                    '''
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Build Success'
        }
        failure {
            echo 'Build Failure'
        }
    }
}
