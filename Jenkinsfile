pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'corepack enable'
                sh 'corepack prepare pnpm@latest-8 --activate'
                sh 'pnpm install'
		sh 'pnpm test'
            }
        }
    }
}
