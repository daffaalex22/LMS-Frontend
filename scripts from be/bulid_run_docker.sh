docker rm 
docker build -t fe_inedu_kampusmerdeka:1.0.0 .
# docker run -d -it -p 3001:3000 --name=fe_inedu_kampusmerdeka fe_inedu_kampusmerdeka:1.0.0
docker run --rm -it --name web -p 3000:3000 fe_inedu_kampusmerdeka:1.0.0
docker run --rm -it --name web -p 1337:80 fe_inedu_kampusmerdeka:1.0.1