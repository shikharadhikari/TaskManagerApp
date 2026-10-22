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

        stage('Validate') {
            steps {
                sh '''
                    set -eu
                    test -f index.html
                    echo "Website files verified"
                '''
            }
        }

        stage('Deploy to Apache') {
            steps {
                sh '''
                    set -eu
                    install -m 664 -t /var/www/html index.html

                    if [ -f style.css ]; then
                        install -m 664 -t /var/www/html style.css
                    fi

                    echo "Deployment successful"
                '''
            }
        }
    }

    post {
        success {
            echo 'Website deployed successfully!'
        }
        failure {
            echo 'Deployment failed. Check Console Output.'
        }
    }
}
