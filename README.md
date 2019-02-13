# afford-house-register

update .env with your information


## Deployment

### Setup Nginx
install nginx
in nginx.conf update server section with

```
root /home/ec2-user/affordableHousingRegister/client/build/;
location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_max_temp_file_size 0;
        proxy_redirect off;
        proxy_read_timeout 240s;
        proxy_pass http://{{internal aws ip address}}:{{port of app.js}}
}
```

restart nginx ``nginx -s reload``


### build production
from root of application
``cd client``
``npm run build``

### start express server
cd back to root
``pm2 start ./bin/www``


### helpful resources
https://www.ibm.com/blogs/bluemix/2017/06/react-web-express-api-development-production/
https://medium.com/@Keithweaver_/setting-up-mern-stack-on-aws-ec2-6dc599be4737
