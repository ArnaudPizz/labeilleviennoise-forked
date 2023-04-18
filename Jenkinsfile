pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000'
            args '-u root'
        }
    }
    stages {
        stage('Build'){ 
            steps {
                sh 'corepack enable'
                //sh 'corepack prepare pnpm@latest-8 --activate'
                sh 'npm install --no-frozen-lockfile --legacy-peer-deps'
                sh 'npm test'
                sh 'npm run lint'
            }
        }
    }
}
