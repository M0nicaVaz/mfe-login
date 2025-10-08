# Login MFE

Landing page e host do aplicativo financeiro.

## Desenvolvimento

### Com Docker
```bash
docker build -t mfe-login .
docker run -p 7777:7777 -v $(pwd):/app -v /app/node_modules mfe-login
```

### Sem Docker
```bash
npm install
npm run dev
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
