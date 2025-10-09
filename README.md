# Login MFE

Landing page e host do aplicativo financeiro.

## Desenvolvimento

### Pré-requisitos
- `shared` instalado (`npm install` na raiz e em `shared/`).
- Defina `NEXT_PUBLIC_HOME_URL` conforme `.env.example` para apontar para o dashboard.

### Com Docker
```bash
docker build -t mfe-login .
docker run -p 7777:7777 -v $(pwd):/app -v /app/node_modules mfe-login
```

### Sem Docker
```bash
npm install
NEXT_PUBLIC_HOME_URL=http://localhost:4444 npm run dev
```

Acesse: http://localhost:7777

## Variáveis de Ambiente
Copie `.env.example` para `.env`:
```bash
NEXT_PUBLIC_HOME_URL=http://localhost:4444
```

## Porta
- Desenvolvimento: 7777
- Base path: `/`
- Home esperado: `http://localhost:4444/home`
