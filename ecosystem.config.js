module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'demo-site',
      script    : 'bin/www',
      // env: {  If we don't comment here, it will override below deploy config
      //   PORT: 3011
      // },
      env_production : {
        NODE_ENV: 'production',
        PORT: 4001
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'joe',
      host : '182.254.242.31',
      ref  : 'origin/master',
      repo : 'https://github.com/choelea/google-tag-manager-attempt.git',
      path : '/home/joe/nodejsapp/google-tag-manager-attempt',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
  }
};
