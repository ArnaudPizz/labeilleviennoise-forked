pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build'){ 
            steps {
                sh 'sudo corepack enable'
                sh 'sudo corepack prepare pnpm@latest-8 --activate'
                sh 'sudo pnpm install'
                sh 'sudo pnpm test'
            }
        }
    }
}
