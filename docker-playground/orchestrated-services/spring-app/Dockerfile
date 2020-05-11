FROM openjdk:latest

VOLUME /tmp

COPY target/spring-app-1.0.0.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]