kubectl rollout restart deployment hello-world-deployment &&
kubectl rollout status deployment hello-world-deployment &&
echo "Deployment finalizado\n"