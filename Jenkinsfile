pipeline {
    script{
    System.setProperty("org.jenkinsci.plugins.durabletask.BourneShellScript.LAUNCH_DIAGNOSTICS","true")
          }
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
