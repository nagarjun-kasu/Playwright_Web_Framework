pipeline {
  agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.54.0-noble'
            reuseNode true
        }
    }

  parameters {
    choice(
      name: 'TEST_ENV',
      choices: ['qa', 'staging', 'prod'],
      description: 'Select the target environment for the Playwright tests'
    )
    string(
      name: 'BRANCH_TO_BUILD',
      defaultValue: 'main',
      description: 'Branch to build. Leave as "main" for webhook-triggered builds or change for manual runs.'
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
    stage('Determine Branch') {
      steps {
        script {
          env.BUILD_BRANCH = params.BRANCH_TO_BUILD?.trim() ? params.BRANCH_TO_BUILD.trim() : (env.BRANCH_NAME ?: 'main')
          echo "Building branch: ${env.BUILD_BRANCH}"
        }
      }
    }
    stage('Checkout') {
      steps {
        script {
          def branchSpec = "refs/heads/${env.BUILD_BRANCH}"
          checkout([$class: 'GitSCM', branches: [[name: branchSpec]], userRemoteConfigs: scm.userRemoteConfigs, extensions: scm.extensions])
        }
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
