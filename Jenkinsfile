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
    booleanParam(
      name: 'MANUAL_BUILD',
      defaultValue: false,
      description: 'Enable this for manual execution of the pipeline.'
    )
    string(
      name: 'BRANCH_TO_BUILD',
      defaultValue: 'main',
      description: 'Branch to build when manual execution is requested.'
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
    stage('Prepare Build Branch') {
      steps {
        script {
          env.BUILD_BRANCH = params.MANUAL_BUILD ? params.BRANCH_TO_BUILD : (env.BRANCH_NAME ?: 'main')
          echo "Selected branch: ${env.BUILD_BRANCH}"
        }
      }
    }

    stage('Checkout') {
      when {
        anyOf {
          branch 'main'
          expression { return params.MANUAL_BUILD }
        }
      }
      steps {
        script {
          def branchSpec = "refs/heads/${env.BUILD_BRANCH}"
          checkout([$class: 'GitSCM', branches: [[name: branchSpec]], userRemoteConfigs: scm.userRemoteConfigs, extensions: scm.extensions])
        }
      }
    }

    stage('Install Dependencies') {
      when {
        anyOf {
          branch 'main'
          expression { return params.MANUAL_BUILD }
        }
      }
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
      when {
        anyOf {
          branch 'main'
          expression { return params.MANUAL_BUILD }
        }
      }
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
        anyOf {
          branch 'main'
          expression { return params.MANUAL_BUILD }
        }
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
