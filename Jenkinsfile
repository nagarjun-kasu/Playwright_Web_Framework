pipeline {
  agent {
    label 'docker-agent'
  }

  parameters {
    choice(
      name: 'TEST_ENV',
      choices: ['qa', 'staging', 'prod'],
      description: 'Select the target environment for the Playwright tests'
    )
  }

  environment {
    CI = 'true'
    TEST_ENV = "${params.TEST_ENV}"
  }

  triggers {
    githubPush()
  }

  options {
    timestamps()
    timeout(time: 60, unit: 'MINUTES')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        script {
          if (isUnix()) {
            sh 'node --version && npm --version && npm install'
          } else {
            bat 'node --version && npm --version && npm install'
          }
        }
      }
    }

    stage('Install Playwright Browsers') {
      steps {
        script {
          if (isUnix()) {
            sh 'npx playwright install --with-deps chromium chrome'
          } else {
            bat 'npx playwright install --with-deps chromium chrome'
          }
        }
      }
    }

    stage('Run API Tests') {
      when {
        branch 'main'
      }
      steps {
        script {
          if (isUnix()) {
            sh 'npx playwright test --grep "@api"'
          } else {
            bat 'npx playwright test --grep "@api"'
          }
        }
      }
      post {
        always {
          publishHTML(target: [
            allowMissing: true,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report'
          ])
          archiveArtifacts allowEmptyArchive: true, artifacts: 'allure-results/**,playwright-report/**,test-results/**', fingerprint: true
        }
      }
    }
  }
}
