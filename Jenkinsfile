
pipeline {
    agent any

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    sh '''
                        set -eu
                        npm install
                    '''
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh '''
                        set -eu
                        npm run build
                        test -f dist/index.html
                    '''
                }
            }
        }

        stage('Deploy to Apache') {
            steps {
                sh '''
                    set -eu
                    test -f frontend/dist/index.html

                    sudo -n /usr/bin/rsync -a --delete \
                        frontend/dist/ /var/www/html/

                    echo "Frontend deployed successfully"
                '''
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: Vite frontend deployed to Apache.'
        }

        failure {
            echo 'FAILED: Check Console Output.'
        }
    }
}
