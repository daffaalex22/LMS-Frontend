docker pull daffaalex22/fe_inedu_kampusmerdeka:1.0.2
docker run -d -p 8080:8080 --name inedu_kampusmerdeka daffaalex22/inedu_kampusmerdeka:1.0.0
docker run --rm -it --name web_aws -p 80:80 daffaalex22/fe_inedu_kampusmerdeka:1.0.2