[![Live Example](https://raw.githubusercontent.com/elarsaks/gorilla-labs/main/apps/client/public/assets/logo.png)](https://gorilla-labs.com/)

<h3 align="center">
  <a href="https://gorilla-labs.com/">Live Example</a>
</h3>

# About

#### 🚧 UNDER DEVELOPMENT 🚧

This project is an NFT marketplace designed to broaden and demonstrate my technical skills. It is currently in development, so appearances may vary over time.

Below is a topological overview of the planned implementation:
![Architecture](https://raw.githubusercontent.com/elarsaks/gorilla-labs/main/docs/architecture/architecture.png)

## Installation and Running

### Prerequisites

- Docker
- Docker Compose

### Setup Instructions

1. **Environment Variables and SSL Certificates**:

   - Add necessary environment variables and SSL certificates to the project's folder as required.
   - For HTTPS testing, place SSL certificates in the project's `/keys` directory.

2. **Installation**:
   Navigate to the project root and run:

```bash
docker-compose up --build
```

**Accessing the Application:**
The application will be accessible on the following ports:

| App         | URL                                                      | Notes                                                                                       |
| ----------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Nginx       | [http://localhost:80](http://localhost:80)               | Web server access point.                                                                    |
| Nginx safe  | [https://localhost:443](https://localhost:443)           | Secure web server access point.                                                             |
| Next JS     | [http://localhost:3000](http://localhost:3000)           | Frontend development server.                                                                |
| Node JS     | [http://localhost:4000/test](http://localhost:4000/test) | Backend API endpoint example.                                                               |
| Postgre SQL | N/A                                                      | PostgreSQL does not provide a browsable URL. Use `localhost:5432` for database connections. |
