import { Command } from "@/types";

export const dockerCommands: Command[] = [
  {
    command: "docker run",
    description: "Create and start a new container from an image. Use -d for detached mode, -p for port mapping, -v for volume mounting, --name to assign a name, and -e for environment variables.",
    example: "docker run -d -p 80:80 --name my-nginx nginx",
    keywords: ["create", "start", "container", "detached", "port", "volume", "environment"]
  },
  {
    command: "docker build",
    description: "Build a Docker image from a Dockerfile. Use -t to tag the image, -f to specify a different Dockerfile, and --no-cache to build without using cache.",
    example: "docker build -t myapp:latest .",
    keywords: ["build", "image", "dockerfile", "tag", "cache"]
  },
  {
    command: "docker ps",
    description: "List containers. Shows running containers by default. Use -a to show all containers (including stopped), -q for quiet mode (only IDs), and --filter to filter results.",
    example: "docker ps -a --filter status=exited",
    keywords: ["list", "containers", "running", "stopped", "filter", "status"]
  },
  {
    command: "docker images",
    description: "List all Docker images on the local system. Use -a to show all images including intermediate ones, -q for quiet mode, and --filter to filter results.",
    example: "docker images --filter dangling=true",
    keywords: ["list", "images", "local", "dangling", "filter"]
  },
  {
    command: "docker stop",
    description: "Stop one or more running containers gracefully. Docker sends SIGTERM first, then SIGKILL after grace period. Use -t to specify timeout.",
    example: "docker stop my-container another-container",
    keywords: ["stop", "graceful", "sigterm", "sigkill", "timeout"]
  },
  {
    command: "docker rm",
    description: "Remove one or more containers. Container must be stopped first unless using -f flag. Use -v to remove associated volumes.",
    example: "docker rm -f my-container",
    keywords: ["remove", "delete", "container", "force", "volume"]
  },
  {
    command: "docker rmi",
    description: "Remove one or more images from local storage. Use -f to force removal even if containers are using the image.",
    example: "docker rmi -f image_id",
    keywords: ["remove", "delete", "image", "force", "local"]
  },
  {
    command: "docker exec",
    description: "Execute a command inside a running container. Use -it for interactive terminal, -d for detached mode, -u to specify user, and -w for working directory.",
    example: "docker exec -it my-container /bin/bash",
    keywords: ["execute", "command", "interactive", "terminal", "bash", "shell"]
  },
  {
    command: "docker logs",
    description: "Fetch and display logs from a container. Use -f to follow log output, --tail to show last N lines, --since for time filtering, and -t for timestamps.",
    example: "docker logs -f --tail 100 my-container",
    keywords: ["logs", "output", "follow", "tail", "timestamp", "debug"]
  },
  {
    command: "docker pull",
    description: "Download an image from a Docker registry (Docker Hub by default). Specify tag after colon, defaults to 'latest' if no tag specified.",
    example: "docker pull ubuntu:20.04",
    keywords: ["download", "pull", "registry", "hub", "tag", "latest"]
  },
  {
    command: "docker push",
    description: "Upload an image to a Docker registry. Image must be tagged with registry URL. Requires authentication for private registries.",
    example: "docker push myregistry.com/myapp:v1.0",
    keywords: ["upload", "push", "registry", "tag", "authentication"]
  },
  {
    command: "docker network ls",
    description: "List all Docker networks. Shows bridge, host, and none networks by default, plus any custom networks created.",
    example: "docker network ls",
    keywords: ["network", "list", "bridge", "host", "custom"]
  },
  {
    command: "docker volume ls",
    description: "List all Docker volumes. Volumes persist data beyond container lifecycle and can be shared between containers.",
    example: "docker volume ls",
    keywords: ["volume", "list", "persist", "data", "shared"]
  },
  {
    command: "docker inspect",
    description: "Display detailed information about Docker objects (containers, images, volumes, networks). Returns JSON formatted data.",
    example: "docker inspect my-container",
    keywords: ["inspect", "details", "information", "json", "metadata"]
  },
  {
    command: "docker-compose up",
    description: "Create and start containers defined in docker-compose.yml. Use -d for detached mode, --build to rebuild images, and --scale to scale services.",
    example: "docker-compose up -d --build",
    keywords: ["compose", "multi-container", "yaml", "orchestration", "scale"]
  },
  {
    command: "docker system prune",
    description: "Clean up unused Docker objects. Remove stopped containers, unused networks, dangling images, and build cache.",
    example: "docker system prune -a --volumes",
    keywords: ["cleanup", "prune", "disk", "space", "unused"]
  },
  {
    command: "docker stats",
    description: "Display live resource usage statistics for containers. Monitor CPU, memory, network, and disk I/O in real-time.",
    example: "docker stats --no-stream",
    keywords: ["stats", "monitoring", "cpu", "memory", "performance"]
  },
  {
    command: "docker cp",
    description: "Copy files between container and host filesystem. Transfer files in both directions without stopping container.",
    example: "docker cp container:/app/logs ./logs",
    keywords: ["copy", "files", "transfer", "host", "container"]
  },
  {
    command: "docker commit",
    description: "Create new image from container's changes. Save current state of container as a new image layer.",
    example: "docker commit my-container my-image:v2",
    keywords: ["commit", "save", "state", "image", "layer"]
  },
  {
    command: "docker save",
    description: "Save image to tar archive. Export images for offline transfer or backup purposes.",
    example: "docker save -o myapp.tar myapp:latest",
    keywords: ["save", "export", "tar", "backup", "offline"]
  },
  {
    command: "docker load",
    description: "Load image from tar archive. Import previously saved images from file.",
    example: "docker load -i myapp.tar",
    keywords: ["load", "import", "tar", "restore", "file"]
  },
  {
    command: "docker port",
    description: "List port mappings for container. Show which host ports are mapped to container ports.",
    example: "docker port my-container",
    keywords: ["port", "mapping", "network", "expose"]
  },
  {
    command: "docker top",
    description: "Display running processes inside container. Similar to 'ps' command but for container processes.",
    example: "docker top my-container",
    keywords: ["top", "processes", "ps", "running"]
  },
  {
    command: "docker history",
    description: "Show image layer history. View how image was built and size of each layer.",
    example: "docker history nginx:latest",
    keywords: ["history", "layers", "build", "size"]
  },
  {
    command: "docker update",
    description: "Update container resource limits. Modify CPU, memory limits of running containers.",
    example: "docker update --memory 512m my-container",
    keywords: ["update", "resources", "limits", "memory", "cpu"]
  },
  {
    command: "docker wait",
    description: "Wait for container to stop and return exit code. Useful in scripts for synchronization.",
    example: "docker wait my-container",
    keywords: ["wait", "exit", "code", "synchronization", "script"]
  }
];