---
{
  title: "docker-compose相关命令",
  createDate: "2025-03-27 14:50",
  tabs: [ 'technology' ],
  layout: 'doc'
}
---

# docker-compose镜像相关命令

## **1. 基础操作**
#### **1.1 启动服务**
```bash
# 启动所有服务（前台模式）
docker-compose up

# 启动服务并后台运行
docker-compose up -d

# 仅启动指定服务（带依赖服务）
docker-compose up web redis

# 强制重建容器
docker-compose up --force-recreate

# 启动时构建镜像
docker-compose up --build
```

#### **1.2 停止服务**
```bash
# 停止并删除容器
docker-compose down

# 停止但不删除容器
docker-compose stop

# 停止并删除容器+网络
docker-compose down --remove-orphans

# 停止并删除所有资源（包括volumes）
docker-compose down --volumes --rmi local
```

---

## **2. 服务管理**
#### **2.1 服务状态**
```bash
# 查看运行中的容器
docker-compose ps

# 查看所有容器状态
docker-compose ps -a

# 显示服务日志（实时）
docker-compose logs -f

# 查看指定服务日志
docker-compose logs -f web

# 显示服务进程树
docker-compose top
```

#### **2.2 服务控制**
```bash
# 重启所有服务
docker-compose restart

# 重启指定服务
docker-compose restart web

# 暂停/恢复服务
docker-compose pause web
docker-compose unpause web

# 扩容服务实例
docker-compose up --scale web=3 -d
```

---

## **3. 环境管理**
#### **3.1 多环境配置**
```bash
# 使用指定环境文件
docker-compose --env-file .env.prod up

# 多文件组合配置
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

#### **3.2 环境变量操作**
```bash
# 在命令中覆盖环境变量
docker-compose run -e DEBUG=1 web

# 显示解析后的配置
docker-compose config
```

---

## **4. 调试与维护**
#### **4.1 进入容器**
```bash
# 进入运行中的服务容器
docker-compose exec web bash

# 以root身份执行命令
docker-compose exec --user root web sh

# 在停止的容器中执行命令（需先启动）
docker-compose run --rm web python manage.py migrate
```

#### **4.2 服务调试**
```bash
# 查看服务端口映射
docker-compose port web 80

# 检查服务依赖关系
docker-compose config --services

# 显示服务IP地址
docker-compose exec web hostname -i

# 健康检查状态
docker-compose ps | grep '(healthy)'
```

---

## **5. 镜像与构建**
#### **5.1 镜像管理**
```bash
# 构建所有服务的镜像
docker-compose build

# 强制重建镜像（不使用缓存）
docker-compose build --no-cache

# 仅构建指定服务镜像
docker-compose build web

# 拉取所有服务镜像
docker-compose pull
```

#### **5.2 镜像标记**
```bash
# 推送镜像到仓库
docker-compose push

# 仅推送指定服务镜像
docker-compose push web
```

---

## **6. 网络与卷**
#### **6.1 网络管理**
```bash
# 查看网络配置
docker-compose network ls

# 创建自定义网络
docker-compose network create backend

# 检查网络详情
docker-compose network inspect myapp_default
```

#### **6.2 卷管理**
```bash
# 查看所有数据卷
docker-compose volume ls

# 删除未使用的数据卷
docker-compose volume prune

# 创建命名卷
volumes:
  db_data:
    driver: local
```

---

## **7. 实用技巧**
#### **7.1 性能优化**
```bash
# 并行操作多个容器
docker-compose up --parallel

# 限制服务资源
services:
  web:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
```

#### **7.2 特殊场景**
```bash
# 仅执行一次性命令（容器自动删除）
docker-compose run --rm web bash

# 服务依赖控制（等待数据库就绪）
version: '3.8'
services:
  web:
    depends_on:
      db:
        condition: service_healthy

# 使用服务别名访问
extra_hosts:
  - "api.example.com:10.5.0.5"
```

---

## **8. 常用配置示例**
#### **8.1 基础模板**
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8000:8000"
    volumes:
      - .:/code
    depends_on:
      - redis

  redis:
    image: redis:alpine
    volumes:
      - redis_data:/data

volumes:
  redis_data:
```

#### **8.2 生产配置**
```yaml
services:
  web:
    deploy:
      replicas: 3
      update_config:
        parallelism: 2
        delay: 10s
      restart_policy:
        condition: on-failure
```

---

## **9. 调试工具**
#### **9.1 配置验证**
```bash
# 验证配置文件语法
docker-compose config

# 显示最终合并的配置
docker-compose config > final-config.yml
```

#### **9.2 性能监控**
```bash
# 实时资源监控
docker-compose stats

# 显示服务CPU/内存使用
docker-compose top web
```

---

## **10. 跨平台支持**
#### **10.1 多架构构建**
```yaml
services:
  app:
    platform: linux/arm64
    build: .
```

#### **10.2 环境切换**
```bash
# 使用不同环境配置文件
docker-compose -f docker-compose.yml -f docker-compose.override.yml up

# 快速切换开发/生产模式
profiles:
  - dev

services:
  debugger:
    profiles: ["dev"]
    image: debug-tool
```

---

## **注意事项**
1. 版本兼容性：
    - 使用 `version: '3.8'` 以上支持最新功能
    - 旧版 Docker 需使用 `docker-compose` 命令，新版 Docker 可用 `docker compose` 命令

2. 生产建议：
   ```bash
   # 使用指定版本号
   docker-compose -f docker-compose.prod.yml up -d

   # 设置资源限制
   ulimit:
     nproc: 65535
     nofile:
       soft: 20000
       hard: 40000
   ```

3. 安全实践：
   ```yaml
   # 避免敏感信息硬编码
   environment:
     DB_PASSWORD: ${DB_PASSWORD}
   ```
