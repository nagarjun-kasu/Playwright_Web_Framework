FROM jenkins/inbound-agent:latest

FROM mcr.microsoft.com/playwright:v1.54.0-noble
RUN apt-get update && apt-get install -y docker.io && rm -rf /var/lib/apt/lists/*

USER root

RUN apt-get update && apt-get install -y \
    git \
    curl \
    ca-certificates \
    gnupg \
    wget \
    unzip \
    libgtk-3-0 \
    libnss3 \
    libxss1 \
    libasound2t64 \
    libdrm2 \
    libgbm1 \
    libxshmfence1 \
    libxrandr2 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxkbcommon0 \
    libpangocairo-1.0-0 \
    libpango-1.0-0 \
    libatspi2.0-0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libx11-xcb1 \
    libxcb-dri3-0 \
    xvfb \
    docker.io \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deb.nodesource.com/setup_24.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

RUN npm install -g @playwright/test

RUN npx playwright install --with-deps chromium

USER jenkins
