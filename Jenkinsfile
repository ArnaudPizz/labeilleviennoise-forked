pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000'
            args '-u root'
        }
    }
    environment {
        NETLIFY_SITE_ID     = credentials('netlify_site_id')
        NETLIFY_TOKEN       = credentials('netlify_token')
    }
    stages {
        stage('Build'){ 
            steps {
                sh 'corepack enable'
                sh 'corepack prepare pnpm@latest-8 --activate'
                sh 'pnpm install --no-frozen-lockfile'
                sh 'pnpm build:packages'
                sh 'pnpm test'
                sh 'pnpm lint'
            }
        }
        stage('Deploy'){
            steps {
                sh 'netlify deploy -s NETLIFY_SITE_ID -a NETLIFY_TOKEN'
            }

        }
  }
}
